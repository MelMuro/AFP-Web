import fog from '../../assets/dobleFog.png';
import Face from '../../assets/Face.svg';
import Insta from '../../assets/Insta.svg';
import FormContact from './FormContact';
import AddressMap from './AddressMap';

const Footer = () => {
	return (
		<>
			<section className='relative'>
				<AddressMap />
			</section>
			<section className='bg-blackDefault px-20 py-20'>
				<div className=' container mx-auto'>
					<div className='flex flex-row'>
						<div className='w-1/2'>
							<FormContact />
						</div>
						<div className='w-1/2'>
							<h1 className='text-white'>Entremos en contacto</h1>
							<p className='infoP text-white'>
								¿Buscas llevar tu emprendimiento hacia un
								espacio único? Comunicate con nosotros por medio
								de nuestras redes sociales, teléfono o
								enviandonos un correo.
							</p>
							<p className='mt-5 infoP text-white'>
								Estamos abiertos a resolver dudas y brindar el
								mejor de los servicios.
							</p>

							<div className='basis-1/2'>
								<img
									src={fog}
									alt='Fog'
									className='object-cover w-full'
								/>
							</div>
						</div>
					</div>

					<div className='mt-10 mb-5 flex flex-row'>
						<div className='basis-1/2'>
							<p className='text-white font-semibold text-lg'>
								Conoce más
							</p>
							<div className='flex flex-row'>
								<div className='flex'>
									<img
										src={Face}
										alt='Facebook'
										className='mr-3'
									/>
									<img
										src={Insta}
										alt='Instagram'
										className='ml-3'
									/>
								</div>
							</div>
							<p className='text-white'>
								Av Cultura 55 Ote, Proyecto Rio Sonora <br />
								Hermosillo XXI, 83280 Hermosillo, Son.
							</p>
						</div>
						<div className='basis-1/4'>
							<ul className='text-white'>
								<li className='font-semibold'>
									Asia-Ya Food Park
								</li>
								<li>Acerca de nosotros</li>
								<li>Actividades y negocios</li>
								<li>Park Map</li>
								<li>Park Map</li>
							</ul>
						</div>

						<div className='basis-1/4'>
							<ul className='text-white'>
								<li className='font-semibold'>Legal</li>
								<li>Terminos y condiciones</li>
								<li>Politica de privacidad</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='w-full text-right pr-10 pb-4'>
					<span className='text-[#959595] font-md'>
						2024 Asia-Ya. All Rights Reserved
					</span>
				</div>
			</section>
		</>
	);
};

export default Footer;
