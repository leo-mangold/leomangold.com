<script lang="ts">
	import BlobWithText from '$lib/components/home/blobWithText.svelte';
	import TextSection from '$lib/components/home/textSection.svelte';
	import { onMount } from 'svelte';

	let y: number = 0;
	let x: number;
	let scrollForMore: HTMLElement;
	let scrollForMoreArrowRight: HTMLElement;
	onMount(() => {
		// document.addEventListener('touchstart', handleTouchStart, false);
		// document.addEventListener('touchmove', handleTouchMove, false);

		// var xDown: number | null = null;
		// var yDown: number | null = null;

		// function handleTouchStart(event: TouchEvent) {
		// 	const firstTouch = event.touches[0];
		// 	xDown = firstTouch.clientX;
		// 	yDown = firstTouch.clientY;
		// }

		// function handleTouchMove(event: TouchEvent) {
		// 	if (!xDown || !yDown) {
		// 		return;
		// 	}
		// 	var xUp = event.touches[0].clientX;
		// 	var yUp = event.touches[0].clientY;

		// 	var xDiff = xDown - xUp;
		// 	var yDiff = yDown - yUp;
		// 	console.log(xDiff, yDiff);

		// 	y += xDiff + yDiff;
		// 	console.log(y);

		// 	xDown = null;
		// 	yDown = null;
		// }

		// fade out scroll for more text when in the middle of the page

		if (scrollForMore != null && scrollForMoreArrowRight != null) {
			document.addEventListener('scroll', () => {
				const top = scrollForMore.getBoundingClientRect().top;
				console.log((top - window.innerHeight) / 100 + 1);

				scrollForMore.style.opacity = `${top / 100 - 1}`;
				// hide if scrollForMore enters the page
				scrollForMoreArrowRight.style.opacity = `${(top - window.innerHeight) / 100 + 1}`;
			});
		}

		// Make anchor tags scroll smoothly to next section
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			let link = anchor.getAttribute('href')?.replace('#', '');
			if (link) {
				let myTarget = document.getElementById(link);
				anchor.addEventListener('click', function (e) {
					e.preventDefault();

					if (myTarget != null) {
						myTarget.scrollIntoView({
							behavior: 'smooth',
							block: 'center'
						});
					}
				});
			}
		});
	});
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="h-[2300px]  scroll-smooth text-stone-700 ">
	<!-- Hero Section -->
	<div class="fixed  w-[2400px]" style="transform: translate({-y}px, 0)">
		<!-- Call To Action -->
		<div class=" h-48 w-screen text-center" style="transform: translate({y}px, 0)">
			<a href="mailto:contact@leomangold.com">
				<div
					class="group m-8 grid animate-pulse  place-items-center justify-items-center p-8 text-stone-400 transition-all  duration-200 hover:scale-125"
				>
					<span
						class=" underline-animation text-[20px] font-bold transition-all  duration-200 group-hover:bg-[length:100%_100px] group-hover:text-stone-100 "
						>Send me a message</span
					>
					<svg
						class="h-12 w-12 animate-slow-bounce  p-1 "
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 16 7"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M 0 7 L 8 0 L 16 7"
						/>
					</svg>
				</div>
			</a>
		</div>
		<!-- Title -->
		<div class=" -mt-48 flex overflow-x-visible px-12">
			<span class="whitespace-nowrap font-serif text-[30rem] font-black italic text-stone-500">
				leo mangold
			</span>
			<span class="ml-16 flex text-stone-200" bind:this={scrollForMoreArrowRight}>
				<div class="my-auto -rotate-90 ">
					<svg
						class="h-48 w-48   animate-slow-bounce p-1"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 20 7"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M 2 0 L 10 7 L 18 0"
						/>
					</svg>
				</div>
			</span>
		</div>

		<!-- Project Links -->

		<div class="felx-row flex w-full">
			<BlobWithText text="Groceries" link="#groceries" />

			<BlobWithText text="NoFate" link="#nofate" />

			<BlobWithText text="This" link="#this" />

			<BlobWithText text="Resume" link="#resume" />
			<BlobWithText text="Last" link="#resume" />
		</div>
	</div>
	<!-- <div class="text-4xl">Scroll for more</div> -->
</div>
<!-- Scroll for more -->
<div class="w-screen" bind:this={scrollForMore}>
	<div class="group m-8 grid h-60 place-items-center justify-items-center p-8 text-stone-300 ">
		<span class=" text-[30px] font-bold">Scroll for more...</span>
		<svg
			class="h-24 w-24 animate-slow-bounce  p-1 "
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 20 7"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1"
				d="M 2 0 L 10 7 L 18 0"
			/>
		</svg>
	</div>
</div>
<!-- Groceries -->

<TextSection title="Groceries" id="groceries">
	<p class="mb-4">Groceries made simple.</p>
	<p class="mb-4">The Groceries App provides a streamlined grocery shopping experience.</p>
	<p class="mb-4">
		This project is built with Flutter and Firebase to achieve multi-platform support, online
		synchronization, and fast distribution.
	</p>
	2021 — Present
</TextSection>

<!-- NoFate -->

<TextSection title="NoFate" id="nofate">
	<p class="mb-4">A Streetware Fashion Brand.</p>
	<p class="mb-4">
		Lorem ipsum, dolor sit amet adipisicing elit. Iure sit aperiam quia qui pariatur, dignissimos
		id.
	</p>
	<p class="mb-4">
		Esse exercitationem nihil inventore iusto eaque quo nisi quas laborum adipisci, suscipit libero
		error?
	</p>
	2021
</TextSection>

<!-- This -->
<TextSection title="This Web page" id="this">
	<p class="mb-4">The Development of this webpage.</p>
	<p class="mb-4">
		Lorem ipsum, dolor sit amet adipisicing elit. Iure sit aperiam quia qui pariatur, dignissimos
		id.
	</p>
	<p class="mb-4">
		Esse exercitationem nihil inventore iusto eaque quo nisi quas laborum adipisci, suscipit libero
		error?
	</p>
	2021
</TextSection>
<!-- Resume -->
<TextSection title="My Resume" id="resume">
	<p class="mb-4">My Resume.</p>
	<p class="mb-4">
		Lorem ipsum, dolor sit amet adipisicing elit. Iure sit aperiam quia qui pariatur, dignissimos
		id.
	</p>
	<p class="mb-4">
		Esse exercitationem nihil inventore iusto eaque quo nisi quas laborum adipisci, suscipit libero
		error?
	</p>
	<p class="mb-4">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, error! Labore iusto ratione
		eligendi nesciunt aliquid fugit totam harum impedit ut? Deleniti, tenetur reprehenderit?
		Architecto distinctio quia animi quod doloremque.
	</p>
	<p class="mb-4">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, error! Labore iusto ratione
		eligendi nesciunt aliquid fugit totam harum impedit ut? Deleniti, tenetur reprehenderit?
		Architecto distinctio quia animi quod doloremque.
	</p>
	2021
</TextSection>
