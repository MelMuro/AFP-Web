import { fireEvent } from '@testing-library/react';
import DetailPage from './DetailPage';
import { renderWithClient } from '../../test/test-utils';
import { MemoryRouter, Route, Router, Routes } from 'react-router-dom';
import Restaurants from '../overview/Restaurants';
describe('DetailPage', () => {
	it('renders the restaurant name', async () => {
		const result = renderWithClient(
			<MemoryRouter initialEntries={['/details/Restaurant%201']}>
				<Routes>
					<Route path='/details/:name' element={<DetailPage />} />
				</Routes>
				<DetailPage />
			</MemoryRouter>
		);

		expect(await result.findByText('Restaurant 1')).toBeInTheDocument();
		expect(
			await result.findByText('Some test description')
		).toBeInTheDocument();

		expect(
			await result.findByText('Lunes: 8:00 - 17:00')
		).toBeInTheDocument();

		expect(
			await result.findByText('Sabado: 8:00 - 17:00')
		).toBeInTheDocument();
	});

	it('Click a restaurant and load detail pages', async () => {
		const result = renderWithClient(
			<MemoryRouter initialEntries={['/restaurants']}>
				<Routes>
					<Route path='restaurants' element={<Restaurants />} />
					<Route path='/details/:name' element={<DetailPage />} />
				</Routes>
			</MemoryRouter>
		);
		expect(await result.getByText('De Asia a tu mesa')).toBeInTheDocument();
		expect(await result.findByText('Restaurant 1')).toBeInTheDocument();

		const fistButton = await result.findAllByText('Ver menú');
		fireEvent.click(fistButton[0]);
		expect(await result.findByText('Horarios')).toBeInTheDocument();
	});
});
