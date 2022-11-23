<script lang="ts">
	import { onMount } from 'svelte';
	let root: Element;

	onMount(() => {
		let callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('opacity-0');
					entry.target.classList.add('opacity-100');
					// observer.unobserve(entry.target);
				} else {
					entry.target.classList.add('opacity-0');
					entry.target.classList.remove('opacity-100');
				}
			});
		};

		let options = {
			threshold: 0
		};

		let observer = new IntersectionObserver(callback, options);
		observer.observe(root);
	});
</script>

<div bind:this={root} class="opacity-0 transition duration-500 ease-in">
	<slot />
</div>
