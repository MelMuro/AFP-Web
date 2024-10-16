import Restaurants from './Restaurants';
import { renderWithClient } from '../../test/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/dom';

describe('Restaurants', () => {
	it('renders restaurants components', async () => {
		const result = renderWithClient(
			<MemoryRouter>
				<Restaurants />
			</MemoryRouter>
		);

		expect(await result.findByAltText('Restaurant 1')).toBeInTheDocument();
		expect(await result.findByAltText('Restaurant 2')).toBeInTheDocument();
		expect(
			await result.getByText('Some test description')
		).toBeInTheDocument();
	});

	it('Click buttons Carousel section', async () => {
		const result = renderWithClient(
			<MemoryRouter>
				<Restaurants />
			</MemoryRouter>
		);

		expect(await result.findByAltText('chilaquiles')).toBeInTheDocument();

		// const slideButton = result.getByAltText('next');
		// fireEvent.change(slideButton);
	});
});
