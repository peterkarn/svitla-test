<script>
import Header from './Header.svelte';
import './styles.css';
import '../app.css';
</script>

<div class="flex h-screen flex-col font-familyPrimary">
	<Header />

	<main class="mx-auto flex h-full w-full flex-1 flex-col p-1">
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center p-3">Peter K. 2024</footer>
</div>
