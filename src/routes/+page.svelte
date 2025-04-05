 <script lang="ts">
    import IncomeStatement from "./income.svelte";
    import BalanceSheet from "./balance_sheet.svelte";
    import CashflowStatement from "./cash_flow.svelte";
    import Assumptions from "./assumptions.svelte";
    import SupportingSchedules from "./supporting_schedules.svelte";
    import Revolver from "./revolver.svelte";

    import { Button } from 'fuchs';

</script>
<h1>3 Statement Model</h1>

<Button>Click</Button>


<div class="first-row">
    <Assumptions></Assumptions>

</div>
<div class="second-row">
    <div class="panel">
        <IncomeStatement></IncomeStatement>
    </div>
    <div class="panel">
        <BalanceSheet></BalanceSheet>
    </div>
    <div class="panel">
        <CashflowStatement></CashflowStatement>
    </div>
</div>
<div class="third-row">
    <div class="panel">
        <SupportingSchedules></SupportingSchedules>
    </div>
    <div class="panel">
        <Revolver></Revolver>
    </div>
</div>

<style>
    /* .first-row {
        padding: 1rem;
    }
    .second-row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
        padding: 1rem;
    }

    .third-row {
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        gap: 1rem;
    }

    .panel {
        flex: 1;
        min-width: 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 1rem;
    } */
</style> 
