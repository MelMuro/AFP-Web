import { useState } from 'react';
import Comida1 from '../../assets/Comida1.png';
import Comida2 from '../../assets/Comida2.png';
import './slider.css';

interface Slide {
	image: string;
	title: string;
	description: string;
}

const slides: Slide[] = [
	{
		image: Comida1, // Reemplaza con tus imágenes
		title: 'Arroz frito especial',
		description: 'Ingredientes frescos y recetas tradicionales...'
	},
	{
		image: Comida2, // Reemplaza con tus imágenes
		title: 'Otro plato',
		description: 'Descripción del otro plato...'
	}
	// Agrega más slides según sea necesario
];

const Carousel: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	return (
		<div className='flex justify-center items-center space-x-4 ml-20 mr-60 mt-28'>
			<div className='w-1/2 px-10 pb-5 pt-10 -mr-32 -mt-2 border-2 border-redDefault'>
				<h2 className='text-xl font-bold'>City Wok</h2>
				<h3 className='text-md'>Comida China</h3>
				<p className='mt-2 pr-52'>
					Ingredientes frescos y recetas tradicionales, ofrecemos
					variedad de platillos de todo tipo. Te invitamos a pruebas
					nuestras especialidades.
				</p>
				<button className='mt-4 px-4 py-2 bg-golden text-blackDefault rounded font-jura'>
					Ver menú
				</button>
			</div>
			<div className='relative w-1/3'>
				<img
					src={slides[currentSlide].image}
					alt={slides[currentSlide].title}
					className='w-full h-full object-cover'
				/>
				<button
					onClick={prevSlide}
					className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-redDefault text-white px-2 py-1'
				>
					&lt;
				</button>
				<button
					onClick={nextSlide}
					className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-redDefault text-white px-2 py-1'
				>
					&gt;
				</button>
				<div className='absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center'>
					{slides[currentSlide].title}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
