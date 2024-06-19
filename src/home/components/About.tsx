import React from 'react';
import aboutGrande1 from '../../assets/aboutGrande1.png';
import aboutMediano1 from '../../assets/aboutMediano1.png';
import aboutSmall1 from '../../assets/aboutSmall1.png';
import aboutXsmall1 from '../../assets/aboutXsmall1.png';
import aboutGrande2 from '../../assets/aboutGrande2.png';
import aboutMediano2 from '../../assets/aboutMediano2.png';
import aboutSmall2 from '../../assets/aboutSmall2.png';
import aboutXsmall2 from '../../assets/aboutXsmall2.png';

export default function About() {
	return (
		<>
			<section className='flex center justify-evenly items-center h-screen pr-28 pl-28'>
				<section className='w-2/5'>
					<h2 className='text-white'>Sabor oriental</h2>
					<p className='infoP text-white mt-4'>
						Nos basamos en un ambiente culinario popular en Asia,
						brindandole a tu paladar sabores, texturas y
						experiencias diferentes y únicas.
					</p>
					<p className='infoP text-white mt-4'>
						Deleitate con platillos traidos del otro lado del mundo,
						ingredientes frescos y recetas autenticas.
					</p>

					<button className='goldenButton labelForm mt-4'>
						Conoce nuestros restaurantes
					</button>
				</section>

				<section className='w-1/2 relative'>
					<div className='relative'>
						<img
							className='absolute z-0 w-3/4 right-10 -bottom-56'
							src={aboutGrande1}
						/>
						<img
							className='absolute z-10 right-0 w-56'
							src={aboutMediano1}
						/>
						<img
							className='absolute z-20 w-44 top-28 right-36'
							src={aboutSmall1}
						/>
						<img
							className='absolute z-30  w-36 top-36 right-72'
							src={aboutXsmall1}
						/>
					</div>
				</section>
			</section>

			<section className='flex justify-end items-center h-screen pr-28 pl-28'>
				<section className='w-1/2 relative'>
					<div className='relative'>
						<img
							className='absolute z-0 w-3/4 left-10 -bottom-56'
							src={aboutGrande2}
						/>
						<img
							className='absolute z-10 left-0 w-56'
							src={aboutMediano2}
						/>
						<img
							className='absolute z-20 w-44 top-28 left-36'
							src={aboutSmall2}
						/>
						<img
							className='absolute z-30 w-36 top-36 left-72'
							src={aboutXsmall2}
						/>
					</div>
				</section>

				<section className='w-2/5 ml-auto text-right'>
					<h2 className='text-white text-left'>
						Nuevas experiencias
					</h2>
					<p className='infoP text-white mt-4 text-left'>
						Diferentes actividades en un lugar diferente, donde la
						convivencia va más allá de disfrutar un platillo
						especial.
					</p>
					<p className='infoP text-white mt-4 text-left'>
						Escucha música en vivo desde nuestra terraza, descubre
						emprendimientos y más, todo en un solo lugar.
					</p>
					<button className='goldenButton labelForm mt-4 mr-16'>
						Nuestros servicios
					</button>
				</section>
			</section>
		</>
	);
}
