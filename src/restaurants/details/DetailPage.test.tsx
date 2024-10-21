import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';
import { renderWithClient } from '../../test/test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

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
});
