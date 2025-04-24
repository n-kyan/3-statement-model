<script lang="ts">
    import * as Popover from "$lib/components/ui/popover/index.js";

    import IncomeStatement from "$lib/components/income-statement.svelte";
    import IncStAssumptions from "$lib/components/inc-st-assumptions.svelte";
    import BalanceSheet from "$lib/components/balance-sheet.svelte";
    import BalShAssumptions from "$lib/components/bal-sh-assumptions.svelte";
    import CashFlowStatement from "$lib/components/cash-flow-statement.svelte";

    let hoverStates = $state([false, false, false])

    function handleHover(index:number) {
        hoverStates = hoverStates.map(() => false);
        hoverStates[index] = true;
    }

</script>
<div class="root">
    <div class="statement-wrapper" role="region" onmouseenter={() => handleHover(0)}>
        <IncomeStatement hovered={hoverStates[0]}/>
        <Popover.Root>
            <Popover.Trigger>Show Assumptions</Popover.Trigger>
            <Popover.Content>
                <IncStAssumptions/>
            </Popover.Content>
        </Popover.Root>
    </div>
    <div class="statement-wrapper" role="region" onmouseenter={() => handleHover(1)}>
        <BalanceSheet hovered={hoverStates[1]}/>
        <Popover.Root>
            <Popover.Trigger>Show Assumptions</Popover.Trigger>
            <Popover.Content>
                <BalShAssumptions/>
            </Popover.Content>
        </Popover.Root>
    </div>
    <div class="statement-wrapper" role="region" onmouseenter={() => handleHover(2)}>
        <CashFlowStatement hovered={hoverStates[2]}/>
    </div>
</div>

<style>
    .root {
        display: flex;
        gap: 1rem;
        width: 100%;
    }

    .statement-wrapper {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 1rem;
        flex: 1;
    }

    /* .statement-wrapper:hover {

    } */
</style>