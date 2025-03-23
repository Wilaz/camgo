<script>
	import background from '$lib/background.jpg';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Camgo homepage" />
</svelte:head>

<main
	class="flex items-center justify-center bg-cover text-center"
	style="background-image: url({background});"
>
	<div class="hero bg-base-100 min-h-screen opacity-90">
		<div class="hero-content text-center">
			<div class="max-w-l">
				<h1 class="mb-16 text-5xl font-bold">Welcome to Camgo!</h1>
				<p class="mb-8">Find hidden animals in our exciting biology puzzle game.</p>

				<div class="card bg-base-300 max-w-s mx-auto mb-8 shadow-xl">
					<div class="card-body items-center text-center">
						<h2 class="card-title">Game Features</h2>
						<ul class="mt-2 list-inside list-disc">
							<li>Explore beautiful environments</li>
							<li>Discover 8 different animal species</li>
							<li>Challenge yourself with increasingly difficulty puzzles</li>
						</ul>
					</div>
				</div>

				<a class="btn btn-primary btn-lg" href="{base}/join">Start Your Camouflage Adventure</a>
			</div>
		</div>
	</div>
</main>
