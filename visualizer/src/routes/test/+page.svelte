<script lang="ts">
import { onMount } from 'svelte';
	let { children } = $props();
	let isMobile = $state(false);
	const updateMedia = () => {
		isMobile = window.innerWidth < 768; 
		console.log(isMobile)
	};
	onMount(() => {
		updateMedia();
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

</script>
{#if isMobile}
	<h1>Mobile</h1>
{:else}
	<h1>Not Mobile</h1>
{/if}