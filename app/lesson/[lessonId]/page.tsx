// app/lesson/[lessonId]/page.tsx
import { getLesson, getUserProgress, getUserSubscription } from '@/db/queries';
import { redirect } from 'next/navigation';
import { Quiz } from '../quiz';

type LessonPageProps = {
	params: Promise<{ lessonId: string }>; // 👈 match your Next version
};

export default async function LessonIdPage({ params }: LessonPageProps) {
	const { lessonId: lessonIdStr } = await params; // 👈 await the promise
	const lessonId = Number(lessonIdStr);
	if (Number.isNaN(lessonId)) {
		redirect('/learn');
	}

	const [lesson, userProgress, userSubscription] = await Promise.all([
		getLesson(lessonId),
		getUserProgress(),
		getUserSubscription()
	]);

	if (!lesson || !userProgress) {
		redirect('/learn');
	}

	const total = lesson.challenges.length || 1;
	const completed = lesson.challenges.filter((c) => c.completed).length;
	const initialPercentage = (completed / total) * 100;

	return (
		<Quiz
			initialLessonId={lesson.id}
			initialLessonChallenges={lesson.challenges}
			initialHearts={userProgress.hearts}
			initialPercentage={initialPercentage}
			userSubscription={userSubscription}
		/>
	);
}
