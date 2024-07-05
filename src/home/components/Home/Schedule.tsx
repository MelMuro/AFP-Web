import React from 'react';
import gyoza from '../../../assets/gyoza 1.png';

export default function Schedule() {
	return (
		<>
			<section className='relative pb-40 px-12 py-'>
				<div className='p-14 border-redDefault w-2/5 border-2'>
					<h2>Horario</h2>
					<p className='infoP'>Lunes a Viernes - 12:00pm a 10:00pm</p>
					<p className='infoP'>
						Sabados y Domingos - 12:00pm a 12:00am
					</p>

					<div>
						<img
							className='absolute right-0 bottom-0 w-3/5'
							src={gyoza}
							alt='Gyoza'
						/>
					</div>
				</div>
			</section>
		</>
	);
}
