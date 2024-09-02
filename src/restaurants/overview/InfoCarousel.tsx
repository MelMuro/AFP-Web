import { Link } from 'react-router-dom';
import Restaurant from '../../models/resturant';

interface PropInfoCarousel {
	slides: Restaurant[];
	direction: boolean;
}

const InfoCarousel = ({ direction, slides }: PropInfoCarousel) => {
	return (
		<div
			id='sizeRestCaroussel'
			className={`p-10 pl-7 text-justify border-2 border-redDefault lg:h-[42rem] xl:w-[55%] ${
				direction ? '' : 'content-end'
			} `}
		>
			<h2 className='text-xl font-bold'>{slides[0].name}</h2>
			<h3 className='text-md'>{slides[0].category}</h3>
			<p className='mt-2 py-5'>
				{slides[0].description.split(' ').length > 25
					? slides[0].description.split(' ', 25).join(' ') + '...'
					: slides[0].description}
			</p>
			<button className='mt-4 px-4 py-2 bg-golden font-bold text-blackDefault font-jura'>
				<Link to={'/details/id'}>Ver menú</Link>
			</button>
		</div>
	);
};

export default InfoCarousel;
