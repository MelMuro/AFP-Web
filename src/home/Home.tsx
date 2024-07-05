import './Home.css';
import About from './components/About';
import Hero from './components/Home/Hero';
import MapOptions from './components/Home/MapOptions';
import Schedule from './components/Home/Schedule';

const Home = () => {
	return (
		<>
			<Hero />

			<section id='detailsSection'>
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
