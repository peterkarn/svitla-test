<script>
import { v4 as uuidv4 } from 'uuid';
const navigation = [
	{
		id: uuidv4(),
		name: 'Animation',
		href: '#'
	},
	{
		id: uuidv4(),
		name: 'Branding',
		href: '#'
	},
	{
		id: uuidv4(),
		name: 'Illustration',
		href: '#'
	}
];
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="my-auto bg-primary-linear-gradient p-10">
	<nav>
		<ul
			class="flex min-h-40 flex-col items-center justify-center gap-16 font-familyPrimary font-regular md:flex-row"
		>
			{#each navigation as { name, href }}
				<li class="group">
					<a
						class="
					relative
					pb-4
					text-white/60
					transition-colors
					duration-300
					after:absolute
					after:bottom-0
					after:left-1/2
					after:h-1
					after:w-1/2
					after:-translate-x-1/2
					after:rounded
					after:bg-white
					after:opacity-0
					after:transition-opacity
					group-hover:text-white
					after:group-hover:opacity-100
				"
						href={href}
					>
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
