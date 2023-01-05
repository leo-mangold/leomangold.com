<script>
	import { EMAIL, PHONE } from '$lib/data';
	import FadeIn from './fade_in.svelte';
</script>

<FadeIn>
	<div class="navbar items-stretch space-y-2 p-8 sm:flex">
		<a href="/" class=" flex-1">
			<h2 class="font-serif text-4xl font-bold">Leo Mangold</h2>
		</a>
		<div class="nav-links my-auto flex-initial space-x-4">
			<a href="sms:{PHONE}" class="underline-animation"> Text </a>
			<a href="mailto:{EMAIL}" class="underline-animation">Email</a>
			<!-- <a href="/contact" class="underline-animation">Contact</a> -->
		</div>
	</div>
</FadeIn>
