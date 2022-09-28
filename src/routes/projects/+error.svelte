<h1 class="font-serif text-6xl">Oopsie! Something went wrong...</h1>

<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
