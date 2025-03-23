<script>
	import background from '$lib/background.jpg';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Camgo homepage" />
</svelte:head>

<main
	class="bg-cover flex items-center justify-center text-center"
	style="background-image: url({background});"
>
	<div class="hero min-h-screen bg-base-100 opacity-90">
		<div class="hero-content text-center">
			<div class="max-w-l">
				<h1 class="text-5xl font-bold mb-16">Welcome to Camgo!</h1>
				<p class="mb-8">Find hidden animals in our exciting biology puzzle game.</p>

				<div class="card bg-base-300 shadow-xl max-w-s mx-auto mb-8">
					<div class="card-body items-center text-center">
						<h2 class="card-title">Game Features</h2>
						<ul class="list-inside list-disc mt-2">
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
