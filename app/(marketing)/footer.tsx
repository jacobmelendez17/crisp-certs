import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
			<div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
				<Button size="lg" variant="ghost">
					<Image src="/azure.svg" alt="Azure" height={32} width={40} className="mr-4 rounded-md" />
					Azure
				</Button>
				<Button size="lg" variant="ghost">
					<Image
						src="/google.svg"
						alt="Google"
						height={32}
						width={40}
						className="mr-4 rounded-md"
					/>
					Google
				</Button>
				<Button size="lg" variant="ghost">
					<Image src="/aws.svg" alt="AWS" height={32} width={40} className="mr-4 rounded-md" />
					AWS
				</Button>
				<Button size="lg" variant="ghost">
					<Image
						src="/comptia.webp"
						alt="CompTIA"
						height={32}
						width={40}
						className="mr-4 rounded-md"
					/>
					CompTIA
				</Button>
			</div>
		</footer>
	);
};
