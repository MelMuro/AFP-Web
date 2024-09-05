import {
	getMenuPerRestaurantQuery,
	getMenuRestaurantQuery
} from '../../api/restaurants-api';
import Phone from '../../assets/Phone.svg';
import Mail from '../../assets/Mail.svg';
import Face from '../../assets/Face.svg';
import Insta from '../../assets/Insta.svg';
import MenuItem from './MenuItem';
import Schedule from './Schedule';
import { useParams } from 'react-router-dom';
import Loader from '../../common/Loader/Loader';
import NotFound from '../../common/NotFound';
import { MyContext } from '../../common/HeaderContext';
import { useContext } from 'react';

const DetailPage = () => {
	const context = useContext(MyContext);
	const { setValue } = context;
	let { name } = useParams<{ name: string }>();

	const {
		data: restaurantData,
		isLoading: isRestaurantLoading,
		isError,
		error: restaurantError
	} = getMenuPerRestaurantQuery(name!);
	const {
		data: menuData,
		isLoading: isMenuLoading,
		error: menuError
	} = getMenuRestaurantQuery(name!);

	if (isRestaurantLoading || isMenuLoading) {
		return setValue(false), (<Loader />);
	}

	if (restaurantError || menuError) {
		return setValue(isError), (<NotFound hasError={isError} />);
	} else {
	}

	return (
		<>
			<section className='relative'>
				<img
					className='absolute h-[100%] w-full object-cover -z-10 restaurantBanner '
					src={restaurantData?.pictures[0]}
					alt='Fondo'
				/>
				<div className='container py-5 mx-auto flex flex-row items-center text-white z-10 px-32 pt-48 pb-36'>
					<div className='w-1/2 py-2 border-r-2 border-golden'>
						<h1>{restaurantData?.name}</h1>
						<span className='text-golden scheduleCat'>
							{restaurantData?.category}
						</span>
						<p className='infoP w-3/5'>
							{restaurantData?.description}
						</p>
						<ul className='infoP mt-5'>
							<li className='flex items-center'>
								<img
									className='mr-2 w-10'
									src={Phone}
									alt='Phone'
								/>
								<a href={`tel:${restaurantData?.phone}`}>
									{restaurantData?.phone}
								</a>
							</li>
							<li className='flex items-center'>
								<img
									className='mr-2 w-8'
									src={Mail}
									alt='Email'
								/>
								<a href={`mailto:${restaurantData?.email}`}>
									{restaurantData?.email}
								</a>
							</li>
						</ul>
						<div className='flex mt-10'>
							<a href={restaurantData?.media?.facebook}>
								<img
									className='mr-3 w-8'
									src={Face}
									alt='Facebook'
								/>
							</a>
							<a href={restaurantData?.media?.instagram}>
								<img
									className='ml-3 w-8'
									src={Insta}
									alt='Instagram'
								/>
							</a>
						</div>
					</div>
					<div className='w-1/2 pl-24'>
						<Schedule scheduleData={restaurantData?.schedule} />
					</div>
				</div>
			</section>

			<section className='my-10'>
				<h1 className='text-center my-10'>Platillo fuerte</h1>
				<div className='menu-container'>
					<div className='grid grid-cols-4 gap-10 mx-32'>
						{menuData?.dishes?.length ? (
							menuData.dishes.map((dish) => (
								<MenuItem key={dish.name} dish={dish} />
							))
						) : (
							<p>No hay platillos disponibles.</p> // O cualquier mensaje de espera o carga
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailPage;
