import { ObjectId } from 'mongodb';
import { Restaurant } from '../models/resturant';

export const RestaurantsMock: Restaurant[] = [
	{
		_id: new ObjectId('67003143978b1d8448f64448'),
		name: 'Restaurant 1',
		description: 'Some test description',
		category: 'Asian fusion',
		location: 1,
		menu: [
			{
				category: 'plato fuerte',
				name: 'chilaquiles',
				description: 'totopos de maiz con salsa y queso',
				price: 120,
				picture:
					'https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg',
				isAvailable: true,
				tag: 'enchiloso',
				_id: new ObjectId("507f191e810c19729de860ea")
			},
			{
				category: 'postre',
				name: 'carlota',
				description: 'galletas maria con yogur griego y limon',
				price: 80,
				picture:
					'https://www.gastrolabweb.com/postres/2023/2/14/carlota-de-limon-un-bocado-de-alegria-al-corazon-que-preparas-con-esta-receta-33298.html#&gid=1&pid=1',
				isAvailable: true,
				tag: '',
				_id: new ObjectId('517f191e810c19729de860ea')
			}
		],
		schedule: [
			{
				name: 'Lunes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Martes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Viernes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Sabado',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Domingo',
				start: '8:00',
				end: '17:00'
			}
		],
		phone: 6621234567,
		email: 'restaurant1@gmail.com',
		media: {
			facebook: 'facebookLink.com',
			instagram: 'instagramLink.com'
		},
		pictures: [
			'https://media-cdn.tripadvisor.com/media/photo-m/1280/26/d1/52/6a/inspirado-en-nuevo-orleans.jpg',
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/0b/63/0b/tap-room.jpg?w=1200&h=-1&s=1'
		],
		logo: 'https://img.freepik.com/premium-vector/japan-religion-mount-logo-design-concept_96807-980.jpg'
	},
	{
		_id: new ObjectId('67003143978b1d8448f64444'),
		name: 'Restaurant 2',
		description: 'Description from restaurant 2',
		category: 'Asian fusion',
		location: 2,
		menu:
			[
				{
					category: 'plato fuerte',
					name: 'Espaguetti',
					description: 'Prepara un delicioso ESPAGUETI ROJO con la cremosidad y practicidad de Media Crema y comparte en tus comidas con familia ¡Les encantará!.',
					price: 330,
					picture:
						'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
					isAvailable: true,
					tag: 'enchiloso',
					_id: new ObjectId('527f191e810c19729de860ea')
				},
				{
					category: 'entrada',
					name: 'frutas',
					description: 'berrys almendras, sandia, piña con yogurt',
					price: 120,
					picture:
						'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
					isAvailable: true,
					tag: 'saludable',
					_id: new ObjectId('537f191e810c19729de860ea')
				},
				{
					category: 'Bebida',
					name: 'Sake',
					description: 'Sake is an alcoholic beverage made from rice through fermentation and filtration. For fermentation of sake, rice koji, a kind of fungi grown on rice, is used. Sake has been made for over 1,000 years all over the Japanese islands.',
					price: 80,
					picture:
						'https://images.pexels.com/photos/18198515/pexels-photo-18198515/free-photo-of-taza-copa-mesa-naturaleza-muerta.jpeg?auto=compress&cs=tinysrgb&w=600',
					isAvailable: false,
					tag: 'alcohol',
					_id: new ObjectId('547f191e810c19729de860ea')
				}
			],

		schedule: [
			{
				name: 'Lunes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Martes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Viernes',
				start: '8:00',
				end: '16:15'
			},
			{
				name: 'Sabado',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Domingo',
				start: '8:00',
				end: '17:00'
			}
		],
		phone: 6626598648,
		email: 'restaurant_2@hotmail.com',
		media: {
			facebook: 'facebookLink.com',
			instagram: 'instagramLink.com'
		},
		pictures: [
			'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600'
		],
		logo: 'https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=600'
	}
];
