import { useState } from 'react';
import Comida1 from '../../assets/Comida1.png';
import Comida2 from '../../assets/Comida2.png';

interface Slide {
	image: string;
	title: string;
	description: string;
}

const slides: Slide[] = [
	{
		image: Comida1,
		title: 'Arroz frito especial',
		description: 'Ingredientes frescos y recetas tradicionales...'
	},
	{
		image: Comida2,
		title: 'Otro plato',
		description: 'Descripción del otro plato...'
	}
];

const CarouselLeft: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	return (
		<div className='w-1/2 ml-24 '>
			<div className='pl-10 pr-5 py-10 border-2 h-[40rem] w-4/6 border-redDefault'>
				<h2 className='text-xl font-bold'>City Wok</h2>
				<h3 className='text-md'>Comida China</h3>
				<p className='mt-2 py-5'>
					Ingredientes frescos y recetas tradicionales, ofrecemos
					variedad de platillos de todo tipo. Te invitamos a pruebas
					nuestras especialidades.
				</p>
				<button className='mt-4 px-4 py-2 bg-golden font-bold text-blackDefault font-jura'>
					Ver menú
				</button>
			</div>

			<div className='relative w-full h-1/3 border-8 ml-8 -mt-[18rem] border-redDefault'>
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

export default CarouselLeft;
