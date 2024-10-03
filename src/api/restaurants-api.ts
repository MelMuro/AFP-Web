import { useQuery } from '@tanstack/react-query';
import { Restaurant, Menu } from '../models/resturant';

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

export const getMenuPerRestaurantQuery = (name: string) =>
	useQuery({
		queryKey: ['menuData', name],
		queryFn: async (): Promise<Restaurant> => {
			// Cambié de Restaurant[] a Restaurant
			const response = await fetch(`${localHost}/restaurants/${name}`);
			if (!response.ok) {
				throw new Error('¡Algo ocurrió al cargar la información!');
			}
			return response.json(); // Esto debe devolver un solo objeto Restaurant
		}
	});

export const getMenuRestaurantQuery = (name: string) =>
	useQuery({
		queryKey: ['menuData', name],
		queryFn: async (): Promise<Restaurant> => {
			const response = await fetch(`${localHost}/restaurants/${name}`);
			if (!response.ok) {
				throw new Error(
					'There was an error while calling the endpoint'
				);
			}
			const data = await response.json();
			return data ?? {}; // Retorna un objeto vacío en caso de que no haya datos
		}
	});
