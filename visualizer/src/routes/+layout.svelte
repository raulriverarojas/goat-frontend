<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	let { children } = $props();
	let isMobile = $state(false);
	const updateMedia = () => {
		isMobile = window.innerWidth < 768; 
	};
	onMount(() => {
		updateMedia();
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});
</script>
<!-- NavBar.svelte -->
{#if isMobile}
  <div class="navbar fixed top-5 left-0 z-10 ">
    <div class="navbar-start">
      <div class="dropdown ">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
                Home
            </a>
          </li>
          <li>
            <a href="/login">
              Login
            </a>
          </li>
          <li>
            <a href="/register">
              Register
              <span class="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
{:else}
	<div class="navbar top-5 left-0 right-0 flex justify-center z-10 mb-30">
		<ul class="menu bg-base-300 lg:menu-horizontal rounded-box">
			<li>
				<a href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					Home
				</a>
			</li>
			<li>
				<a href="/login">
					Login
				</a>
			</li>
			<li>
				<a href="/register">
					Register
					<span class="badge badge-xs badge-info"></span>
				</a>
			</li>
		</ul>
	</div>
{/if}
{@render children()}