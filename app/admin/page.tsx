import { isAdmin } from '@/lib/admin';
import { redirect } from 'next/navigation';
import AdminAppClient from './AdminAppClient';

const AdminPage = () => {
	if (!isAdmin) {
		redirect('/');
	}

	return <AdminAppClient />;
};

export default AdminPage;
