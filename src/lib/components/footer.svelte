<script>
	import { EMAIL, PHONE } from '$lib/data';
</script>

<footer>
	<div class="mx-8 py-8 md:ml-auto md:w-2/3">
		<div class="flex flex-col gap-x-8 gap-y-8 sm:flex-row">
			<div class="flex-1">
				<div class=" font-serif text-3xl font-bold ">Leo Mangold</div>
			</div>
			<div class="flex-1">
				<a href="sms:{PHONE}" class=" block">
					<span class="underline-animation">Text me</span>
				</a>

				<a href="mailto:{EMAIL}" class=" block">
					<span class="underline-animation">Email me</span>
				</a>
			</div>
			<div class="flex-1">
				<div>
					<p>Delft, The Netherlands</p>
					<p class="mt-2 text-xs">© Copyright 2023 Leo Mangold</p>
				</div>
			</div>
		</div>
		<div class="">
			<!-- Copyright symbol -->
		</div>
	</div>
</footer>
