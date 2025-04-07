 <script lang="ts">
    import Income from "./components/income.svelte";
    import BalanceSheet from "./components/balance_sheet.svelte";
    import CashflowStatement from "./components/cash_flow.svelte";
    import IncStAssumptions from "./components/incStAssumptions.svelte";
    import BalShAssumptions from "./components/balShAssumptions.svelte";
    import SupportingSchedules from "./components/supporting_schedules.svelte";
    import Revolver from "./components/revolver.svelte";


    import { Button } from 'fuchs';


</script>



<div class="master">
    <div class="row">
        <IncStAssumptions/>
        <Income/>
    </div>
    <div class="row">
        <!-- <BalShAssumptions/>
        <BalanceSheet/> -->
    </div>

    <!-- <BalShAssumptions/> -->


</div>

<style>
    .row {
        display: flex;
        gap: rem;
        width: 100%;
    }
</style>