'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

import type { getCategories, getCourses } from '@/db/queries';
import { upsertUserProgress } from '@/actions/user-progress';
import { Button } from '@/components/ui/button';
import { Card } from './card';

type Category = Awaited<ReturnType<typeof getCategories>>[number];
type Course = Awaited<ReturnType<typeof getCourses>>[number];

type Props = {
	categories: Category[];
	courses: Course[];
	activeCourseId?: number | null;
};

export const List = ({ categories, courses, activeCourseId }: Props) => {
	const router = useRouter();
	const [pending, startTransition] = useTransition();
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

	const onCourseClick = (id: number) => {
		if (pending) return;
		if (id === activeCourseId) {
			return router.push('/learn');
		}
		startTransition(() => {
			upsertUserProgress(id).catch(() => toast.error('Something went wrong.'));
		});
	};

	if (selectedCategoryId === null) {
		return (
			<div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(201px,1fr))]">
				{categories.map((category) => (
					<Card
						key={category.id}
						id={category.id}
						title={category.title}
						imageSrc={category.imageSrc}
						onClick={() => setSelectedCategoryId(category.id)}
					/>
				))}
			</div>
		);
	}

	const selectedCategory = categories.find((c) => c.id === selectedCategoryId)!;
	const categoryCourses = courses.filter((c) => c.categoryId === selectedCategoryId);

	return (
		<div>
			<div className="flex items-center gap-x-2 pt-6">
				<Button
					variant="ghost"
					size="sm"
					onClick={() => setSelectedCategoryId(null)}
					className="gap-x-1"
				>
					<ChevronLeft className="h-4 w-4" />
					Back
				</Button>
				<span className="text-lg font-bold text-neutral-700">{selectedCategory.title}</span>
			</div>
			<div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-[repeat(auto-fill,minmax(201px,1fr))]">
				{categoryCourses.map((course) => {
					const isAvailable = course.units.length > 0;
					return (
						<Card
							key={course.id}
							id={course.id}
							title={course.title}
							imageSrc={course.imageSrc}
							description={course.description}
							onClick={onCourseClick}
							disabled={pending}
							active={course.id === activeCourseId}
							comingSoon={!isAvailable}
						/>
					);
				})}
			</div>
		</div>
	);
};
