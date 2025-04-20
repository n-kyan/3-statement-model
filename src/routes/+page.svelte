 <script lang="ts">
    import Income from "./components/income.svelte";
    import BalanceSheet from "./components/balance_sheet.svelte";
    import CashflowStatement from "./components/cash_flow.svelte";
    import IncStAssumptions from "./components/incStAssumptions.svelte";
    import BalShAssumptions from "./components/balShAssumptions.svelte";
    import SupportingSchedules from "./components/supporting_schedules.svelte";
    import Revolver from "./components/revolver.svelte";


    import { Button } from 'fuchs';
	import CashFlow from "./components/cash_flow.svelte";


</script>



<div class="master">
    <div class="row">
        <div>
            <IncStAssumptions/>
        </div>
        <div>
            <Income/>
        </div>
    </div>
    <div class="row">
        <div>
            <SupportingSchedules/>
        </div>
    </div>
    <div class="row">
        <BalShAssumptions/>
        <BalanceSheet/>
    </div>
    <div class="row">
        <CashFlow/>
    </div>


</div>

<style>
    .row {
        display: flex;
        gap: 1rem;
        width: 100%;
    }
</style>