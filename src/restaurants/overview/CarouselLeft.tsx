import { useState } from 'react';
import Comida1 from '../../assets/Comida1.png';
import Comida2 from '../../assets/Comida2.png';
import next from '../../assets/next.png';

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
		<>
			<div className='flex justify-center items-center relative h-fit'>
				<div className='p-10 border-2 h-[42rem] w-[44%] border-redDefault'>
					<h2 className='text-xl font-bold'>City Wok</h2>
					<h3 className='text-md'>Comida China</h3>
					<p className='mt-2 py-5'>
						Ingredientes frescos y recetas tradicionales, ofrecemos
						variedad de platillos de todo tipo. Te invitamos a
						pruebas nuestras especialidades.
					</p>
					<button className='mt-4 px-4 py-2 bg-golden font-bold text-blackDefault font-jura'>
						Ver menú
					</button>
				</div>
				<div className='absolute bottom-10 right-52'>
					<div className='relative w-[150%] h-[18rem] border-8 border-redDefault'>
						<img
							src={slides[currentSlide].image}
							alt={slides[currentSlide].title}
							className='w-full h-full object-cover'
						/>
						<div className='gradient-overlay'></div>
						<button
							onClick={prevSlide}
							className='absolute -left-8 top-1/2 transform -translate-y-1/2 bg-redDefault text-white px-5 py-1 text-3xl z-20'
						>
							<img src={next} alt='' className='w-full' />
						</button>
						<button
							onClick={nextSlide}
							className='absolute -right-8 top-1/2 transform -translate-y-1/2 bg-redDefault text-white px-5 py-1 text-3xl z-20'
						>
							<img
								src={next}
								alt=''
								className='scale-x-[-1] w-full'
							/>
						</button>
						<div className='absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center z-20'>
							{slides[currentSlide].title}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarouselLeft;
