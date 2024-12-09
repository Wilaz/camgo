<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
</script>

<main>
	<div
		style="position: absolute; left: 50%; top: 25%"
		use:confetti={{
			particleCount: undefined,
			force: 1,
			duration: 5000,
			stageWidth: window.innerWidth - 100,
			stageHeight: window.innerHeight,
			colors: ['#ff3e00', '#40b3ff', '#676778']
		}}
	></div>
</main>
