import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';
import { renderWithClient } from '../../test/test-utils';
import { MemoryRouter } from 'react-router-dom';

describe('DetailPage', () => {
	it('renders the restaurant name', async () => {
		const result = renderWithClient(
			<MemoryRouter>
				<DetailPage />
			</MemoryRouter>
		);
		expect(await result.findByAltText('Restaurant 1')).toBeInTheDocument();
	});
});
