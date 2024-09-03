export type Restaurant = {
	name: string;
	description: string;
	category: string;
	location: number;
	schedule: {
		monday: string;
		tuesday: string;
		wednesday: string;
		thursday: string;
		friday: string;
		saturday: string;
		sunday: string;
	};
	phone: number;
	email: string;
	media: string[];
	pictures: string[];
	_id: string;
};

export type Dish = {
	category: string;
	name: string;
	description: string;
	price: number;
	picture: string;
	isAvailable: boolean;
	tag?: string;
};

export type Menu = {
	dishes: Dish[]; // Aquí cambiamos a un array de objetos de tipo Dish
	restaurant: string;
	_id: string;
};
