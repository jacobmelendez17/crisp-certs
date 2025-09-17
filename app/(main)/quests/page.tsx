import { StickyWrapper } from '@/components/sticky-wrapper';
import { FeedWrapper } from '@/components/feed-wrapper';
import { getUserProgress, getUserSubscription } from '@/db/queries';
import { UserProgress } from '@/components/user-progress';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Promo } from '@/components/promo';

const quests = [
	{
		title: 'Earn 20 XP',
		value: 20
	},
	{
		title: 'Earn 50 XP',
		value: 50
	},
	{
		title: 'Earn 100 XP',
		value: 100
	},
	{
		title: 'Earn 500 XP',
		value: 500
	},
	{
		title: 'Earn 1000 XP',
		value: 1000
	}
];

const QuestsPage = async () => {
	const userProgressData = getUserProgress();
	const userSubscriptionData = getUserSubscription();

	const [userProgress, userSubscription] = await Promise.all([
		userProgressData,
		userSubscriptionData
	]);

	if (!userProgress || !userProgress.activeCourse) {
		redirect('/courses');
	}

	const isPro = !!userSubscription?.isActive;

	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={isPro}
				/>
				{!isPro && <Promo />}
			</StickyWrapper>
			<FeedWrapper>
				<div className="flex w-full flex-col items-center">
					<Image src="/quests.svg" alt="Quests" height={90} width={90} />
					<h1 className="my-6 text-center text-2xl font-bold text-neutral-800">Leaderboard</h1>
					<p className="text-muted-foreground mb-6 text-center text-lg">
						Complete quests by earning points.
					</p>
					<ul className="w-full">
						{quests.map((quests) => {
							const progress = (userProgress.points / quests.value) * 100;

							return (
								<div className="flex w-full items-center gap-x-4 border-t-2 p-4" key={quests.title}>
									<Image src="/points.svg" alt="Points" width={60} height={60} />
									<div className="flex w-full flex-col gap-y-2">
										<p className="text-xl font-bold text-neutral-700">{quests.title}</p>
										<Progress value={progress} className="h-3" />
									</div>
								</div>
							);
						})}
					</ul>
				</div>
			</FeedWrapper>
		</div>
	);
};

export default QuestsPage;
