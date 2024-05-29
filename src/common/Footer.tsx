import '../global-styles.css';
import fog from '../assets/dobleFog.png';
import Face from '../assets/Face.svg';
import Insta from '../assets/Insta.svg';

const Footer = () => {
	return (
		<>
			<div className='bg-[#16100C]'>
				<div className='container mx-auto'>
					<div className='flex flex-row'>
						<div className='basis-1/2'>
							<form className='mr-12'>
								<label
									htmlFor='contact'
									className='text-[#DD9E55] text-xl'
								>
									¿Negocio o dudas?
								</label>
								<br />
								<select
									name='contact'
									id='contact'
									className='border-2 border-solid border-[#DD9E55] text-[#6D6D6D] w-full h-10'
								>
									<option
										value=''
										selected
										className='text-[#6D6D6D]'
									>
										Asunto
									</option>
									<option
										value='business'
										className='text-[#6D6D6D]'
									>
										Negocio
									</option>
									<option
										value='hi'
										className='text-[#6D6D6D]'
									>
										Saludar
									</option>
								</select>
								<br />
								<label
									htmlFor='name'
									className='text-[#DD9E55]'
								>
									Ingresa tu nombre
								</label>
								<br />
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Ingresa el nombre de tu negocio'
									className='border-2 border-solid border-[#DD9E55] text-[#6D6D6D] w-full h-10'
								/>
								<br />
								<label
									htmlFor='client'
									className='text-[#DD9E55]'
								>
									Número de teléfono o correo
								</label>
								<input
									type='text'
									name='client'
									id='client'
									placeholder='Contacto'
									className='border-2 border-solid border-[#DD9E55] text-[#6D6D6D] w-full h-10'
								/>
								<br />
								<textarea
									name='message'
									id='message'
									placeholder='Hablamos de ti...'
									className='mt-5 border-2 border-solid border-[#DD9E55] text-[#6D6D6D] w-full'
								></textarea>
								<br />
								<button
									type='submit'
									className='mt-5 bg-[#DD9E55] w-full h-10'
								>
									Enviar mensaje
								</button>
							</form>
						</div>
						<div className='basis-auto'>
							<h3 className='font-jura font-bold text-white text-3xl text-center'>
								Entremos en contacto
							</h3>
							<p className='font-montserrat text-white text-md'>
								¿Buscas llevar tu emprendimiento hacia un
								espacio único? Comunicate con nosotros por medio
								de nuestras redes sociales, teléfono o
								enviandonos un correo.
							</p>
							<p className='mt-5 text-white text-md'>
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

					<div className='flex flex-row'>
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
				<div className='w-full text-right pr-10'>
					<span className='text-[#959595] font-md'>
						2024 Asia-Ya. All Rights Reserved
					</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
