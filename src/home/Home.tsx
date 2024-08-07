import './Home.css';
import About from './components/About';
import Hero from './components/Hero';
import MapOptions from './components/MapOptions';
import Schedule from './components/Schedule';

const Home = () => {
	return (
		<>
			<Hero />

			<section id='parkMap' className='detailsSection lg:pl-10 lg:pb-16 '>
				<MapOptions />
				<Schedule />
			</section>

			<section
				id='about'
				className='bg-blackDefault lg:py-20 relative gradientAbout'
			>
				<About />
			</section>
		</>
	);
};

export default Home;
