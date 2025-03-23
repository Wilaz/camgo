<script lang="ts">
	import Confetti from '@componets/confetti.svelte';
	import { onMount } from 'svelte';
	import { playerInput, getState } from '$lib/serve';
	import { images } from '$lib/images';
	import type { Coordinant, GameState } from '$lib/types';

	let currentState: GameState | undefined = $state();
	let showConfetti: boolean = $state(false);

	function startConfetti() {
		showConfetti = true;
		setTimeout(() => {
			showConfetti = false;
		}, 10000);
	}

	async function handleClick(event: {
		currentTarget: {
			getBoundingClientRect: () => { left: number; top: number; width: number; height: number };
		};
		clientX: number;
		clientY: number;
	}) {
		const rect = event.currentTarget.getBoundingClientRect();

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const scaledX = Math.round((x / rect.width) * 1600);
		const scaledY = Math.round((y / rect.height) * 900);

		const pixel: Coordinant = {
			x: scaledX,
			y: scaledY
		};

		const correct: boolean = await playerInput(pixel);

		if (correct) {
			startConfetti();
		}
	}

	async function update() {
		const data = await getState();
		currentState = data;

		setTimeout(() => {
			update();
		}, 100);
	}

	onMount(update);
</script>

<main>
	{#if showConfetti}
		<Confetti />
	{/if}

	{#if currentState != undefined}
		<div class="swap swap-flip m-12 {currentState.flipped ? 'swap-active' : ''}">
			<div class="swap-off">
				<div class="card card-normal bg-base-200 shadow-xl w-auto">
					<div class="card-body">
						<h2 class="card-title">{currentState.title}</h2>
					</div>
					<figure class="m-6">
						<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<img
							src={images[currentState.image]}
							alt={currentState.image}
							onclick={handleClick}
							class="rounded-xl"
						/>
					</figure>
				</div>
			</div>

			<div class="swap-on">
				<div class="card card-side bg-base-200 shadow-xl w-auto">
					<figure>
						<img src={images[currentState.image]} alt={currentState.image} />
					</figure>
					<div class="card-body">
						<h2 class="card-title">{currentState.title}</h2>
						<p>{currentState.description}</p>
						<a class="link link-primary" href="https://{currentState.link}">See more</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>
