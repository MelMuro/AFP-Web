import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailPage from './restaurants/details/DetailPage';
import './global-styles.css';
import Footer from './common/footer/Footer';

const App = () => {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<div className='card'>
				<DetailPage />
				<Footer />
			</div>
		</QueryClientProvider>
	);
};

export default App;
