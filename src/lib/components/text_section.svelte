<script lang="ts">
	export let title: String;

	import FadeIn from './fade_in.svelte';
</script>

<FadeIn>
	<div class="fade-in md:flex md:flex-row">
		<div class="h-min max-w-md  space-y-2  md:ml-auto md:flex md:basis-1/3 md:space-y-0">
			<div class="my-auto w-20 border-t border-white md:inline-block" />
			<div class="my-auto mr-4 flex-1  font-bold md:text-center">{title}</div>
		</div>

		<div class=" basis-2/3">
			<slot />
		</div>
	</div>
</FadeIn>
