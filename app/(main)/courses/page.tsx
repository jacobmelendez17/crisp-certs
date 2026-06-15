import { getCategories, getCourses, getUserProgress } from '@/db/queries';
import { List } from './list';

const CoursesPage = async () => {
	const categoriesData = getCategories();
	const coursesData = getCourses();
	const userProgressData = getUserProgress();

	const [categories, courses, userProgress] = await Promise.all([
		categoriesData,
		coursesData,
		userProgressData,
	]);

	return (
		<div className="mx-auto h-full max-w-[912px]">
			<h1 className="text-neutral-700 text-2xl font-bold">Choose a Certification</h1>
			<List
				categories={categories}
				courses={courses}
				activeCourseId={userProgress?.activeCourseId}
			/>
		</div>
	);
};

export default CoursesPage;
