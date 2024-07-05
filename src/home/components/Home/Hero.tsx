import React from 'react';
import WhiteLogo from '../../../assets/WhiteLogo.png';

export default function Hero() {
	return (
		<>
			<section
				id='fullBackground'
				className='relative w-screen h-screen z-10'
			>
				<section
					id='bannerInfo'
					className='flex items-center justify-center px-28 '
				>
					<img
						alt='AFP logo'
						src={WhiteLogo}
						className='p-8 w-auto'
					/>
					<section className='w-1/2 text-white px-10 ml-12 mr-24'>
						<h1>Asian Food Park</h1>
						<p className='mt-4 infoP '>
							Sumérgete en un mundo de sabores auténticos y
							emocionantes fusiones que harán vibrar tu paladar.
							<br />
							<br />
							Desde los aromas tentadores hasta los platos
							exquisitos, cada visita es una oportunidad para
							explorar y descubrir nuevos placeres culinarios.
						</p>
					</section>
				</section>
			</section>
		</>
	);
}
