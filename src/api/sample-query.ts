import { useQuery } from '@tanstack/react-query';
import Restaurant from '../models/resturant';

export const getRestaurantsQuery = () =>
	useQuery({
		queryKey: ['restaurantsData'],
		queryFn: async (): Promise<Restaurant[]> => {
			const response = await fetch('http://localhost:8000/restaurants');
			if (!response.ok) {
				throw new Error(
					'There was an error while calling the endpoint'
				);
			}
			return response.json();
		}
	});
