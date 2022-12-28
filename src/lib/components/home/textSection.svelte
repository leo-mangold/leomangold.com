<script lang="ts">
	import { onMount } from 'svelte';
	import BlobResponsive from '../blobResponsive.svelte';
	export let title: string;
	export let id: string;
	export let fadeOutAtTop: boolean = true;
	let div: HTMLElement;

	onMount(() => {
		if (fadeOutAtTop) {
			document.addEventListener('scroll', () => {
				const top = div.getBoundingClientRect().top;
				console.log((top - window.innerHeight) / 100 + 1);

				div.style.opacity = `${top / 100 + 1.5}`;
			});
		}
	});
</script>

<div class="flex h-[70vh] w-screen" {id} bind:this={div}>
	<div class="my-auto grid grid-cols-3">
		<div
			class="flex place-content-center p-8 text-center font-serif text-6xl font-bold italic text-stone-500"
		>
			<span class="my-auto">{title}</span>
		</div>
		<div class="my-auto">
			<BlobResponsive blobColor="#78716C" />
		</div>
		<div class=" flex place-content-center p-8 text-center italic text-stone-500">
			<span class="my-auto"><slot /></span>
		</div>
	</div>
</div>
