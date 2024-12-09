<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="navbar bg-neutral">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="{base}/">Camgo</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="{base}/join">Join Game</a></li>
			<li><a href="{base}/new">New Game</a></li>
			<li><a href="{base}/faq">How to Play</a></li>
			<li><a href="{base}/about">About</a></li>
		</ul>
	</div>
</div>
