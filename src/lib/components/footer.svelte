<script>
	import { EMAIL, PHONE } from '$lib/data';
</script>

<footer>
	<div class="mx-8 py-8 md:ml-auto md:w-2/3">
		<div class="flex flex-row space-x-8">
			<div class="flex-1">
				<div class="font-serif text-3xl font-bold">Leo Mangold</div>
			</div>
			<div class="flex-1">
				<a href="sms:{PHONE}" class="nav-link block"> Text </a>
				<a href="mailto:{EMAIL}" class="nav-link block">Email</a>
			</div>
			<div class="flex-1">
				<div>
					<p>Delft, The Netherlands</p>
				</div>
			</div>
		</div>
	</div>
</footer>
