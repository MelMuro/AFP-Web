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
import { HeaderContext } from '../../common/HeaderContext';
import { useContext } from 'react';

const DetailPage = () => {
	const { setIsError } = useContext(HeaderContext);
	let { name } = useParams<{ name: string }>();

	const {
		data: menuData,
		isLoading: isMenuLoading,
		error: menuError,
		isError: menuIsError
	} = getMenuRestaurantQuery(name!);

	if (isMenuLoading) {
		setIsError(false);
		return <Loader />;
	}

	if (menuError || !menuData) {
		setIsError(menuIsError || !menuData);
		return <NotFound hasError={menuIsError || !menuData} />;
	}

	return (
		<>
			<section className='relative'>
				<img
					className='absolute h-[100%] w-full object-cover -z-10 restaurantBanner '
					src={menuData?.pictures[0]}
					alt='Fondo'
				/>
				<div className='container py-5 mx-auto flex flex-row items-center text-white z-10 px-32 pt-48 pb-36'>
					<div className='w-1/2 py-2 border-r-2 border-golden'>
						<h1>{menuData?.name}</h1>
						<span className='text-golden scheduleCat'>
							{menuData?.category}
						</span>
						<p className='infoP w-3/5'>{menuData?.description}</p>
						<ul className='infoP mt-5'>
							<li className='flex items-center'>
								<img
									className='mr-2 w-10'
									src={Phone}
									alt='Phone'
								/>
								<a href={`tel:${menuData?.phone}`}>
									{menuData?.phone}
								</a>
							</li>
							<li className='flex items-center'>
								<img
									className='mr-2 w-8'
									src={Mail}
									alt='Email'
								/>
								<a href={`mailto:${menuData?.email}`}>
									{menuData?.email}
								</a>
							</li>
						</ul>
						<div className='flex mt-10'>
							<a href={menuData?.media?.facebook}>
								<img
									className='mr-3 w-8'
									src={Face}
									alt='Facebook'
								/>
							</a>
							<a href={menuData?.media?.instagram}>
								<img
									className='ml-3 w-8'
									src={Insta}
									alt='Instagram'
								/>
							</a>
						</div>
					</div>
					<div className='w-1/2 pl-24'>
						<Schedule scheduleData={menuData?.schedule} />
					</div>
				</div>
			</section>

			<section className='my-10'>
				<h1 className='text-center my-10'>Platillo fuerte</h1>
				<div className='menu-container'>
					<div className='grid grid-cols-4 gap-10 mx-32'>
						{menuData?.menu?.length ? (
							menuData.menu.map((dish) => (
								<MenuItem key={dish.name} dish={dish} />
							))
						) : (
							<p>No hay platillos disponibles.</p>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailPage;
