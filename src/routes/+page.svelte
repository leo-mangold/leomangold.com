<script lang="ts">
	import FadeIn from '$lib/components/fade_in.svelte';
	import Project from '$lib/components/project.svelte';
	import TextSection from '$lib/components/text_section.svelte';
	import { EMAIL } from '$lib/data';

	const projects = [
		{
			title: 'Be My Guest',
			description: 'Revolutionizing how we discovery restaurants.',
			link: '/projects/be-my-guest'
		},
		{
			title: 'RTTR - Customs',
			description: 'Modernising customs.',
			link: '/projects/rttr'
		},
		{
			title: 'The Groceries App',
			description: 'Groceries made simple.',
			link: '/projects/thegroceriesapp'
		},
		{
			title: 'NoFate',
			description: 'A streetware fashion brand.',
			link: '/projects/nofate'
		},
		{
			title: 'Bergheim Bau',
			description: 'A portfolio webpage for a construction company.',
			link: '/projects/bergheimbau'
		}
	];
</script>

<svelte:head>
	<title>Leo Mangold</title>
	<meta name="description" content="Software developer and designer for every challenge." />
</svelte:head>

<!-- HERO -->

<FadeIn>
	<div class="mb-24 mt-16 sm:mb-48">
		<div class=" sm:h-7/12 headline">
			<div class="my-auto sm:mb-0 sm:mt-auto">
				<div class="short sm:hidden">
					<p>
						<span class="text-black">Software</span> Engineer and
						<span class="text-black">Graphic</span> and
						<span class="text-black">Fashion</span> Designer.
					</p>
				</div>
				<div class="long hidden sm:inline">
					<p>
						<span class="text-black">Software</span> Engineer and
						<span class="text-black">Graphic </span> and <span class="text-black">Fashion</span>
						Designer based in The Netherlands.
					</p>
					<p>Currently juggling work, projects, and computer science courses.</p>
				</div>
			</div>
		</div>
	</div>
</FadeIn>

<!-- PROJECTS -->
<section class="projects pb-8">
	<div class="mb-4">
		<TextSection title="Projects">
			<div class="my-auto hidden w-20 border-t border-white sm:inline-block md:inline-block" />
		</TextSection>
	</div>

	{#each projects as project, i}
		<a href={project.link}>
			<Project
				number={(i + 1).toString().padStart(2, '0')}
				title={project.title}
				description={project.description}
			/>
		</a>
	{/each}
</section>

<!-- ABOUT -->
<section class="about mb-8">
	<TextSection title="About">
		<p class="mb-4">Hi I'm Leo,</p>

		<p class="mb-4">
			I'm a software developer and graphic designer based in The Netherlands. I am half German half
			Dutch and lived most of my live in Germany before moving to The Netherlands for my computer
			science and engineering program at the TU Delft.
		</p>

		<p class="mb-4">
			2022 I finished the German Abitur and started my computer science and engineering program at
			the TU Delft. Throughtout my studies I've been working at a lot of different companies and
			projects.
		</p>

		<p class="mb-4">
			I have a passion for creating great user experiences and I'm always on the look out for a
			challenge, and your project seems perfect.
		</p>

		<p class="mb-4">So whats holding you back? Shoot me a message and we can get started!</p>
	</TextSection>
</section>

<!-- CONTACT -->
<section class="contact group inline-block py-8">
	<FadeIn>
		<a href="mailto:{EMAIL}">
			<p class="font-serif text-6xl font-bold">Get in Touch!</p>
			<div class="border-t" />
			<p
				class="overflow-hidden opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
			>
				{EMAIL}
			</p>
		</a>
	</FadeIn>
</section>
