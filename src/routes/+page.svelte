 <script lang="ts">
    import IncomeStatement from "./income.svelte";
    import BalanceSheet from "./balance_sheet.svelte";
    import CashflowStatement from "./cash_flow.svelte";
    import IncStAssumptions from "./incStAssumptions.svelte";
    import BalShAssumptions from "./balShAssumptions.svelte";
    import SupportingSchedules from "./supporting_schedules.svelte";
    import Revolver from "./revolver.svelte";

    import IncomeCss from "./income-css.svelte";

    import { Button } from 'fuchs';

</script>



<div class="master">
    <div class="row">
        <IncStAssumptions/>
        <IncomeCss/>
    </div>
    <div class="row">
        <BalShAssumptions/>
        <BalanceSheet/>
    </div>

    <!-- <BalShAssumptions/> -->


</div>

<style>
    .row {
        display: flex;
        gap: 0rem;
        width: 100%;
    }
</style>