export function convertCurrency(amount, fromRate, toRate) {
    if (fromRate === 'USD') {
        return amount * toRate;
    } else if (toRate === 'USD') {
        return amount / fromRate;
    } else {
        const amountInUSD = amount / fromRate;
        return amountInUSD * toRate;
    }
}