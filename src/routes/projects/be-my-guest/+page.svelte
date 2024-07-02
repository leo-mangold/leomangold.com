<script>
	import FadeIn from '$lib/components/fade_in.svelte';
	import ProjectPage from '$lib/components/project_page.svelte';
</script>

<ProjectPage title="Be My Guest">
	<FadeIn>
		<p class="py-4">
			Revolutionizing how we discovery restaurants. Built a new restaurant discovery app that helps
			users find restaurants based on recommendations of their friends. In contrast to other
			platforms we focus on positivity and want to focus on building a healty relationship with
			restaurants.
		</p>
		<p>April 2024 — June 2024</p>
	</FadeIn>

	<FadeIn>
		<p class="pb-4">
			Challenges: Create a user-friendly and intuitive native mobile app. Deploy it to the App Store
			and Google Play.
		</p>
		<p class="pb-4">
			Technologies used: ReactNative, Expo, TRPC, PostgreSQL, Prisma, Docker, Figma, Digital Ocean,
			App Store, Google Play, Google Places
		</p>
	</FadeIn>

	<img src="/projects/be-my-guest/s1.png" alt="" />
</ProjectPage>
