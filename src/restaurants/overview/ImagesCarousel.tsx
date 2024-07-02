import { useState } from 'react';
import next from '../../assets/next.png';

interface PropImagesCarousel {
	slides: Slide[];
	direction: boolean;
}

const ImagesCarousel: React.FC<PropImagesCarousel> = ({
	direction,
	slides
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};
	return (
		<div
			className={`absolute ${
				direction ? 'bottom-10 right-52' : 'top-10 left-5'
			} `}
		>
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
					<img src={next} alt='' className='scale-x-[-1] w-full' />
				</button>
				<div className='absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center z-20'>
					{slides[currentSlide].title}
				</div>
			</div>
		</div>
	);
};

export default ImagesCarousel;
