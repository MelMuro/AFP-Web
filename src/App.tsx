import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global-styles.css';
import Footer from './common/footer/Footer';
import NavMenu from './common/NavMenu';
import Restaurants from './restaurants/overview/Restaurants';

function App() {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<div className='card'>
				<NavMenu />
				<Restaurants />
				<Footer />
			</div>
		</QueryClientProvider>
	);
}

export default App;
