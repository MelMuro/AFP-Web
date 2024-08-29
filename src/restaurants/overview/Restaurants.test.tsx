import Restaurants from './Restaurants';
import { renderWithClient } from '../../test/test-utils';
import { MemoryRouter } from 'react-router-dom';

describe('Restaurants', () => {
	it('renders restaurants components', async () => {
		const result = renderWithClient(
			<MemoryRouter>
				<Restaurants />
			</MemoryRouter>
		);

		expect(await result.findByAltText('Restaurant 1')).toBeInTheDocument();
		expect(await result.findByAltText('Restaurant 2')).toBeInTheDocument();
	});
});
