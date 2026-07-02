import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NotebookText } from 'lucide-react';
import { cn } from '@/lib/utils';

const BG_COLORS: Record<string, string> = {
	green:  'bg-green-500',
	blue:   'bg-blue-500',
	orange: 'bg-orange-500',
	purple: 'bg-purple-500',
	rose:   'bg-rose-500',
};

type Props = {
	title: string;
	description: string;
	color?: string;
};

export const UnitBanner = ({ title, description, color = 'green' }: Props) => {
	return (
		<div className={cn('flex w-full items-center justify-between rounded-xl p-5 text-white', BG_COLORS[color] ?? 'bg-green-500')}>
			<div className="space-y-2.5">
				<h3 className="text-2xl font-bold">{title}</h3>
				{description && <p className="text-lg">{description}</p>}
			</div>
			<Link href="/lesson">
				<Button
					size="lg"
					variant="secondary"
					className="hidden border-2 border-b-4 active:border-b-2 lg:flex"
				>
					<NotebookText className="mr-2" />
					Continue
				</Button>
			</Link>
		</div>
	);
};
