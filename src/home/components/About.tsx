import React from 'react';
import aboutGrande1 from '../../assets/aboutGrande1.png';
import aboutMediano1 from '../../assets/aboutMediano1.png';
import aboutSmall1 from '../../assets/aboutSmall1.png';
import aboutXsmall1 from '../../assets/aboutXsmall1.png';
import aboutGrande2 from '../../assets/aboutGrande2.png';
import aboutMediano2 from '../../assets/aboutMediano2.png';
import aboutSmall2 from '../../assets/aboutSmall2.png';
import aboutXsmall2 from '../../assets/aboutXsmall2.png';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<>
			<section className='lg:flex center lg:ustify-evenly items-center lg:h-fit lg:pr-28 lg:pl-28 lg:pt-96 about1'>
				<section className='lg:w-2/5 lg:pt-72 lg:pr-20'>
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
						<Link to={'/restaurants/#heading'}>
							Conoce nuestros restaurantes
						</Link>
					</button>
				</section>

				<section className='lg:w-1/2 relative lg:pt-72'>
					<div id='firstAbout' className='relative'>
						<img
							className='lg:absolute z-0 w-3/4 right-10 -bottom-56'
							src={aboutGrande1}
						/>
						<img
							id='med1'
							className='absolute z-10 right-0 w-56'
							src={aboutMediano1}
						/>
						<img
							id='small1'
							className='absolute z-20 w-44 top-28 right-36'
							src={aboutSmall1}
						/>
						<img
							id='xsmall1'
							className='absolute z-30  w-36 top-36 lg:right-72'
							src={aboutXsmall1}
						/>
					</div>
				</section>
			</section>

			<section className='lg:flex justify-end items-center lg:h-screen lg:pr-28 lg:pl-28 lg:pt-72 pb-20 about2'>
				<section className='lg:w-1/2 relative'>
					<div id='secondAbout' className='relative'>
						<img
							className='lg:absolute z-0 w-3/4 left-10 -bottom-56'
							src={aboutGrande2}
						/>
						<img
							id='med2'
							className='absolute z-10 lg:left-0 w-56'
							src={aboutMediano2}
						/>
						<img
							id='small2'
							className='absolute z-20 w-44 lg:top-28 lg:left-36'
							src={aboutSmall2}
						/>
						<img
							id='xsmall2'
							className='absolute z-30 w-36 lg:top-36 lg:left-72'
							src={aboutXsmall2}
						/>
					</div>
				</section>

				<section className='lg:w-2/5 ml-auto lg:text-right'>
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
					<button className='goldenButton labelForm mt-4 lg:mr-16'>
						Nuestros servicios
					</button>
				</section>
			</section>
		</>
	);
}
