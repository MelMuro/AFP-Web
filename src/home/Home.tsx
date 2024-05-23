import WhiteLogo from '../assets/WhiteLogo.png';
import './Home.css';
import ParkMap from '../common/ParkMap';

const Home = () => {
	return (
		<>
			<section id='fullBackground' className='w-screen h-screen'>
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
		</>
	);
};

export default Home;
