import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WhiteLogo from '../assets/WhiteLogo.png';
import BlackLogo from '../assets/logoAsiaYaBlack.png';
import useHashScroll from './useHashScroll';
import { Link } from 'react-router-dom';

const NavMenu = () => {
	const location = useLocation();
	const [isNotFoundPage, setIsNotFoundPage] = useState(false);

	const validPaths = ['/', '/home', '/restaurants/', '/details/'];

	useEffect(() => {
		const path = location.pathname;
		const isValid =
			validPaths.includes(path) || path.startsWith('/details/');
		setIsNotFoundPage(!isValid);
	}, [location]);

	useHashScroll();

	return (
		<header
			id='heading'
			className={
				(isNotFoundPage ? 'text-default' : 'text-white') +
				' absolute md:w-screen md:flex md:justify-between sm:text-center px-2 py-2 sm:px-2 sm:py-2 sm:block md:px-14 md:py-10 z-20'
			}
		>
			<Link to={'/'}>
				<img
					alt='AFP logo'
					src={isNotFoundPage ? BlackLogo : WhiteLogo}
					className='md:w-28 sm:w-2'
				/>
			</Link>
			<nav className='infoP flex md:gap-12 sm:justify-center sm:flex sm:flex-col sm:items-center md:flex-row md:items-center'>
				<Link to={'/restaurants/'} className='sm:mb-4 md:mb-0'>
					Restaurants
				</Link>
				<Link to={'#parkMap'} className='sm:mb-4 md:mb-0'>
					Park map
				</Link>
				<Link to={'/#contact'}>Contacto</Link>
			</nav>
		</header>
	);
};

export default NavMenu;
