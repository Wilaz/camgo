<script lang="ts">
	import { onMount } from 'svelte';
	import under_construction_1 from '$lib/under-construction-1.gif';
	import under_construction_2 from '$lib/under-construction-2.gif';
	import under_construction_3 from '$lib/under-construction-3.gif';

	let container: HTMLDivElement;

	const children = [
		{ image: under_construction_1, width: 200, height: 70 },
		{ image: under_construction_2, width: 220, height: 251 },
		{ image: under_construction_3, width: 74, height: 66 }
	];

	function randomizePositions() {
		let containerWidth: number = window.innerWidth;
		let containerHeight: number = window.innerHeight;

		children.forEach((child) => {
			const x = Math.random() * (containerWidth - 2 * child.width) + child.width;
			const y = Math.random() * (containerHeight - 2 * child.height) + child.height;
			const image = document.createElement('img');
			image.style.position = 'absolute';
			image.style.left = `${x}px`;
			image.style.top = `${y}px`;
			image.src = child.image;
			container.appendChild(image);
		});
	}

	onMount(randomizePositions);
</script>

<svelte:head>
	<title>Start game</title>
	<meta name="description" content="Start a new game" />
</svelte:head>

<div bind:this={container}></div>
