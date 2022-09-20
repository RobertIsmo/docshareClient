<script lang="ts">
	import { goto } from '$app/navigation';
	let username: string = '';
	let password: string = '';
	$: confirmed = (password === '') || (username === '');

	const loginForm = async (e: any) => {
		const form = e.target;
		const [ username, password ] = Array.from(form.elements).map((x: any) => x.value);
		const response = await fetch("/login/api", {
			method: "POST",
			headers: {
    			'Content-Type': 'application/json;charset=utf-8'
  			},
			body: JSON.stringify({username, password})
		})
		if(response.status === 200) goto("/")
	}
</script>

<section>
	<h1>Login</h1>
	<form method="POST" on:submit|preventDefault="{loginForm}">
		<label for="username">Username</label>
		<input id="username" type="text" bind:value={ username }>
		<label for="password">Password</label>
		<input id="password" type="password" bind:value={ password }>
		<input type="submit" value="Login" disabled={ confirmed }>
	</form>
</section>