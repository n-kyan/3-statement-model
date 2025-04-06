<script lang="ts">
    import { getAssumptions } from "$lib/true-model.svelte";
    import { getFixedAssets } from "$lib/true-model.svelte";

    let assumptions = getAssumptions();
    let fixedAssets = getFixedAssets();
    
</script>

<div class="container">
    <h3>Supporting Schedule</h3>
    <table>
        <thead>
            <tr>
                <th>Fixed Assets Schedule</th>
            </tr>
            <tr>
                <th>Figures in USD millions</th>
                <th></th> <!-- gap -->
                <th>current year</th>
                <th>+1 year</th>
                <th>+1 year</th>
                <th>+1 year</th>
                <th>+1 year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Capital Expenditure</td>
                <td></td> <!-- gap -->
                <td>
                    <input bind:value={assumptions.fixedAsset.capEx[0]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.fixedAsset.capEx[1]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.fixedAsset.capEx[2]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.fixedAsset.capEx[3]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.fixedAsset.capEx[4]} type="number">
                </td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr> 
            <tr>
                <td>Existing Assets Useful Life (years)</td> <!-- for assets purchased before forecast period-->
                <td>
                    <input bind:value={assumptions.fixedAsset.existingAssetUsefulLife} type="number">
                </td>
            </tr>
            <tr>
                <td>New Assets Useful Life (years)</td>  <!-- for assets purchased during forecast period-->
                <td>
                    <input bind:value={assumptions.fixedAsset.newAssetUsefulLife} type="nubmer">
                </td>
            </tr>
            <tr>
                <td>PPE 2023 EOP</td> <!-- TODO: from balance sheet-->
                <td>{assumptions.balanceSheet.ppeFromPreviousYear}</td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr> 
            <tr>
                <td></td>
                <td>**CapEx**</td>
                <td>current year</td>
                <td>+1 year</td>
                <td>+1 year</td>
                <td>+1 year</td>
                <td>+1 year</td>
            </tr>
            <tr>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[0]}</td>
                <td>{assumptions.fixedAsset.capEx[0] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[0] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[0] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[0] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[0] / assumptions.fixedAsset.newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[1]}</td>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[1] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[1] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[1] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[1] / assumptions.fixedAsset.newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[2]}</td>
                <td></td>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[2] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[2] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[2] / assumptions.fixedAsset.newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[3]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[3] / assumptions.fixedAsset.newAssetUsefulLife}</td>
                <td>{assumptions.fixedAsset.capEx[3] / assumptions.fixedAsset.newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[4]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[4] / assumptions.fixedAsset.newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr>
            <tr>
                <td>Existing Asset Depreciation</td>  <!-- TODO: PPE 2023 / existingAssetUsefulLife (stays constant)-->
                <td></td>
                <td>{fixedAssets.existingAssetDepreciation[0]}</td>
                <td>{fixedAssets.existingAssetDepreciation[1]}</td>
                <td>{fixedAssets.existingAssetDepreciation[2]}</td>
                <td>{fixedAssets.existingAssetDepreciation[3]}</td>
                <td>{fixedAssets.existingAssetDepreciation[4]}</td>
            </tr>
            <tr>
                <td>New Asset Depreciation</td> <!-- TODO: sum of above column -->
                <td></td> <!-- gap -->
                <td>{fixedAssets.newAssetDepreciation[0]}</td>
                <td>{fixedAssets.newAssetDepreciation[1]}</td>
                <td>{fixedAssets.newAssetDepreciation[2]}</td>
                <td>{fixedAssets.newAssetDepreciation[3]}</td>
                <td>{fixedAssets.newAssetDepreciation[4]}</td>
            </tr>
            <tr>
                <td>**Total Depreciation**</td> <!-- TODO: sum of above -->
                <td></td>
                <td>{fixedAssets.newAssetDepreciation[0] + fixedAssets.existingAssetDepreciation[0]}</td>
                <td>{fixedAssets.newAssetDepreciation[1] + fixedAssets.existingAssetDepreciation[1]}</td>
                <td>{fixedAssets.newAssetDepreciation[2] + fixedAssets.existingAssetDepreciation[2]}</td>
                <td>{fixedAssets.newAssetDepreciation[3] + fixedAssets.existingAssetDepreciation[3]}</td>
                <td>{fixedAssets.newAssetDepreciation[4] + fixedAssets.existingAssetDepreciation[4]}</td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr> 
            <tr>
                <td>Beginning PPE</td>
                <td></td>
                <td>{fixedAssets.beginningPPE[0]}</td>
                <td>{fixedAssets.beginningPPE[1]}</td>
                <td>{fixedAssets.beginningPPE[2]}</td>
                <td>{fixedAssets.beginningPPE[3]}</td>
                <td>{fixedAssets.beginningPPE[4]}</td>
            </tr>
            <tr>
                <td>CapEx</td>
                <td></td>
                <td>{assumptions.fixedAsset.capEx[0]}</td>
                <td>{assumptions.fixedAsset.capEx[1]}</td>
                <td>{assumptions.fixedAsset.capEx[2]}</td>
                <td>{assumptions.fixedAsset.capEx[3]}</td>
                <td>{assumptions.fixedAsset.capEx[4]}</td>
            </tr>
            <tr>
                <td>Depreciation</td>
                <td></td>
                <td>{fixedAssets.totalDepreciation[0]}</td>
                <td>{fixedAssets.totalDepreciation[1]}</td>
                <td>{fixedAssets.totalDepreciation[2]}</td>
                <td>{fixedAssets.totalDepreciation[3]}</td>
                <td>{fixedAssets.totalDepreciation[4]}</td>
            </tr>
            <tr>
                <td>**Ending PPE**</td>
                <td></td>
                <td>{fixedAssets.endingPPE[0]}</td>
                <td>{fixedAssets.endingPPE[1]}</td>
                <td>{fixedAssets.endingPPE[2]}</td>
                <td>{fixedAssets.endingPPE[3]}</td>
                <td>{fixedAssets.endingPPE[4]}</td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr>
        </tbody>
    </table>
    <table>
        <thead>
            <tr>
                <th>Retained Earnings Schedule</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Beginning of Period RE</td>
            </tr>
            <tr>
                <td>Net Income</td>
            </tr>
            <tr>
                <td>Dividends</td>
            </tr>
            <tr>
                <td>**End of Period RE**</td>
            </tr>
        </tbody>
    </table>
</div>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 1rem; /* Add spacing between tables */
    }

    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }

    input {
        width: 100%;
        border: none;
        outline: none;
    }
</style>