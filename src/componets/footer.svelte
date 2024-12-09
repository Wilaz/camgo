<script>
	import { PencilSquare, CodeBracketSquare } from 'svelte-heros-v2';
</script>

<footer class="footer bg-neutral text-neutral-content items-center p-4">
	<aside class="grid-flow-col items-center">
		<PencilSquare />
		<p>Copyright {new Date().getFullYear()} Wilaz - Licensed under AGPL-3.0 or later.</p>
	</aside>
	<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a href="https://github.com/Wilaz/camgo" aria-label="Camgo github repo">
			<CodeBracketSquare />
		</a>
	</nav>
</footer>
