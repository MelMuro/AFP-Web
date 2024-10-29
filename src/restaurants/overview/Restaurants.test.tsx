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

		expect(await result.findByText('Restaurant 1')).toBeInTheDocument();
		expect(await result.getByText('Restaurant 2')).toBeInTheDocument();

		expect(
			await result.getByText('Some test description')
		).toBeInTheDocument();
	});

	it('Click next button Carousel section', async () => {
		const result = renderWithClient(
			<MemoryRouter>
				<Restaurants />
			</MemoryRouter>
		);

		expect(await result.findByAltText('chilaquiles')).toBeInTheDocument();

		const [slideButtonNext] = result.getAllByAltText('next');
		fireEvent.click(slideButtonNext);

		expect(await result.findByAltText('carlota')).toBeInTheDocument();
	});

	it('Click prev button Carousel section', async () => {
		const result = renderWithClient(
			<MemoryRouter>
				<Restaurants />
			</MemoryRouter>
		);

		expect(await result.findByAltText('Espaguetti')).toBeInTheDocument();

		const slideButtonsPrev = result.getAllByAltText('prev');
		fireEvent.click(slideButtonsPrev[1]);

		expect(await result.findByAltText('Sake')).toBeInTheDocument();
	});
});
