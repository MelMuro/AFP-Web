import React from 'react';
import Torii from '../assets/Torii.jpg';

export default function NotFound() {
	return (
		<section className='bg-gray-100 flex items-center justify-center h-screen'>
			<div className='text-center'>
				<div className='flex justify-center items-center'>
					<img className='w-1/3' src={Torii} />
				</div>

				<h1 className='text-6xl font-bold text-gray-800 mb-4 mt-6'>
					404
				</h1>
				<p className='text-xl text-gray-600 mb-8'>
					¡Oops! Parece que te has cruzado la puerta Torii equivocada.
				</p>
				<div className='space-x-4'>
					<a
						href='#'
						className='text-redDefault border border-y-redDefault px-4 py-2  hover:bg-blue-600'
					>
						Volver a inicio
					</a>
					<a
						href='#'
						className='text-redDefault border border-y-redDefault px-4 py-2  hover:bg-green-600'
					>
						Restaurantes
					</a>
				</div>
			</div>
		</section>
	);
}
