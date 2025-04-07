<!-- Table.svelte -->
<script lang="ts">

    import { setContext } from "svelte";

    let { title, header, rows } = $props();

</script>

<div class="container">
    <h4>{title}</h4>
    <table>
        <thead>
            {@render header()}
        </thead>
        <tbody>
            {@render rows()}
        </tbody>
    </table>
</div>
  
  <style>
    h4 {
        padding: 0;
        background-color: #a8a8a8;
        border-bottom: 1px solid #4b5563;
    }

    .container {
        background-color: black;
        font-family: 'IBM Plex Mono', monospace;
    }
  </style>