import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('DetailPage', () => {
	test('renders the restaurant name', () => {
		render(<DetailPage />);

		const restaurantName = screen.getByText('City Wok');
		expect(restaurantName).toBeInTheDocument();
	});
});
