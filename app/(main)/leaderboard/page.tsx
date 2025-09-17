import { StickyWrapper } from '@/components/sticky-wrapper';
import { FeedWrapper } from '@/components/feed-wrapper';
import { getUserProgress, getUserSubscription, getTopTenUsers } from '@/db/queries';
import { UserProgress } from '@/components/user-progress';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const LeaderboardPage = async () => {
	const userProgressData = getUserProgress();
	const userSubscriptionData = getUserSubscription();
	const leaderboardData = getTopTenUsers();

	const [userProgress, userSubscription, leaderboard] = await Promise.all([
		userProgressData,
		userSubscriptionData,
		leaderboardData
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
					<Separator className="mb-4 h-0.5 rounded-full" />
					{leaderboard.map((userProgress, index) => (
						<div
							key={userProgress.userId}
							className="full-w flex items-center rounded-xl p-2 px-4 hover:bg-gray-200/50"
						>
							<p className="mr-4 font-bold text-lime-700">{index + 1}</p>
							<Avatar className="ml-3 mr-6 h-12 w-12 border bg-green-500">
								<AvatarImage src={userProgress.userImageSrc} className="object-cover" />
							</Avatar>
							<p className="flex-1 font-bold text-neutral-800">{userProgress.userName}</p>
							<p className="text-muted-foreground">{userProgress.points} XP</p>
						</div>
					))}
				</div>
			</FeedWrapper>
		</div>
	);
};

export default LeaderboardPage;
