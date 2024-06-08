import Phone from '../../assets/Phone.svg';
import Mail from '../../assets/Mail.svg';
import Face from '../../assets/Face.svg';
import Insta from '../../assets/Insta.svg';
import Fondo from '../../assets/Imagen de Fondo.png';
import MenuItem from './MenuItem';
import Shcedule from './Schedule';

const DetailPage = () => {
	return (
		<>
			<section className='relative'>
				<img
					className='absolute h-full w-full object-cover -z-10'
					src={Fondo}
					alt='Fondo'
				/>
				<div className='container my-2 py-5 mx-auto flex flex-row items-center text-white z-10 px-32 '>
					<div className='w-1/2 py-2 border-r-2 border-golden'>
						<h1>City Wok</h1>
						<span className='text-golden scheduleCat'>
							Comida China
						</span>
						<p className='infoP w-3/5'>
							Ingredientes frescos y recetas tradicionales,
							ofrecemos variedad de platillos de todo tipo. Te
							invitamos a pruebas nuestras especialidades
						</p>
						<ul className='infoP mt-5'>
							<li className='flex items-center'>
								<img
									className='mr-2 w-10'
									src={Phone}
									alt='Phone'
								/>
								<a href='tel:6628903344'>662 890 3344</a>
							</li>
							<li className='flex items-center'>
								<img
									className='mr-2 w-8'
									src={Mail}
									alt='Email'
								/>
								<a href='mailto:hola@hotmail.com'>
									City@wok.mx
								</a>
							</li>
						</ul>
						<div className='flex mt-10'>
							<img
								className='mr-3 w-8'
								src={Face}
								alt='Facebook'
							/>
							<img
								className='ml-3 w-8'
								src={Insta}
								alt='Instagram'
							/>
						</div>
					</div>
					<div className='w-1/2 pl-24'>
						<Shcedule />
					</div>
				</div>
			</section>

			<section className='my-10'>
				<h1 className='text-center my-10'>Platillo fuerte</h1>
				<div className='grid grid-cols-4 gap-10 mx-32'>
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
				</div>
			</section>
		</>
	);
};

export default DetailPage;
