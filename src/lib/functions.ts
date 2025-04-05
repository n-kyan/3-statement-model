export function sumColumns(...rows:number[][]):number[] {

    const firstLength = rows[0].length;
    let allSameLength = true;
    let sums:number[] = new Array(firstLength).fill(0);
    let numRows = rows.length

    if (numRows < 2) {
        throw new Error('At least two rows are required for summation');
    }

    // Check all rows have same length
    for (let i = 1; i < rows.length; i++) {
        if (rows[i].length !== firstLength) {
            allSameLength = false;
            break;
        }
    }
    
    if (!allSameLength) {
        throw new Error('All rows must have the same length');
    }

    // Sum rows
    for (let i = 0; i < firstLength; i++) {
        for (let j = 0; j < numRows; j++) {
            sums[i] += rows[j][i];
        }
    }
    return sums;
}


export function formatNumber(value: number, decimals: number = 2): string {
    if (value === null || value === undefined) return '';
    
    // Format as currency
    const formatted = Math.abs(value).toFixed(decimals);
    
    // Add commas for thousands separator
    const parts = formatted.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Add color formatting indicator (could be used with CSS classes)
    return value >= 0 ? parts.join('.') : '(' + parts.join('.') + ')';
  }