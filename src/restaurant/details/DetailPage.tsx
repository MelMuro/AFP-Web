import Phone from '../../assets/Phone.svg';
import Mail from '../../assets/Mail.svg';
import Face from '../../assets/Face.svg';
import Insta from '../../assets/Insta.svg';
import Fondo from '../../assets/Imagen de Fondo.png';

const DetailPage = () => {
	return (
		<>
			<section className='relative'>
				<img
					className='absolute h-full w-full object-cover -z-10'
					src={Fondo}
					alt=''
				/>
				<div className='container my-2 py-5 mx-auto flex flex-row items-center text-white z-10'>
					<div className='basis-1/2 py-2 border-r-2 border-[#DD9E55]'>
						<h2 className='font-jura font-bold'>City Wok</h2>
						<span className='text-[#DD9E55]'>Comida China</span>
						<p className='font-montserrat w-3/5'>
							Ingredientes frescos y recetas tradicionales,
							ofrecemos variedad de platillos de todo tipo. Te
							invitamos a pruebas nuestras especialidades
						</p>
						<ul className='mt-5'>
							<li className='flex items-center'>
								<img src={Phone} alt='Phone' />
								<a href='tel:6628903344'>662 890 3344</a>
							</li>
							<li className='flex items-center'>
								<img src={Mail} alt='Email' />
								<a href='mailto:hola@hotmail.com'>
									City@wok.mx
								</a>
							</li>
						</ul>
						<div className='flex mt-10'>
							<img className='mr-3' src={Face} alt='Facebook' />
							<img className='ml-3' src={Insta} alt='Instagram' />
						</div>
					</div>
					<div className='basis-1/2 ml-5'>
						<h2 className='text-[#DD9E55] font-montserrat'>
							Horarios
						</h2>
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailPage;
