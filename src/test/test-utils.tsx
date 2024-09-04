import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { RestaurantsMock } from './restaurants-mock';

const localHost = import.meta.env.VITE_LOCALHOST;

export const handlers = [
	http.get(`${localHost}/restaurants`, () => {
		return HttpResponse.json(RestaurantsMock);
	})
];

const createTestQueryClient = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	});
	return queryClient;
};

export function renderWithClient(ui: React.ReactElement) {
	const client = createTestQueryClient();
	const { rerender, ...result } = render(
		<QueryClientProvider client={client}>{ui}</QueryClientProvider>
	);
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) =>
			rerender(
				<QueryClientProvider client={client}>
					{rerenderUi}
				</QueryClientProvider>
			)
	};
}
