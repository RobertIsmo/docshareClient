<script lang="ts">
	import FileUpload from "../components/FileUpload.svelte";

	export let data: any;
	let message = "login please"
	if(data.status === 200) {
		message = data.data.me.username;
	}
</script>

<section>
	<p>{ message }</p>
	<FileUpload />
</section>