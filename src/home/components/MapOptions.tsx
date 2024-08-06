import React from 'react';
import ParkMap from '../../common/ParkMap';

export default function MapOptions() {
	return (
		<>
			<section className='lg:px-20 lg:py-44'>
				<h2 className='block text-center'>
					Un lugar para ti, para todos
				</h2>

				<section className='lg:flex center justify-evenly items-center my-10 md:block'>
					<ParkMap />

					<ul
						id='listRestaurants'
						className='relative lg:w-1/4 h-fit mx-12 p-8 text-center bg-redDefault text-white z-10 '
					>
						<li className='infoP restaurant'>Restaurant 1</li>
						<li className='infoP restaurant'>Restaurant 2</li>
						<li className='infoP restaurant'>Restaurant 3</li>
						<li className='infoP restaurant'>Restaurant 4</li>
						<li className='infoP restaurant'>Restaurant 5</li>
						<li className='infoP restaurant'>Restaurant 6</li>
						<li className='infoP restaurant'>Restaurant 7</li>
					</ul>
				</section>
			</section>
		</>
	);
}
