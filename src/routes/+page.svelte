<script>
	import FadeIn from '$lib/components/fade_in.svelte';
	import Project from '$lib/components/project.svelte';
	import TextSection from '$lib/components/text_section.svelte';
	import { EMAIL } from '$lib/data';
</script>

<svelte:head>
	<title>Leo Mangold</title>
	<meta name="description" content="Software developer and designer for every challenge." />
</svelte:head>

<!-- HERO -->

<FadeIn>
	<div class="mb-24 mt-16 sm:mb-48 ">
		<div class=" sm:h-7/12 headline">
			<div class="my-auto sm:mt-auto sm:mb-0 ">
				<div class="short sm:hidden">
					<p>
						<span class="text-black">Graphic</span> and
						<span class="text-black">Fashion</span> Designer.
					</p>
					<p>
						<span class="text-black"> Software</span> Engineer.
					</p>
				</div>
				<div class="long hidden sm:inline">
					<span class="text-black">Graphic</span>, <span class="text-black">Web</span>, and
					<span class="text-black">Fashion</span>
					Designer based in The Netherlands. Currently juggling computer science courses at TU Delft
					to become a
					<span class="text-black">Software Engineer</span>.
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

	<a href="/projects/rttr">
		<Project number="01" title="RTTR - Customs" description="Modernising customs" />
	</a>
	<a href="/projects/thegroceriesapp">
		<Project number="01" title="The Groceries App" description="Groceries made simple." />
	</a>
	<a href="/projects/nofate">
		<Project number="02" title="NoFate" description="A streetware fashion brand." />
	</a>
	<a href="/projects/bergheimbau">
		<Project
			number="03"
			title="Bergheim Bau"
			description="A portfolio webpage for a construction company."
		/>
	</a>
</section>

<!-- ABOUT -->
<section class="about mb-8">
	<TextSection title="About">
		<p class="mb-4">Hi I'm Leo,</p>

		<p class="mb-4">
			I'm a graphic designer and computer science student based in The Netherlands. I am half German
			half Dutch and lived most of my live in Germany.
		</p>

		<p class="mb-4">
			2022 I finished the German Abitur and started my computer science and engineering program at
			the TU Delft.
		</p>

		<p class="mb-4">I'm always on the look out for a challenge, and your project seems perfect.</p>

		<p class="mb-4">So whats holding you back? Shoot me a message and we can get started.</p>
	</TextSection>
</section>

<!-- CONTACT -->
<section class="contact group inline-block py-8 ">
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
