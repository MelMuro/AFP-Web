import WhiteLogo from '../assets/WhiteLogo.png';
import gyoza from '../assets/gyoza 1.png';
import './Home.css';
import ParkMap from '../common/ParkMap';

const Home = () => {
	return (
		<>
			<section id='fullBackground' className='relative w-screen h-screen z-10'>
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

			<div id='detailsSection'>
				<section className='px-20 py-44'>
					<h1 className='block font-bold font-jura text-5xl text-center'>
						Un lugar para ti, para todos
					</h1>

					<div className='flex center justify-evenly items-center my-10'>
						<ParkMap />

						<div
							id='listRestaurants'
							className='relative w-1/4 h-fit mx-12 p-8 text-center bg-redDefault text-white'
						>
							<ul>
								<li className='restaurant'>Restaurant 1</li>
								<li className='restaurant'>Restaurant 2</li>
								<li className='restaurant'>Restaurant 3</li>
								<li className='restaurant'>Restaurant 4</li>
								<li className='restaurant'>Restaurant 5</li>
								<li className='restaurant'>Restaurant 6</li>
								<li className='restaurant'>Restaurant 7</li>
							</ul>
						</div>
					</div>
				</section>

				<section className='relative pb-40 px-12 py-'>
					<div className='p-14 border-redDefault w-2/5 border-2'>
						<h2>Horario</h2>
						<p>Lunes a Viernes - 12:00pm a 10:00pm</p>
						<p>Sabados y Domingos - 12:00pm a 12:00am</p>

						<div>
							<img
								className='absolute right-0 bottom-0 w-3/5'
								src={gyoza}
								alt='Gyoza'
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
