<script>
import { v4 as uuidv4 } from 'uuid';
import { fade, slide } from 'svelte/transition';
import { onMount } from 'svelte';

let mockCurrentLocale = 'FR';

const locales = [
	{
		id: uuidv4(),
		locale: 'ENG'
	},
	{
		id: uuidv4(),
		locale: 'FR'
	}
];

const socials = [
	{
		id: uuidv4(),
		title: 'Fb',
		href: '#'
	},
	{
		id: uuidv4(),
		title: 'Pin',
		href: '#'
	},
	{
		id: uuidv4(),
		title: 'Ig',
		href: '#'
	}
];

let isAnimate = false;

const elementTransitions = {
	mainPhoto: { delay: 200, duration: 2000 },
	supTitle: { delay: 1000, duration: 300 },
	title: { delay: 1200, duration: 300 },
	topBar: { delay: 1000, duration: 300 },
	sideBar: { delay: 1400, duration: 800 },
	bottomBar: { delay: 1600, duration: 600 },
	sliderNav: { delay: 2000, duration: 2000 }
};

onMount(() => (isAnimate = true));
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

{#if isAnimate}
	<div class="relative flex flex-1 flex-col justify-between bg-white p-4 lg:p-15">
		<div
			transition:fade={{
				delay: elementTransitions.mainPhoto.delay,
				duration: elementTransitions.mainPhoto.duration
			}}
			class="absolute inset-0 grid grid-cols-12"
		>
			<div class="col-span-12 flex lg:col-span-7">
				<picture class="border">
					<img
						class="h-full w-full object-cover"
						src="https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg"
						alt="portrait"
					/>
				</picture>
			</div>

			<div class="hidden justify-end gap-7 lg:col-span-5 lg:flex lg:flex-col lg:pl-16 lg:pr-30">
				<picture class="h-87.5 flex-0 pointer-events-none ml-auto w-65">
					<img
						class="h-full w-full object-cover"
						width="260"
						height="350"
						src="https://img.freepik.com/free-photo/portrait-beautiful-woman-wearing-modern-dress_144627-28653.jpg"
						alt="portrait"
					/>
				</picture>

				<picture class="h-72.5 w-54">
					<img
						class="h-full w-full object-cover"
						width="216"
						height="290"
						src="https://img.freepik.com/premium-photo/woman-standing-beach-wearing-wide-legged-pants-generative-ai-image_87646-15088.jpg"
						alt="portrait"
					/>
				</picture>
			</div>

			<div
				transition:slide={{
					delay: elementTransitions.sideBar.delay,
					duration: elementTransitions.sideBar.duration
				}}
				class="absolute bottom-0 right-0 top-0 hidden w-30 items-center justify-center gap-10 lg:flex"
				style="writing-mode: vertical-rl; text-orientation: mixed;"
			>
				<span>Ref: 237498237489</span>
				<div class="h-px w-px basis-1/12 bg-black"></div>
				<span>White loose dress</span>
			</div>

			<div
				transition:slide={{
								delay:  elementTransitions.sliderNav.delay,
								duration: elementTransitions.sliderNav.duration
							}}
				class="left-1/3 top-1/3 hidden w-50 items-center gap-6 text-sm capitalize text-white lg:absolute lg:flex"
			>
				<span>next</span>
				<div class="h-px w-px basis-4/12 bg-white"></div>
				<span>previous</span>
			</div>

			<div class="absolute bottom-14 left-1/2 col-span-12 hidden gap-16 text-neutral-500 lg:flex">
				<span>•</span>
				<span>•</span>
				<span>•</span>
			</div>
		</div>

		<div
			transition:slide={{
				delay: elementTransitions.topBar.delay,
				duration: elementTransitions.topBar.duration
			}}
			class="relative flex items-center justify-between gap-4"
		>
			<button
				class="flex items-center justify-between gap-4 text-white transition-colors hover:text-gray-600"
			>
				<svg
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 6H20M4 12H20M4 18H20"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				<span class="hidden lg:block"> Menu </span>
			</button>

			<div class="flex items-center gap-10">
				{#each locales as { locale }}
					<button
						type="button"
						on:click={() => (mockCurrentLocale = locale)}
						class="
						hover:text-light
						text-sm
						font-bold
						transition-colors
						duration-300
						{locale === mockCurrentLocale ? 'pointer-events-none text-gray-950' : 'text-gray-300'}"
					>
						{locale}
					</button>
				{/each}
			</div>
		</div>

		<div class="relative text-white">
			<p
				transition:fade={{
				delay: elementTransitions.supTitle.delay,
				duration: elementTransitions.supTitle.duration
			}}
				class="mb-10 max-w-20 lg:mb-30"
			>
				Some random text 2020
			</p>

			<h1
				transition:fade={{
				delay: elementTransitions.title.delay,
				duration: elementTransitions.title.duration
			}}
				class="flex flex-col text-left font-familySecondary text-2xl font-bold lg:text-4xl"
			>
				<span>Summer</span>
				2020
			</h1>
		</div>

		<div
			transition:fade={{
				delay: elementTransitions.bottomBar.delay,
				duration: elementTransitions.bottomBar.duration
			}}
			class="relative flex items-end justify-between"
		>
			<div class="flex gap-4">
				{#each socials as { title, href }}
					<a
						href={href}
						class="
						text-sm
						font-bold
						uppercase
						text-white
						transition-colors
						duration-300
						hover:text-opacity-80"
						target="_blank"
					>
						{title}
					</a>
				{/each}
			</div>

			<button
				class="
				flex
				h-14
				cursor-pointer
				items-center
				border-2
				border-black
				bg-white
				px-12
				text-xs
				font-bold
				uppercase
				text-black
				transition-colors
				duration-300
				hover:bg-black
				hover:text-white
			"
			>
				Shop now
			</button>
		</div>
	</div>
{/if}
