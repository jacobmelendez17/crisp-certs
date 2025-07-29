import { getCourses, getUserProgress } from '@/db/queries';
import { List } from './list';

const CoursesPage = async () => {
	const coursesData = getCourses();
	const userProgressData = getUserProgress();

	const [courses, userProgress] = await Promise.all([coursesData, userProgressData]);

	return (
		<div className="mx-auto h-full max-w-[912px]">
			<h1 className="text-neurtral-700 text-2xl font-bold">Language Courses</h1>
			<List courses={courses} activeCourseId={userProgress?.activeCourseId} />
		</div>
	);
};

export default CoursesPage;
