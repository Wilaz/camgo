export interface Coordinant {
	x: number;
	y: number;
}

export interface BoundingBox {
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

export interface GameState {
	title: string;
	image: string;
	description: string;
	link: string;
	coords: BoundingBox;
	flipped: boolean;
}
