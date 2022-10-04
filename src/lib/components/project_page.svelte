<script lang="ts">
	import FadeIn from './fade_in.svelte';

	export let title: String;
	export let subTitle: String = '';
</script>

<FadeIn>
	<h1 class="headline">{title}</h1>
	<h2 class="mb-8 text-2xl">{subTitle}</h2>
</FadeIn>
<div class="mb-16 max-w-screen-md">
	<slot />
</div>
