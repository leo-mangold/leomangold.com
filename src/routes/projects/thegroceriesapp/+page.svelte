<script>
	import FadeIn from '$lib/components/fade_in.svelte';
	import ProjectPage from '$lib/components/project_page.svelte';
</script>

<ProjectPage title="The Groceries App" subTitle="Groceries made simple">
	<FadeIn>
		<p class="py-4">
			<span class="font-bold">The Groceries App</span> is an all in one solution to simplify your grocery
			shopping. Groceries are sorted by tags and can be divided over multiple lists. All lists can be
			shared and synchronized with your whole family, your roommates, your partner, or be just for you
			all alone.
		</p>
		<p>January 2021 — Present</p>
	</FadeIn>

	<FadeIn>
		<div class="my-8 flex">
			<div class="sm:w-1/2">
				<p class="mb-4">
					Developed an app, to simplify daily grocery shopping for individuals and families.
					Challenges: Multi-device asynchronous data handling, state management, authentication,
					OCR, device-specific deployment.
				</p>
				<p class="mb-4">
					Technologies used: Flutter SDK, Firebase Database, e-mail authentication, Google ML-Kit
					OCR.
				</p>
				<p>Target platforms: iOS & Android</p>
			</div>
			<div class="sm:w-1/3">
				<img src="/projects/thegroceriesapp/home_page.png" alt="" />
			</div>
		</div>
	</FadeIn>
	<FadeIn>
		<div class="my-8 flex gap-8">
			<div class=" w-1/3">
				<img src="/projects/thegroceriesapp/signup_page.png" alt="" />
			</div>

			<div class=" w-1/3">
				<img src="/projects/thegroceriesapp/add_item.png" alt="" />
			</div>

			<div class=" w-1/3">
				<img src="/projects/thegroceriesapp/tag_edit_page.png" alt="" />
			</div>
		</div>
	</FadeIn>
	<FadeIn>
		<h3 class="py-4 font-bold">Future plans</h3>
		<ul class="mb-4">
			<li class="list-inside list-disc p-4">Product suggestions</li>
			<li class="list-inside list-disc p-4">Discount detection</li>
			<li class="list-inside list-disc p-4">In store reminders</li>
		</ul>
		<p>More coming soon...</p>
	</FadeIn>
</ProjectPage>
