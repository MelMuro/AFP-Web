import Phone from '../../assets/Phone.svg';
import Mail from '../../assets/Mail.svg';
import Face from '../../assets/Face.svg';
import Insta from '../../assets/Insta.svg';
import Fondo from '../../assets/Imagen de Fondo.png';
import React from 'react';

const DetailPage = () => {
	return (
		// Esto nos servira para despues, segun yo será para hacer los background dinamicos
		<div
			style={{ '--image-url': `url(${Fondo})` } as React.CSSProperties}
			className='bg-[image:var(--image-url)]'
		>
			<div className='container my-2 py-5 mx-auto flex flex-row items-center text-white'>
				<div className='basis-1/2 py-2 border-r-2 border-[#DD9E55]'>
					<h2 className='font-jura font-bold'>City Wok</h2>
					<h6 className='text-[#DD9E55]'>Comida China</h6>

					<p className='font-montserrat w-3/5'>
						Ingredientes frescos y recetas tradicionales, ofrecemos
						variedad de platillos de todo tipo. Te invitamos a
						pruebas nuestras especialidades
					</p>

					<div className='mt-5'>
						<div className='flex items-center'>
							<img src={Phone} alt='' />
							<span>662 890 3344</span>
						</div>
						<div className='flex items-center'>
							<img src={Mail} alt='' />
							<a href=''>City@wok.mx</a>
						</div>
					</div>
					<div className='flex mt-10'>
						<img className='mr-3' src={Face} alt='' />
						<img className='ml-3' src={Insta} alt='' />
					</div>
				</div>
				<div className='basis-1/2 ml-5'>
					{/* Aqui va el componente de Horarios */}
					<h2 className='text-[#DD9E55] font-montserrat'>Horarios</h2>
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
