import { fade, fly, slide } from 'svelte/transition';


export function _sumColumns(...rows:number[][]):number[] {

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

export function sumColumns(data: number[][]): number[] {
    console.log(data)
    if (data.length === 0) return [];
    
    let numCols = data[0].length;
    for (let row = 1; row < data.length; row++) {
      if (data.length > numCols) {
        numCols = data.length
      }
    }
    const sums: number[] = new Array(numCols).fill(0);
    
    for (let row = 0; row < data.length; row++) {
      while (data[row].length < numCols) {
        data[row] = [0].concat(data[row])
        console.log("beep")
      }
      
      for (let col = 0; col < numCols; col++) {
        sums[col] += data[row][col];
      }
    }
    
    return sums;
}
export function formatNumber(value: number, decimals: number = 0): string {
    if (value === null || value === undefined) return '';
    
    // Format as currency
    const formatted = value.toFixed(decimals);
    
    // Add commas for thousands separator
    const parts = formatted.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Add color formatting indicator (could be used with CSS classes)
    return value >= 0 ? parts.join('.') : ('(' + parts.join('.') + ')').replace('-','');
}

const tableAnimationDuration = 100;
export const tableAnimation = (node: HTMLElement, i: number) => ({
    duration: tableAnimationDuration,
    delay: tableAnimationDuration * (i - 1),
    css: (t: number) => `
        position: relative;
        left: ${-100 + (100 * t)}%;
        opacity: ${t};
    `
});