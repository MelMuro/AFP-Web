import { ObjectId } from 'mongodb';
type Day = {
	name: string;
	start: string;
	end: string;
};

export type Restaurant = {
	_id?: ObjectId;
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
	_id?: ObjectId;
};
