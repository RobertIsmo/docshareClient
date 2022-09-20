<script lang="ts">
	import { goto } from '$app/navigation';
	let username: string = '';
	let email: string = '';
	let password: string = '';
	let confirm: string = '';
	$: confirmed = (password !== confirm) || (password === '') || (username === '') || (email === '');

	const registerForm = async (e: any) => {
		const form = e.target;
		const [ username, email, password ] = Array.from(form.elements).map((x: any) => x.value);
		const response = await fetch("/register/api", {
			method: "POST",
			headers: {
    			'Content-Type': 'application/json;charset=utf-8'
  			},
			body: JSON.stringify({username, email, password})
		})
		if(response.status === 200) goto("/login")
	}
</script>

<section>
	<h1>Register</h1>
	<form method="POST" on:submit|preventDefault="{registerForm}">
		<label for="username">Username</label>
		<input id="username" type="text" bind:value={ username }>
		<label for="email">Email</label>
		<input id="email" type="email" bind:value={ email }>
		<label for="password">Password</label>
		<input id="password" type="password" bind:value={ password }>
		<label for="confirm">Confirm Password</label>
		<input id="confirm" type="password" bind:value={ confirm }>
		<input type="submit" value="Register" disabled={ confirmed }>
	</form>
</section>