<script lang="ts">
    // import { PUBLIC_BACKEND } from '$env/static/public';
    import { enhance } from '$app/forms';
    
    let username = '';
    let password = '';
    let errorMessage = '';

    async function handleSubmit() {
        errorMessage = ''; // Reset error message
        
        try {
            // const response = await fetch(`${PUBLIC_BACKEND}/login`, {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data);
            // Handle successful login here (e.g., redirect or set auth state)
            
        } catch (error) {
            console.error('Error:', error);
            errorMessage = "An error occurred while logging in.";
        }
    }
</script>

<div class="flex justify-center items-center h-screen">
    <form 
        on:submit|preventDefault={handleSubmit} 
        class="card w-96 bg-base-300 shadow-xl"
    >
        <div class="card-body">
            <h2 class="card-title text-base-content">Login</h2>
            
            <div class="form-control">
                <label class="label" for="username">
                    <span class="label-text">Username</span>
                </label>
                <input
                    type="text"
                    id="username"
                    bind:value={username}
                    required
                    class="input input-bordered"
                    placeholder="Enter your username"
                />
            </div>

            <div class="form-control">
                <label class="label" for="password">
                    <span class="label-text">Password</span>
                </label>
                <input
                    type="password"
                    id="password"
                    bind:value={password}
                    required
                    class="input input-bordered"
                    placeholder="Enter your password"
                />
            </div>

            {#if errorMessage}
                <div class="text-red-500">{errorMessage}</div>
            {/if}

            <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </div>
    </form>
</div>

<style>
    /* Add any additional styles here */
</style>