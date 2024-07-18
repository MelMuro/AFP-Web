import './menuItem.css';

export default function MenuItem() {
	return (
		<article className='flip-container'>
			<section className='card w-72 h-96'>
				<div className='front'>
					<img
						alt='platillo de comida'
						src='https://www.orientalmarket.es/recetas/wp-content/uploads/2022/05/arroz-frito.jpeg'
					/>
					<section className='p-2'>
						<p className='labelForm'>Arroz Yakimeshi</p>
						<p className='infoP'>
							Arroz frito con verduras y proteina a elegir...
						</p>

						<aside className='text-base mt-5'>$95.00</aside>
					</section>
				</div>
				<section className='back align-middle white'>
					<p className='labelForm'>Arroz Yakimeshi</p>
					<p className='infoP mt-2 text-justify'>
						Arroz frito con verduras y proteina a elegir entre
						pollo, carne de res o cámaron. Al sartén con salsa
						especial de la casa y acompañado con verduras.
					</p>
					<aside className='infoP text-xl mt-5 text-right text-golden'>
						$95.00
					</aside>
				</section>
			</section>
		</article>
	);
}
