import dobleFog from '../../assets/dobleFog.png';
import Nube1 from '../../assets/Nube1.png';
import Carousel from './Carousel';

const Restaurants = () => {
	return (
		<>
			<section className='relative restaurantPageHero'>
				<div className='flex items-center'>
					<div className='w-1/2 px-14 py-44'>
						<h1 className='text-white'>De Asia a tu mesa</h1>
						<p className='text-white w-1/2'>
							Desde sabores picantes hasta dulces, bienvenido a
							Asia Yá, conoce nuestra variedad de restaurantes
							donde podrás descubrir nuevos sabores o disfrutar de
							tus favoritos llevados a otro nivel.
						</p>
						<img
							src={Nube1}
							alt=''
							className='w-1/4 absolute -left-28'
						/>
					</div>
					<div className='w-1/2'>
						<img
							src={dobleFog}
							alt=''
							className='w-1/3 absolute -right-5 -mt-32'
						/>
					</div>
				</div>
			</section>
			<section className='grid grid-cols-2 mx-24 my-20'>
				<Carousel />
			</section>
		</>
	);
};

export default Restaurants;
