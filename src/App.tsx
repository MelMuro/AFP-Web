import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailPage from './restaurant/details/DetailPage';

function App() {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<div className='card'>
				<DetailPage />
			</div>
		</QueryClientProvider>
	);
}

export default App;
