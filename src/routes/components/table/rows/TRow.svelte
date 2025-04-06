<script lang='ts'>

import { formatNumber } from "$lib/functions";

const { title, data, bold = false }: { title:string, data:number[], bold?:boolean } = $props()


</script>

<tr class:bold={bold}>
    <td class="icon">
        <img src="/bloomberg-bar-graph.png" alt="icon">
    </td>
    <td class:indented={!bold}>{title}</td>
    {#each data as num}
        <td>{formatNumber(num)}</td>
    {/each}
</tr>

<style>
    tr {
        color: #efd9a4;
    }

    tr:hover {
        background-color: #2c2c2c;
    }

    .bold {
        color: #da9946;
    }

    td.indented {
        padding-left: 20px;
    }

    .icon {
        width: 1px; /* Force cell to be as narrow as possible */
        white-space: nowrap; /* Prevent text wrapping */
        padding: 2px; /* Add minimal padding */
        margin: 0;
        vertical-align: middle;
    }
    
    .icon img {
        display: block; /* Remove extra space below image */
        width: auto; /* Make the image its natural width */
        height: auto; /* Maintain aspect ratio */
    }

</style>