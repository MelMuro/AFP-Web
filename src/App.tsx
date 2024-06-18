import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global-styles.css';
import Footer from './common/footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<div className='card'>
				<Outlet />
				<Footer />
			</div>
		</QueryClientProvider>
	);
};

export default App;
