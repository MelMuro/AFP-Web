import WhiteLogo from '../assets/WhiteLogo.png';
import gyoza from '../assets/gyoza 1.png';
import './Home.css';
import ParkMap from '../common/ParkMap';

const Home = () => {
	return (
		<>
			{/*HERO Father container*/}
			<section id='fullFondo' className='w-screen h-screen'>
				<section
					id='bannerInfo'
					className='flex items-center justify-center px-28 '
				>
					<img
						alt='AFP logo'
						src={WhiteLogo}
						className='p-8 w-auto'
					/>
					<section className='w-1/2 text-white px-10'>
						<h1 className='font-bold font-jura text-5xl'>
							Asian Food Park
						</h1>
						<p className='mt-4 font-montserrat text-xl'>
							Sumérgete en un mundo de sabores auténticos y
							emocionantes fusiones que harán vibrar tu paladar.
							<br />
							<br />
							Desde los aromas tentadores hasta los platos
							exquisitos, cada visita es una oportunidad para
							explorar y descubrir nuevos placeres culinarios.
						</p>
					</section>
				</section>
			</section>

			{/*MAP Container*/}

			<section className='mx-20 my-40'>
				<h1 className='block font-bold font-jura text-5xl text-center'>
					Un lugar para ti, para todos
				</h1>

				<div className='flex center justify-evenly items-center my-10'>
					<ParkMap />

					<div
						id='listRestaurants'
						className='relative w-1/4 h-fit mx-12 p-8 text-center bg-red-800 text-white'
					>
						{/*LIST OF RESTAURANTS*/}
						<p className='restaurant'>Restaurant 1</p>
						<p className='restaurant'>Restaurant 2</p>
						<p className='restaurant'>Restaurant 3</p>
						<p className='restaurant'>Restaurant 4</p>
						<p className='restaurant'>Restaurant 5</p>
						<p className='restaurant'>Restaurant 6</p>
						<p className='restaurant'>Restaurant 7</p>
					</div>
				</div>
			</section>

			{/*SCHEDULE*/}
			<section className='relative'>
				<div className='relative p-10 border-red-800 w-1/3 border-2'>
					<h2>Horario</h2>
					<p>Lunes a Viernes - 12:00pm a 10:00pm</p>
					<p>Sabados y Domingos - 12:00pm a 12:00am</p>

					<div>
						<img
							className='absolute right-0 bottom-1/2'
							src={gyoza}
							alt='Gyoza'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
