import { useEffect } from 'react';

import gyoza from '../../assets/gyoza 1.png';

export default function Schedule() {
	return (
		<>
			<section className='relative pb-40 xl:px-12 schedule xl:pr-28 xl:pl-28 md:p-5 md:mx-5'>
				<div className='lg:p-10 border-redDefault lg:w-2/5 border-2 schedul'>
					<h2>Horario</h2>
					<p className='infoP'>Lunes a Viernes - 12:00pm a 10:00pm</p>
					<p className='infoP'>
						Sabados y Domingos - 12:00pm a 12:00am
					</p>

					<div className='scroll-smooth'>
						<img
							className='absolute right-0 bottom-0 lg:w-3/5 Z-40'
							src={gyoza}
							alt='Gyoza'
							id='gyoza'
						/>
					</div>
				</div>
			</section>
		</>
	);
}
