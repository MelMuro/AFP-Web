import dobleFog from '../../assets/dobleFog.png';
import Nube1 from '../../assets/Nube1.png';
import Carousel from './Carousel';
import './Restaurants.css';

const Restaurants = () => {
	return (
		<>
			<section className='relative restaurantPageHero'>
				<div className='flex items-center'>
					<div
						id='introRestaurants'
						className='lg:pr-72 lg:px-28 lg:py-44'
					>
						<h1 className='text-white'>De Asia a tu mesa</h1>
						<p className='text-white '>
							Desde sabores picantes hasta dulces, bienvenido a
							Asia Yá, conoce nuestra variedad de restaurantes
							donde podrás descubrir nuevos sabores o disfrutar de
							tus favoritos llevados a otro nivel.
						</p>
					</div>
					<div className='lg:w-1/2'>
						<img
							src={Nube1}
							alt=''
							className='w-1/4 absolute -left-28'
						/>
						<img
							src={dobleFog}
							alt=''
							className='w-1/3 absolute -right-5 -mt-32'
						/>
					</div>
				</div>
			</section>
			<section id='carousel'>
				<Carousel />
			</section>
		</>
	);
};

export default Restaurants;
