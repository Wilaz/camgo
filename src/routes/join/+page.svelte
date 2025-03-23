<script lang="ts">
	import { Hashtag } from 'svelte-heros-v2';
	import { base } from '$app/paths';

	let id = $state('');
	let valid = $state('');
	let regex = /^\d{3}[-]\d{4}$/;

	function handleSubmit() {
		if (regex.test(id)) {
			window.location.replace(`${base}/game`); // / + id);
		}
	}

	function validate() {
		if (id == '') {
			valid = '';
		} else {
			if (regex.test(id)) {
				valid = 'input-success';
			} else {
				valid = 'input-error';
			}
		}
	}
</script>

<svelte:head>
	<title>Join game</title>
	<meta name="description" content="Join a game" />
</svelte:head>

<div class="toast toast-center toast-middle bg-base-200 gap-4 rounded-xl p-4">
	<h1 class="text-center text-4xl">Enter game ID</h1>

	<form onsubmit={handleSubmit} oninput={validate} class="flex gap-2">
		<label class="input input-bordered flex items-center gap-2 {valid}">
			<Hashtag />
			<input type="text" class="grow" placeholder="###-####" bind:value={id} />
		</label>

		<button type="submit" class="btn"> submit </button>
	</form>
</div>
