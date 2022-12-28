<script>
	import BlobResponsive from '../blobResponsive.svelte';
	export let text = '';
	export let link = '';
</script>

<a href={link} class="h-full">
	<div class="w-[500px] h-full text-center justify-center group relative p-8 -mt-48">
		<div class="opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
			<BlobResponsive blobSize={120} blobColor="#78716C" />
		</div>

		<div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-5">
			<span class="text-2xl  group-hover:text-white duration-500 transition-text p-2">
				{text}
			</span>
		</div>
	</div>
</a>
