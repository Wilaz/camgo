<script>
	import { page } from '$app/state';
</script>

<h1>
	{page.status}: {#if page.error}
		{page.error.message}
	{:else}
		Unknown
	{/if}
</h1>
