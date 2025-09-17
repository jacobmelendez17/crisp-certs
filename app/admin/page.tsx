import { isAdmin } from '@/lib/admin';
//import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import AdminAppClient from './AdminAppClient';

//const App = dynamic(() => import('./app'), { ssr: false });

const AdminPage = () => {
	if (!isAdmin) {
		redirect('/');
	}

	return <AdminAppClient />;
};

export default AdminPage;
