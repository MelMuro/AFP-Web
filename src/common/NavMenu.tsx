import WhiteLogo from '../assets/WhiteLogo.png';

const NavMenu = () => {
	return (
		<>
			<header className='absolute md:w-screen text-white md:flex md:justify-between sm:text-center px-2 py-2 sm:px-2 sm:py-2 sm:block md:px-14 md:py-10 z-20'>
				<img
					alt='AFP logo'
					src={WhiteLogo}
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
		</>
	);
};

export default NavMenu;
