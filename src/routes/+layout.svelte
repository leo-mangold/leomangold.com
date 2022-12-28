<script>
	import Cursor from '$lib/components/Cursor.svelte';
	import '../app.css';
	export const prerender = true;
</script>

<Cursor />

<!-- Main Content -->
<div class="min-h-screen scroll-smooth">
	<slot />
</div>
