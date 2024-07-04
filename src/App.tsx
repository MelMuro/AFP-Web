import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global-styles.css';
import Footer from './common/footer/Footer';
import { Outlet } from 'react-router-dom';
import NavMenu from './common/NavMenu';

const App = () => {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<NavMenu />
			<div className='card'>
				<Outlet />
			</div>
			<Footer />
		</QueryClientProvider>
	);
};

export default App;
