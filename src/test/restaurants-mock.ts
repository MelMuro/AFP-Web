import Restaurant from '../models/resturant';

export const RestaurantsMock: Restaurant[] = [
	{
		name: 'Restaurant 1',
		description: 'Some test description',
		category: 'Asian fusion',
		location: 1,
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
		name: 'Restaurant 2',
		description: 'Description from restaurant 2',
		category: 'Asian fusion',
		location: 2,
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
