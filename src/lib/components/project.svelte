<script lang="ts">
	import FadeIn from './fade_in.svelte';

	export let number: String;
	export let title: String;
	export let description: String;
</script>

<FadeIn>
	<div class="background-animation flex flex-row py-4 px-4">
		<div class="max-w-md basis-1/6 sm:ml-auto  sm:basis-1/3">
			{number}
		</div>
		<div class="basis-5/6 sm:basis-2/3">
			<div class="font-serif text-5xl font-bold sm:text-6xl">{title}</div>
			<div class="pt-1">{description}</div>
		</div>
	</div>
</FadeIn>
