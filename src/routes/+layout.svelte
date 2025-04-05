<script lang="ts">
	import '../app.css';

	let { children } = $props();
	
</script>

<style>
	:global(body) {
    background-color: black;
    color: white; /* For better text visibility */
    margin: 0;
    padding: 0;
  }
</style>

{@render children()}
