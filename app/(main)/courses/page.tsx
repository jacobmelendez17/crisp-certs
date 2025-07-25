import { getCourses } from '@/db/queries';

const CoursesPage = async () => {
	const data = await getCourses();

	return (
		<div className="mx-auto h-full max-w-[912px]">
			<h1 className="text-neurtral-700 text-2xl font-bold">Language Courses</h1>
			{JSON.stringify(data)}
		</div>
	);
};

export default CoursesPage;
