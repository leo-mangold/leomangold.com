<script>
	import { page } from '$app/stores';
</script>

<div class="grid place-items-center p-16">
	<h1 class="pb-8 font-serif text-6xl">Oopsie! Something went wrong...</h1>

	<h1 class="text-xl">{$page.status}: {$page?.error?.message}</h1>

	<!-- Back to Home -->
	<a href="/" class="mt-8 text-xl underline">Back to Home</a>
</div>
