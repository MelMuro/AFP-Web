import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('DetailPage', () => {
	it('renders the restaurant name', () => {
		render(<DetailPage />);

		const restaurantName = screen.getByText('City Wok');
		expect(restaurantName).toBeInTheDocument();
	});
});
