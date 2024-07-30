import { useQuery } from '@tanstack/react-query';
import Restaurant from '../models/resturant';

const localHost = import.meta.env.VITE_LOCALHOST;
export const getRestaurantsQuery = () =>

	useQuery({
		queryKey: ['restaurantsData'],
		queryFn: async (): Promise<Restaurant[]> => {
			const response = await fetch(`${localHost}/restaurants`);
			if (!response.ok) {
				throw new Error(
					'There was an error while calling the endpoint'
				);
			}
			return response.json();
		}
	});
