// Format the price above to USD using the locale, style, and currency.
export let VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
// console.log(`The formated version of ${total} is ${VND.format(total)}`);
export let Datenow = new Intl.DateTimeFormat('en-VN', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
});
// const today = Date.now();
// Datenow.format(today)



