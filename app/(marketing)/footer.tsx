import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
			<div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
				<Button size="lg" variant="ghost">
					<Image src="/jp.svg" alt="Japanese" height={32} width={40} className="mr-4 rounded-md" />
					Japanese
				</Button>
				<Button size="lg" variant="ghost">
					<Image src="/mx.svg" alt="Japanese" height={32} width={40} className="mr-4 rounded-md" />
					Spanish
				</Button>
				<Button size="lg" variant="ghost">
					<Image src="/fr.svg" alt="Japanese" height={32} width={40} className="mr-4 rounded-md" />
					French
				</Button>
				<Button size="lg" variant="ghost">
					<Image src="/ph.svg" alt="Japanese" height={32} width={40} className="mr-4 rounded-md" />
					Philippines
				</Button>
			</div>
		</footer>
	);
};
