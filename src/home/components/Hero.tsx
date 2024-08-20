import React from 'react';
import WhiteLogo from '../../assets/WhiteLogo.png';

export default function Hero() {
	return (
		<>
			<section
				id='fullBackground'
				className='relative w-screen h-screen z-10'
			>
				<section
					id='bannerInfo'
					className='lg:flex items-center lg:justify-center xl:px-28 lg:p-0 md:block'
				>
					<img
						alt='AFP logo'
						src={WhiteLogo}
						className='p-8 w-auto lg:w-1/2 lg:block md:block sm:hidden'
					/>
					<section className='-mt-[2rem] 2xl:mt-0 lg:w-1/2 text-white xl:px-10 xl:ml-12 xl:mr-24 md:px-6 md:ml-6 md:mr-6 md:w-screen'>
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
