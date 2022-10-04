<script>
	import Footer from '$lib/components/footer.svelte';
	import Nav from '$lib/components/nav.svelte';
	import { onMount } from 'svelte';
	import '../app.css';

	const colors = ['bg-orange-600', 'bg-sky-500', 'bg-purple-500', 'bg-green-500', 'bg-indigo-500'];
	const colorsRGB = [
		'rgb(234 88 12)',
		'rgb(14 165 233)',
		'rgb(168 85 247)',
		'rgb(34 197 94)',
		'rgb(99 102 241)',
		'rgb(0 0 0)'
	];
	let col = colorsRGB[Math.floor(Math.random() * colors.length)];

	console.log('color random choose');
	onMount(() => {
		document.body.style.backgroundColor = col;
	});
</script>

<svelte:head>
	<meta name="theme-color" content={col} />
</svelte:head>

<div class="main min-h-screen text-xl text-white">
	<Nav />
	<div class="main-content mx-8  md:ml-auto  md:w-2/3">
		<div class="min-h-screen">
			<slot />
		</div>
	</div>
	<Footer />
</div>
