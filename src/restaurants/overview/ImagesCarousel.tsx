import { useState } from 'react';
import next from '../../assets/next.png';
import { Restaurant } from '../../models/resturant';

interface PropImagesCarousel {
	slides: Restaurant[];
	direction: boolean;
}

const ImagesCarousel: React.FC<PropImagesCarousel> = ({
	direction,
	slides
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextSlide = () => {
		if (currentImageIndex === slides[currentSlide].pictures.length - 1) {
			setCurrentImageIndex(0);
			setCurrentSlide((prev) =>
				prev === slides.length - 1 ? 0 : prev + 1
			);
		} else {
			setCurrentImageIndex((prev) => prev + 1);
		}
	};

	const prevSlide = () => {
		if (currentImageIndex === 0) {
			setCurrentSlide((prev) =>
				prev === 0 ? slides.length - 1 : prev - 1
			);
			setCurrentImageIndex(
				slides[
					currentSlide === 0 ? slides.length - 1 : currentSlide - 1
				].pictures.length - 1
			);
		} else {
			setCurrentImageIndex((prev) => prev - 1);
		}
	};

	return (
		<div
			id='imageCar'
			className={`lg:absolute ${
				direction
					? 'lg:bottom-14 xl:bottom-4 lg:-right-5 xl:right-5 md:right-0 min-[1800px]:right-24 min-[1800px]:bottom-12'
					: 'lg:top-14 xl:top-4 lg:-left-5 xl:left-5  md:left-0 min-[1800px]:left-24 min-[1800px]:top-12'
			} `}
		>
			<div className='relative xl:w-[30rem] xl:h-[18rem] border-8 border-redDefault contImgCar '>
				<>
					<img
						src={slides[currentSlide].pictures[currentImageIndex]}
						alt={slides[currentSlide].name}
						className='carouselImages xl:w-full xl:h-full lg:object-cover md:w-[100vh] md:h-[15rem]'
					/>
				</>
				<div className='gradient-overlay'></div>
				<button
					onClick={prevSlide}
					className='absolute -left-8 top-1/2 transform -translate-y-1/2 bg-redDefault text-white lg:ml-0 ml-5 px-5 py-1 text-3xl z-20'
				>
					<img src={next} alt='' className='w-full' />
				</button>
				<button
					onClick={nextSlide}
					className='absolute -right-8 top-1/2 transform -translate-y-1/2 bg-redDefault text-white lg:mr-0 mr-5 px-5 py-1 text-3xl z-20'
				>
					<img src={next} alt='' className='scale-x-[-1] w-full' />
				</button>
			</div>
		</div>
	);
};

export default ImagesCarousel;
