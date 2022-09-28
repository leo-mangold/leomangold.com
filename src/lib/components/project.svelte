<script lang="ts">
	import FadeIn from './fade_in.svelte';

	export let number: String;
	export let title: String;
	export let description: String;
</script>

<FadeIn>
	<div class="flex flex-row py-4 px-4 background-animation">
		<div class="basis-1/4 sm:basis-1/3 sm:ml-auto  max-w-md">
			{number}
		</div>
		<div class="basis-3/4 sm:basis-2/3">
			<div class="headline">{title}</div>
			<div class="pt-1">{description}</div>
		</div>
	</div>
</FadeIn>
