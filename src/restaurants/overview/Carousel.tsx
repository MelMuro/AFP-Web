import Comida1 from '../../assets/Comida1.png';
import Comida2 from '../../assets/Comida2.png';
import InfoCarousel from './InfoCarousel';
import ImagesCarousel from './ImagesCarousel';
import { getRestaurantsQuery } from '../../api/restaurants-api';

const slides: Slide[] = [
	{
		image: Comida1,
		title: 'Arroz frito especial',
		description: 'Ingredientes frescos y recetas tradicionales...'
	},
	{
		image: Comida2,
		title: 'Otro plato',
		description: 'Descripción del otro plato...'
	}
];

const Carousel = () => {
	const { isPending, error, data: restaurants } = getRestaurantsQuery();

	if (isPending) {
		return 'Loading Resturants data...'; //TODO: Add a spinner
	}

	if (error) {
		return `An error has occurred while loading resturants data: ${error.message}`; //TODO: Add an error component
	}

	return (
		<>
			{restaurants.map((restaurant, index) => {
				const direction = index % 2 === 0;
				return (
					<div key={restaurant._id}>
						{!direction ? (
							<div className='flex justify-center items-center relative h-fit pb-20'>
								<InfoCarousel direction={direction} />
								<ImagesCarousel
									direction={direction}
									slides={slides}
								/>
							</div>
						) : (
							<div className='flex justify-center items-center relative h-fit'>
								<ImagesCarousel
									direction={direction}
									slides={slides}
								/>
								<InfoCarousel direction={direction} />
							</div>
						)}
					</div>
				);
			})}
		</>
	);
};

export default Carousel;
