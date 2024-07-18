import './Home.css';
import About from './components/About';
import Hero from './components/Hero';
import MapOptions from './components/MapOptions';
import Schedule from './components/Schedule';

const Home = () => {
	return (
		<>
			<Hero />

			<section id='parkMap' className='detailsSection'>
				<MapOptions />
				<Schedule />
			</section>

			<section className='bg-blackDefault py-20 relative'>
				<About />
			</section>
		</>
	);
};

export default Home;
