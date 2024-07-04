import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WhiteLogo from '../assets/WhiteLogo.png';
import BlackLogo from '../assets/logoAsiaYaBlack.png';

const NavMenu = () => {
	const location = useLocation();
	const [isNotFoundPage, setIsNotFoundPage] = useState(false);

	const validPaths = ['/', '/home'];

	useEffect(() => {
		setIsNotFoundPage(!validPaths.includes(location.pathname));
	}, [location]);

	return (
		<header
			className={
				(isNotFoundPage ? 'text-default' : 'text-white') +
				' absolute md:w-screen md:flex md:justify-between sm:text-center px-2 py-2 sm:px-2 sm:py-2 sm:block md:px-14 md:py-10 z-20'
			}
		>
			<img
				alt='AFP logo'
				src={isNotFoundPage ? BlackLogo : WhiteLogo}
				className='md:w-28 sm:w-2'
			/>
			<nav className='infoP flex md:gap-12 sm:justify-center sm:flex sm:flex-col sm:items-center md:flex-row md:items-center'>
				<a href='#' className='sm:mb-4 md:mb-0'>
					Restaurants
				</a>
				<a href='#' className='sm:mb-4 md:mb-0'>
					Park map
				</a>
				<a href='#'>Contacto</a>
			</nav>
		</header>
	);
};

export default NavMenu;
