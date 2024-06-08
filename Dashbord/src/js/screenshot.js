const accounting = requre('accounting');
const harga = 1234567.89;
const hargaFormatted = accounting.formatMoney(harga, {
    synbol: 'Rp ',
    precision: 2,
    thousand: '.',
    decimal: ',',
});
console.log(hargaFormatted); // Output: Rp 1.234.567.89