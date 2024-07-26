const FormContact = () => {
	return (
		<form className='mr-12 '>
			<label htmlFor='contact' className='my-4 labelForm text-golden'>
				¿Negocio o dudas?
			</label>
			<br />
			<select
				name='contact'
				id='contact'
				className='placeholderForm p-2 my-2 border-2 border-solid border-golden text-gray w-full'
			>
				<option value='' defaultValue={''} className='text-gray'>
					Asunto
				</option>
				<option value='business' className='text-gray'>
					Negocio
				</option>
				<option value='hi' className='text-gray'>
					Saludar
				</option>
			</select>
			<br />
			<label htmlFor='name' className='labelForm text-golden'>
				Ingresa tu nombre
			</label>
			<br />
			<input
				type='text'
				name='name'
				id='name'
				placeholder='Ingresa el nombre de tu negocio'
				className='placeholderForm p-2 my-2 border-2 border-solid border-golden text-gray w-full'
			/>
			<br />
			<label htmlFor='client' className='labelForm text-golden'>
				Número de teléfono o correo
			</label>
			<input
				type='text'
				name='client'
				id='client'
				placeholder='Contacto'
				className='placeholderForm p-2 my-2 border-2 border-solid border-golden text-gray w-full'
			/>
			<br />
			<label htmlFor='message' className='labelForm text-golden'>
				Mensaje
			</label>
			<textarea
				name='message'
				id='message'
				rows={4}
				placeholder='Hablanos de ti...'
				className='placeholderForm my-2 p-2 border-2 border-solid border-golden text-gray w-full'
			></textarea>
			<br />
			<button
				type='submit'
				className='mt-5 labelForm bg-golden w-full h-10'
			>
				Enviar mensaje
			</button>
		</form>
	);
};

export default FormContact;
