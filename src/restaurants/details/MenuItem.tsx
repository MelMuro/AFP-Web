import './menuItem.css';
import { Dish } from '../../models/resturant';
import defaultImage from '../../assets/fotoDefault.png';

interface MenuItemProps {
	dish: Dish;
}

export default function MenuItem({ dish }: MenuItemProps) {
	console.log('menuItem ', dish);

	const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		(e.target as HTMLImageElement).src = defaultImage; // Establece la imagen por defecto
	};

	return (
		<article className='flip-container'>
			<section className='card w-72 h-96'>
				<div className='front'>
					<img
						alt='platillo de comida'
						src={dish.picture}
						onError={handleError}
					/>
					<section className='p-2'>
						<p className='labelForm'>{dish.name}</p>
						<p className='infoP'>
							{dish.description.substring(0, 40)}
						</p>

						<aside className='text-base mt-5'>${dish.price}</aside>
					</section>
				</div>
				<section className='back align-middle white'>
					<p className='labelForm'>{dish.name}</p>
					<p className='infoP mt-2 text-justify'>
						{dish.description}
					</p>
					<aside className='infoP text-xl mt-5 text-right text-golden'>
						${dish.price}
					</aside>
				</section>
			</section>
		</article>
	);
}
