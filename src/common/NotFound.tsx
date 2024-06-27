import React from 'react';
import Torii from '../assets/Torii.jpg';

export default function NotFound() {
	return (
		<section className='flex items-center justify-center h-screen font-jura'>
			<div className='text-center'>
				<div className='flex justify-center items-center'>
					<img className='w-1/3' src={Torii} />
				</div>

				<h1 className='text-6xl font-bold mb-4 mt-6'>404</h1>
				<p className='text-xl mb-8'>
					¡Oops! Parece que has cruzado la puerta Torii equivocada.
				</p>
				<div className='space-x-4'>
					<a
						href='#'
						className='text-redDefault border border-redDefault px-4 py-2 font-bold'
					>
						Volver a inicio
					</a>
					<a
						href='#'
						className='text-blackDefault border border-golden bg-golden px-4 py-2 font-bold'
					>
						Restaurantes
					</a>
				</div>
			</div>
		</section>
	);
}
