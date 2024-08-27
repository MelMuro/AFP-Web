import InfoCarousel from './InfoCarousel';
import ImagesCarousel from './ImagesCarousel';
import { getRestaurantsQuery } from '../../api/restaurants-api';
import Loader from '../../common/Loader/Loader';
import NotFound from '../../common/NotFound';

const Carousel = () => {
	const { isPending, error, data: restaurants } = getRestaurantsQuery();

	if (isPending) {
		return <Loader />;
	}

	if (error) {
		return <NotFound error={true} />;
	}

	return (
		<>
			<div className='lg:grid lg:grid-cols-2 xl:mx-24 lg:my-20 lg:gap-20 lg:mx-20'>
				{restaurants.map((restaurant, index) => {
					const direction = index % 2 === 0;
					return (
						<div key={restaurant._id} className='mb-8'>
							{!direction ? (
								<div className='lg:flex lg:justify-center lg:items-center lg:relative lg:h-fit lg:pb-20'>
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
			</div>
		</>
	);
};

export default Carousel;
