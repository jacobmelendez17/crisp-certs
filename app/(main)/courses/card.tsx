import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';

type Props = {
	title: string;
	id: number;
	imageSrc: string;
	description?: string;
	onClick: (id: number) => void;
	disabled?: boolean;
	active?: boolean;
	comingSoon?: boolean;
};

export const Card = ({
	title,
	id,
	imageSrc,
	description,
	disabled,
	onClick,
	active,
	comingSoon,
}: Props) => {
	return (
		<div
			onClick={() => onClick(id)}
			className={cn(
				'relative flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2',
				(disabled || comingSoon) && 'pointer-events-none',
				disabled && 'opacity-50',
				comingSoon && 'cursor-default'
			)}
		>
			<div className="flex w-full items-center justify-end">
				{active && (
					<div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
						<Check className="h-4 w-4 stroke-[4] text-white" />
					</div>
				)}
			</div>
			<Image
				src={imageSrc}
				alt={title}
				height={70}
				width={93.33}
				className={cn('rounded-lg border object-cover drop-shadow-md', comingSoon && 'opacity-40')}
			/>
			<div className="flex flex-col items-center gap-y-1">
				<p className={cn('mt-3 text-center font-bold text-neutral-700', comingSoon && 'text-neutral-400')}>
					{title}
				</p>
				{comingSoon ? (
					<span className="rounded-full bg-neutral-200 px-3 py-0.5 text-xs font-semibold text-neutral-500">
						Coming Soon
					</span>
				) : (
					description && (
						<p className="text-center text-xs text-neutral-500">{description}</p>
					)
				)}
			</div>
		</div>
	);
};
