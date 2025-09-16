import { StickyWrapper } from '@/components/sticky-wrapper';
import { FeedWrapper } from '@/components/feed-wrapper';
import { getUserProgress, getUserSubscription } from '@/db/queries';
import { UserProgress } from '@/components/user-progress';
import { redirect } from 'next/navigation';
import Image from 'next/image';

const LeaderboardPage = async () => {
	const userProgressData = getUserProgress();
	const userSubscriptionData = getUserSubscription();

	const [userProgress, userSubscription] = await Promise.all([
		userProgressData,
		userSubscriptionData
	]);

	if (!userProgress || !userProgress.activeCourse) {
		redirect('/courses');
	}

	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={!!userSubscription?.isActive}
				/>
			</StickyWrapper>
			<FeedWrapper>
				<div className="flex w-full flex-col items-center">
					<Image src="/leaderboard.svg" alt="Shop" height={90} width={90} />
					<h1 className="my-6 text-center text-2xl font-bold text-neutral-800">Leaderboard</h1>
					<p className="text-muted-foreground mb-6 text-center text-lg">
						See where you stand among other members in the community.
					</p>
				</div>
			</FeedWrapper>
		</div>
	);
};

export default LeaderboardPage;
