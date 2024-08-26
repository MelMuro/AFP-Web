import InfoCarousel from './InfoCarousel';
import ImagesCarousel from './ImagesCarousel';
import { getRestaurantsQuery } from '../../api/restaurants-api';
import Loader from '../../common/Loader/Loader';

const Carousel = () => {
	const { isPending, error, data: restaurants } = getRestaurantsQuery();

	if (isPending) {
		return <Loader />;
	}

	if (error) {
		return `An error has occurred while loading resturants data: ${error.message}`; //TODO: Add an error component
	}

	return (
		<>
			{restaurants.map((restaurant, index) => {
				const direction = index % 2 === 0;
				return (
					<div key={restaurant._id} className='arestaurant'>
						{!direction ? (
							<div className='lg:flex lg:justify-center lg:items-center lg:relative lg:h-fit lg:pb-20 '>
								<InfoCarousel direction={direction} />
								<ImagesCarousel
									direction={direction}
									slides={[restaurant]}
								/>
							</div>
						) : (
							<div className='lg:flex lg:justify-center lg:items-center lg:relative lg:h-fit'>
								<ImagesCarousel
									direction={direction}
									slides={[restaurant]}
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
