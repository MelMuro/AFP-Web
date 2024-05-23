import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getRestaurantsQuery } from './api/sample-query';
import Home from './home/Home';
import NavMenu from './common/NavMenu';
import '../src/home/Home.css';


function App() {
	return (
<>
		{/*<QueryClientProvider client={new QueryClient()}>
			<div className='card'>
				<SampleComponent />
			</div>
		</QueryClientProvider> */}
			<NavMenu/>
		<Home/>
		</>
	);
}

/*const SampleComponent = () => {
	const { isPending, error, data } = getRestaurantsQuery();

	if (isPending) {
		return 'Loading Resturants data...';
	}

	if (error) {
		return `An error has occurred while loading resturants data: ${error.message}`;
	}

	return (
		<ul>
			{data.map((restaurant) => {
				return (
					<li key={restaurant._id}>
						{`Name: ${restaurant.name}, Description: ${restaurant.description}`}{' '}
					</li>
				);
			})}
		</ul>
	);
};*/

export default App;
