<script>
	import FadeIn from './fade_in.svelte';
</script>

<FadeIn>
	<div class="navbar p-8 sm:flex items-stretch space-y-2">
		<a href="/" class=" flex-1">
			<h2 class="font-serif font-bold text-4xl">Leo Mangold</h2>
		</a>
		<div class="nav-links my-auto flex-initial space-x-4">
			<a href="sms:{import.meta.env.VITE_PHONE}" class="underline-animation"> Text </a>
			<a href="mailto:{import.meta.env.VITE_EMAIL}" class="underline-animation">Email</a>
			<!-- <a href="/contact" class="underline-animation">Contact</a> -->
		</div>
	</div>
</FadeIn>
