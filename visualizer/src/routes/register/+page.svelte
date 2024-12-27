<!-- +page.svelte -->
<script lang="ts">
    import { enhance } from '$app/forms';
    
    let username = '';
    let password1 = '';
    let password2 = '';
    let errorMessage = '';

    const patterns = {
        lowercase: /[a-z]/,
        uppercase: /[A-Z]/,
        number: /\d/,
        special_char: /[ -\/:-@\[-`{-\xFF]/,
    };

    function validatePassword(password: string): boolean {
        return Object.values(patterns).every((regex) => regex.test(password));
    }

    async function handleSubmit() {
        // Validate passwords match
        if (password1 !== password2) {
            errorMessage = "Passwords do not match.";
            return;
        }

        // Validate password complexity
        if (!validatePassword(password1)) {
            errorMessage = "Password must include lowercase, uppercase, number, and special character.";
            return;
        }

        errorMessage = ''; // Reset error message
        
        try {
            // const response = await fetch(`${PUBLIC_BACKEND}/register`, {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password: password1
                })
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log(data);
            // Handle successful registration here (e.g., redirect or show success message)
            
        } catch (error) {
            console.error('Error:', error);
            errorMessage = "An error occurred while registering.";
        }
    }
</script>

<div class="flex justify-center items-center h-screen">
    <form 
        on:submit|preventDefault={handleSubmit} 
        class="card w-96 bg-base-300 shadow-xl"
    >
        <div class="card-body">
            <h2 class="card-title text-base-content">Register</h2>
            
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
                <label class="label" for="password1">
                    <span class="label-text">Password</span>
                </label>
                <input
                    type="password"
                    id="password1"
                    bind:value={password1}
                    required
                    class="input input-bordered"
                    placeholder="Enter your password"
                />
            </div>

            <div class="form-control">
                <label class="label" for="password2">
                    <span class="label-text">Confirm Password</span>
                </label>
                <input
                    type="password"
                    id="password2"
                    bind:value={password2}
                    required
                    class="input input-bordered"
                    placeholder="Confirm your password"
                />
            </div>

            {#if errorMessage}
                <div class="text-red-500">{errorMessage}</div>
            {/if}

            <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </div>
    </form>
</div>

<style>
    /* Add any additional styles here */
</style>