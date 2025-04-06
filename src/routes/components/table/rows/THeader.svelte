<script lang='ts'>

    import { formatNumber } from "$lib/functions";
    
    const { title, data, bold = false }: { title:string, data:number[], bold?:boolean } = $props()
    
    // Get the current year as a number
    const currentYear = new Date().getFullYear();
    const years:number[] = [];

    for (let i=0; i<5; i++) {
        years[i] = currentYear + i;
    }
    
    </script>
    
    <tr>
        <th></th>
        <th>Figures in ($)Millions</th>
        {#each years as year}
        <th>{year}</th>
        {/each}
    </tr>
    
    <style>
        th {
            padding: 0.25rem; /* px-1 */
            text-align: left; /* text-left */
            font-size: 0.75rem; /* text-xs */
            font-weight: 500; /* font-medium */
            color: #d9d2d4; /* text-[#d9d2d4] */
            text-transform: uppercase; /* uppercase */
            letter-spacing: 0.05em; /* tracking-wider */
            background-color: #272727; /* bg-[#272727] */
        }
    
    </style>