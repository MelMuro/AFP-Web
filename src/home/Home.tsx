import './Home.css';
import About from './components/About';
import Hero from './components/Hero';
import MapOptions from './components/MapOptions';
import Schedule from './components/Schedule';

const Home = () => {
	return (
		<>
			<Hero />

			<section id='parkMap' className='detailsSection lg:pl-10 lg:pb-52 '>
				<MapOptions />
				<Schedule />
			</section>

			<section
				id='about'
				className='bg-blackDefault xl:py-20 xl:-mt-[46%] lg:-mt-[75%] relative gradientAbout'
			>
				<About />
			</section>
		</>
	);
};

export default Home;
