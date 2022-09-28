<script lang="ts">
	export let title: String;

	import FadeIn from './fade_in.svelte';
</script>

<FadeIn>
	<div class="md:flex md:flex-row fade-in">
		<div class="space-y-2 md:ml-auto  md:basis-1/3  md:flex md:space-y-0 h-min max-w-md">
			<div class="border-t border-white my-auto w-20 md:inline-block" />
			<div class="mr-4 flex-1 font-bold  my-auto md:text-center">{title}</div>
		</div>

		<div class=" basis-2/3">
			<slot />
		</div>
	</div>
</FadeIn>
