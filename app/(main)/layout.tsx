type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<main className="h-full  pl-[256px]">
                <div className="bg-red-500 h-full">
                {children}</main>
                <div></div>
		</>
	);
};

export default MainLayout;
