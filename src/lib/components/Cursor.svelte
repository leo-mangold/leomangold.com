<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let bigBall: HTMLElement;
	let smallBall: HTMLElement;
	onMount(() => {
		let hoverables = document.querySelectorAll('a');
		console.log(hoverables);

		document.body.addEventListener('mousemove', onMouseMove);
		for (let i = 0; i < hoverables.length; i++) {
			hoverables[i].addEventListener('mouseenter', onMouseHover);
			hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
		}

		// Move the cursor
		function onMouseMove(e: MouseEvent) {
			gsap.to(bigBall, {
				x: e.clientX - 15,
				y: e.clientY - 15,
				duration: 0.4
			});
			gsap.to(smallBall, {
				x: e.clientX - 5,
				y: e.clientY - 7,
				duration: 0.1
			});
		}

		// Hover an element
		function onMouseHover() {
			gsap.to(bigBall, {
				scale: 2,
				duration: 0.3
			});
		}
		function onMouseHoverOut() {
			gsap.to(bigBall, {
				scale: 1,
				duration: 0.3
			});
		}
	});
</script>

<!-- Cursor: none defined in app.css -->
<div class=" pointer-events-none">
	<div class="fixed top-0 left-0 z-[1000] opacity-80" bind:this={bigBall}>
		<svg height="60" width="60">
			<circle cx="24" cy="24" r="24" stroke-width="0" class="fill-stone-800" />
		</svg>
	</div>

	<div class="fixed top-0 left-0 z-[1000] mix-blend-difference" bind:this={smallBall}>
		<svg height="20" width="20">
			<circle cx="10" cy="10" r="4" stroke-width="0" class="fill-white" />
		</svg>
	</div>
</div>
