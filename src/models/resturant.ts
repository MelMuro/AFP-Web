type Day = {
	name: string;
	start: string;
	end: string;
};

export type Restaurant = {
	name: string;
	description: string;
	category: string;
	location: number;
	schedule: Day[];
	phone: number;
	email: string;
	media: {
		facebook?: string;
		instagram?: string;
		twitter?: string;
		webSite?: string;
	};
	pictures: string[];
	logo: string;
	_id?: string;

	menu: Dish[];
};

export type Dish = {
	category: string;
	name: string;
	description: string;
	price: number;
	picture: string;
	isAvailable: boolean;
	tag: string;
	_id?: string;
};

export type Menu = {
	dishes: Dish[];
	restaurant: string;
	_id: string;
};
