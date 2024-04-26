<script>
import { v4 as uuidv4 } from 'uuid';
import { fade } from 'svelte/transition';

const newItem = {
	name: ''
};

let todolist = [
	{
		id: uuidv4(),
		name: 'Buy milk',
		isComplete: true
	},
	{
		id: uuidv4(),
		name: 'Buy bread',
		isComplete: false
	},
	{
		id: uuidv4(),
		name: 'Run',
		isComplete: false
	},
	{
		id: uuidv4(),
		name: 'Get new job',
		isComplete: false
	}
];

const addNewItem = () => {
	if (!newItem.name) {
		alert('Please enter a name');
		return;
	}

	newItem.id = uuidv4();
	newItem.isComplete = false;
	todolist = [{ ...newItem }, ...todolist];
	newItem.name = '';
};
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div
	class="
	my-auto
	flex
	min-h-200
	items-center
	justify-center
	bg-logo-page
"
>
	<div class="flex min-h-40 w-90 flex-col items-start justify-start bg-white shadow-primary">
		<div class="w-full border-b-2 border-indigo-400/20 p-4 text-center">
			<h1 class="mb-2 text-1xl font-medium">December</h1>
			<span class="text-indigo-300">Tuesday, December 22</span>
		</div>

		<ul class="flex w-full flex-col gap-2 px-3 py-4">
			{#each todolist as { name, isComplete, id } (id)}
				<li transition:fade>
					<button
						on:click={() => {
							isComplete = !isComplete
						}}
						class="flex w-full cursor-pointer justify-between"
					>
						<span
							class="
							transtion-colors
							relative
							duration-300
							hover:text-opacity-80
							
							{isComplete 
								? 'text-gray-500 line-through' 
								: 'text-gray-900 after:absolute after:left-0 after:right-0 after:top-1/2 after:h-0.5 after:w-0 after:-translate-y-1/2 after:bg-gray-500 after:duration-300 after:hover:w-full'}"
						>
							{name}
						</span>

						<span>
							{#if isComplete}😀{:else}🙁{/if}
						</span>
					</button>
				</li>
			{/each}
		</ul>

		<form on:submit|preventDefault={addNewItem} class=" mt-5 flex w-full flex-col gap-4 px-4">
			<input
				bind:value={newItem.name}
				class="w-full border border-indigo-400/20 p-4"
				placeholder="Add new task..."
			/>

			<button
				type="submit"
				class="mx-auto flex w-40 translate-y-4 items-center justify-center rounded-full bg-green-500 px-4 py-2 font-medium text-white"
			>
				Add
			</button>
		</form>
	</div>
</div>
