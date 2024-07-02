import Comida1 from '../../assets/Comida1.png';
import Comida2 from '../../assets/Comida2.png';
import InfoCarousel from './InfoCarousel';
import ImagesCarousel from './ImagesCarousel';

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

const Carousel: React.FC = () => {
	return (
		<>
			{slides.map((_, index) => {
				const direction = index % 2 === 0;
				console.log('getDirection', direction);
				return (
					<>
						{!direction ? (
							<div className='flex justify-center items-center relative h-fit pb-20'>
								<InfoCarousel direction={direction} />
								<ImagesCarousel
									direction={direction}
									slides={slides}
								/>
							</div>
						) : (
							<div className='flex justify-center items-center relative h-fit'>
								<ImagesCarousel
									direction={direction}
									slides={slides}
								/>
								<InfoCarousel direction={direction} />
							</div>
						)}
					</>
				);
			})}
		</>
	);
};

export default Carousel;
