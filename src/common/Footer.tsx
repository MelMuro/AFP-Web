const Footer = () => {
	return (
		<div>
			<div>MAP</div>
			<div>
				<form>
					<label htmlFor='contact'>¿Negocio o dudas?</label>
					<select name='contact' id='contact'>
						<option value='' selected>
							Asunto
						</option>
						<option value='business'>Negocio</option>
						<option value='hi'>Saludar</option>
					</select>
					<br />
					<label htmlFor='name'>Ingresa tu nombre</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Ingresa el nombre de tu negocio'
					/>
					<br />
					<label htmlFor='client'>Número de teléfono o correo</label>
					<input
						type='text'
						name='client'
						id='client'
						placeholder='Contacto'
					/>
					<br />
					<textarea
						name='message'
						id='message'
						placeholder='Hablamos de ti...'
					></textarea>
					<br />
					<button type='submit'>Enviar mensaje</button>
				</form>
			</div>
			<div>
				<p>
					¿Buscas llevar tu emprendimiento hacia un espacio único?
					Comunicate con nosotros por medio de nuestras redes
					sociales, teléfono o enviandonos un correo. Estamos abiertos
					a resolver dudas y brindar el mejor de los servicios.
				</p>
				<div>
					<img src='' alt='' />
				</div>
			</div>
			<div>
				<p>Conoce más</p>
				<div>
					<img src='' alt='' />
					<img src='' alt='' />
				</div>
				<p>
					Av Cultura 55 Ote, Proyecto Rio Sonora Hermosillo XXI, 83280
					Hermosillo, Son.
				</p>
			</div>
			<div>
				<ul>
					<li>Asia-Ya Food Park</li>
					<li>Acerca de nosotros</li>
					<li>Actividades y negocios</li>
					<li>Park Map</li>
					<li>Park Map</li>
				</ul>
			</div>

			<div>
				<ul>
					<li>Legal</li>
					<li>Terminos y condiciones</li>
					<li>Politica de privacidad</li>
				</ul>
			</div>
			<span>2024 Asia-Ya. All Rights Reserved</span>
		</div>
	);
};

export default Footer;
