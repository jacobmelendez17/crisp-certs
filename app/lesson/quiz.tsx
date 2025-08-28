'use client';

import { challenge_options, challenges } from '@/db/schema';

type Props = {
	initialPercentage: number;
	initialHearts: number;
	initialLessonId: number;
	initialLessonChallenges: (typeof challenges.$inferSelect & {
		completed: boolean;
		challengeOptions: (typeof challenge_options.$inferSelect)[];
	})[];
	userSubscription: any; // TODO: Replace with DB type
};

export const Quiz = ({
	initialPercentage,
	initialHearts,
	initialLessonId,
	initialLessonChallenges,
	userSubscription
}: Props) => {
	return <div>Quiz!</div>;
};
