import { Link } from 'react-router-dom';

interface PropInfoCarousel {
	direction: boolean;
}

const InfoCarousel = ({ direction }: PropInfoCarousel) => {
	return (
		<div
			id='sizeRestCaroussel'
			className={`p-10 pl-7 text-justify border-2 border-redDefault lg:h-[42rem] xl:w-[55%] ${
				direction ? '' : 'content-end'
			} `}
		>
			<h2 className='text-xl font-bold'>City Wok</h2>
			<h3 className='text-md'>Comida China</h3>
			<p className='mt-2 py-5'>
				Ingredientes frescos y recetas tradicionales, ofrecemos variedad
				de platillos de todo tipo. Te invitamos a pruebas nuestras
				especialidades.
			</p>
			<button className='mt-4 px-4 py-2 bg-golden font-bold text-blackDefault font-jura'>
				<Link to={'/details/id'}>Ver menú</Link>
			</button>
		</div>
	);
};

export default InfoCarousel;
