
<script lang="ts">
	import { onMount } from 'svelte';
	let name = "";
	let input;
	let file;
	onMount(() => {
		input.addEventListener("change", () => {
			file = input.files[0];
		})
	})
	$: confirmed = false;
	const uploadForm = async () => {
		const response =  await fetch(`/upload`, {
			method: "POST",
			body: JSON.stringify({ name })
		})
		const data = await response.json();
		const signedUrl = data.data.put;
		await fetch(signedUrl, {
			method: "POST",
			Headers:[
				["Content-Type", "application/json"]
			],
			body: JSON.stringify({ data: {value1: "abc", value2:"123"}, date: Date.now() })
		})
	}
</script>


<main>
	<h2>Upload Document</h2>
	<form method="POST" on:submit|preventDefault="{uploadForm}">
		<input type="text" id="name" bind:value={ name }>
		<input type="file" id="fileinput" bind:this={ input }>
		<input type="submit" value="Upload" disabled={ confirmed }>
	</form>
</main>

