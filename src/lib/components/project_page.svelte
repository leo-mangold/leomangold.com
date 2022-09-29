<script lang="ts">
	import FadeIn from './fade_in.svelte';

	export let title: String;
	export let subTitle: String = '';
</script>

<FadeIn>
	<h1 class="headline">{title}</h1>
	<h2 class="text-2xl mb-8">{subTitle}</h2>
</FadeIn>
<div class="max-w-screen-md mb-16">
	<slot />
</div>
