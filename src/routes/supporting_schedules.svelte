<script lang="ts">
    import { assumptions, getFixedAssets } from "$lib/model.svelte";
    const fixedAssets = getFixedAssets();
    
    // Destructure needed values from model for easier access
    const { capEx, existingAssetUsefulLife, newAssetUsefulLife } = assumptions;
    const { depreciationMatrix, existingAssetDepreciation, newAssetDepreciation, totalDepreciation, ppeFromPreviousYear, beginningPPE, endingPPE } = fixedAssets;
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
                    <input bind:value={assumptions.capEx[0]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.capEx[1]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.capEx[2]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.capEx[3]} type="number">
                </td>
                <td>
                    <input bind:value={assumptions.capEx[4]} type="number">
                </td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr> 
            <tr>
                <td>Existing Assets Useful Life (years)</td> <!-- for assets purchased before forecast period-->
                <td>
                    <input bind:value={assumptions.existingAssetUsefulLife} type="number">
                </td>
            </tr>
            <tr>
                <td>New Assets Useful Life (years)</td>  <!-- for assets purchased during forecast period-->
                <td>
                    <input bind:value={assumptions.newAssetUsefulLife} type="nubmer">
                </td>
            </tr>
            <tr>
                <td>PPE 2023 EOP</td> <!-- TODO: from balance sheet-->
                <td>{ppeFromPreviousYear}</td>
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
                <td>{capEx[0]}</td>
                <td>{capEx[0] / newAssetUsefulLife}</td>
                <td>{capEx[0] / newAssetUsefulLife}</td>
                <td>{capEx[0] / newAssetUsefulLife}</td>
                <td>{capEx[0] / newAssetUsefulLife}</td>
                <td>{capEx[0] / newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{capEx[1]}</td>
                <td></td>
                <td>{capEx[1] / newAssetUsefulLife}</td>
                <td>{capEx[1] / newAssetUsefulLife}</td>
                <td>{capEx[1] / newAssetUsefulLife}</td>
                <td>{capEx[1] / newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{capEx[2]}</td>
                <td></td>
                <td></td>
                <td>{capEx[2] / newAssetUsefulLife}</td>
                <td>{capEx[2] / newAssetUsefulLife}</td>
                <td>{capEx[2] / newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{capEx[3]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{capEx[3] / newAssetUsefulLife}</td>
                <td>{capEx[3] / newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td>
                <td>{capEx[4]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{capEx[4] / newAssetUsefulLife}</td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr>
            <tr>
                <td>Existing Asset Depreciation</td>  <!-- TODO: PPE 2023 / existingAssetUsefulLife (stays constant)-->
                <td></td>
                <td>{existingAssetDepreciation[0]}</td>
                <td>{existingAssetDepreciation[1]}</td>
                <td>{existingAssetDepreciation[2]}</td>
                <td>{existingAssetDepreciation[3]}</td>
                <td>{existingAssetDepreciation[4]}</td>
            </tr>
            <tr>
                <td>New Asset Depreciation</td> <!-- TODO: sum of above column -->
                <td></td> <!-- gap -->
                <td>{newAssetDepreciation[0]}</td>
                <td>{newAssetDepreciation[1]}</td>
                <td>{newAssetDepreciation[2]}</td>
                <td>{newAssetDepreciation[3]}</td>
                <td>{newAssetDepreciation[4]}</td>
            </tr>
            <tr>
                <td>**Total Depreciation**</td> <!-- TODO: sum of above -->
                <td></td>
                <td>{newAssetDepreciation[0] + existingAssetDepreciation[0]}</td>
                <td>{newAssetDepreciation[1] + existingAssetDepreciation[1]}</td>
                <td>{newAssetDepreciation[2] + existingAssetDepreciation[2]}</td>
                <td>{newAssetDepreciation[3] + existingAssetDepreciation[3]}</td>
                <td>{newAssetDepreciation[4] + existingAssetDepreciation[4]}</td>
            </tr>
            <tr>
                <td></td> <!-- gap -->
            </tr> 
            <tr>
                <td>Beginning PPE</td>
                <td></td>
                <td>{beginningPPE[0]}</td>
                <td>{beginningPPE[1]}</td>
                <td>{beginningPPE[2]}</td>
                <td>{beginningPPE[3]}</td>
                <td>{beginningPPE[4]}</td>
            </tr>
            <tr>
                <td>CapEx</td>
                <td></td>
                <td>{capEx[0]}</td>
                <td>{capEx[1]}</td>
                <td>{capEx[2]}</td>
                <td>{capEx[3]}</td>
                <td>{capEx[4]}</td>
            </tr>
            <tr>
                <td>Depreciation</td>
                <td></td>
                <td>{totalDepreciation[0]}</td>
                <td>{totalDepreciation[1]}</td>
                <td>{totalDepreciation[2]}</td>
                <td>{totalDepreciation[3]}</td>
                <td>{totalDepreciation[4]}</td>
            </tr>
            <tr>
                <td>**Ending PPE**</td>
                <td></td>
                <td>{endingPPE[0]}</td>
                <td>{endingPPE[1]}</td>
                <td>{endingPPE[2]}</td>
                <td>{endingPPE[3]}</td>
                <td>{endingPPE[4]}</td>
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