<script lang='ts'>

import { formatNumber } from "$lib/functions";

let { title, data, bold, clear }:
{ title:string, data:number[], bold?:boolean, clear:number
} = $props()

//temp
let highlighted = false;

// let toBeCleared = false
// let prevData = [...data]


// let highlighted = $derived.by(() => {
//     if(data.some((value, index) => value == prevData[index])) {
//         console.log("no change 'Trow'", data[0])
//     }
//     if(data.some((value, index) => value !== prevData[index])) {
//         console.log("highlight", data[0])
//         console.log("clear", clear)
//         // toBeCleared = true;
//         prevData = [...data]
//         return true;
//     }
//     if (clear) {
//         console.log("clear", clear)
//         return false;
//     }
// });

// let highlighted = $derived.by(() => {
//     if(data.some((value, index) => value !== prevData[index])) {
//         console.log("highlight", data[0])
//         console.log("clear", clear)
//         // toBeCleared = true;
//         prevData = [...data]
//         return true;
//     }
//     if (clear > 0) {
//         return false;
//     }
// })

// export function clearHighlighting(){
//     highlighted = false;
// }

// for (let i=0; i<5; i++){
    // 
//     const cleanup = $effect.root(() => {
//         $effect(() => {
//             // This tracks data[i]
//             data[i];
            
//             // Use untrack around the state modification to prevent the loop
//             untrack(() => {
//                 test = true;
//             });
            
//             console.log("highlighted");

//             return() => {
//                 untrack(() => {
//                 test = false;
//                 console.log("unhighlighted");
//                 });
//             }
//         });
//         return () => {
//         console.log('effect root cleanup');
//         };
//     });
// }



</script>

<tr class:bold={bold}>
    <td class="icon">
        <img src="/bloomberg-bar-graph.png" alt="icon">
    </td>
    <td class:indented={!bold}>{title}</td>
    {#each data as num, i}
        <td class:highlight={highlighted} id={String(i)}>{formatNumber(num)}</td>
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

    .highlight {
        color: red;
    }

    /* @keyframes highlight {
        0% {
            background-color: green;
        }
        100% {
            background-color: intial;
        }
    } */

    td {
        border-right: 1px solid #333;
    }

    .indented {
        padding-left: 20px;
    }

    .icon {
        width: 15px; /* Force cell to be as narrow as possible */
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