import images from '$lib/game/game.json';

import type { BoundingBox, Coordinant, GameState } from '$lib/types';

let cardID = 0;
let cardFlipped = false;
let enabled = true;

function ArrayToBoundingBox(array: number[]): BoundingBox {
	if (array.length < 4) {
		throw new Error('Array must contain at least 4 numbers');
	}
	return { x1: array[0], y1: array[1], x2: array[2], y2: array[3] };
}

function InsideBoundingBox(point: Coordinant, box: BoundingBox): boolean {
	return point.x >= box.x1 && point.x <= box.x2 && point.y >= box.y1 && point.y <= box.y2;
}

function Next() {
	cardFlipped = true;
	enabled = false;
	setTimeout(() => {
		cardFlipped = false;
		cardID = Math.min(cardID + 1, 9);
		enabled = true;
	}, 10000);
}

export async function getState() {
	const current_state = images.images[cardID];
	const data: GameState = {
		title: current_state.title,
		image: current_state.image,
		description: current_state.description,
		link: current_state.link,
		coords: ArrayToBoundingBox(current_state.coords),
		flipped: cardFlipped
	};

	return data;
}

export async function playerInput(point: Coordinant) {
	const box = ArrayToBoundingBox(images.images[cardID].coords);

	if (InsideBoundingBox(point, box) && enabled) {
		Next();
		return true;
	} else {
		return false;
	}
}
