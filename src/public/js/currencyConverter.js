// make function exportable so that it can be used by other areas of the code
// this function enables currency conversion between any two available country rates
// Adding this algorithm to the solution ensures that the service does not need to make an API calls to get the 'from' rate when a new currency is selected
export function convertCurrency(amount, fromRate, toRate) {
    // defensive clause to ensure that a null value is considered as 0
    if (!amount) {
        return 0;
    }

    // check if the from currency selected by the user is US Dollars
    if (fromRate === 'USD') {
        // multiply the amount by the to currency
        return amount * toRate;
    // if the to currency selected by the user is US Dollars
    } else if (toRate === 'USD') {
        // divide the amount by the from currency
        return amount / fromRate;
    // else neither the from or to currency is US Dollars
    } else {
        // first workout how much it is in US Dollar
        const amountInUSD = amount / fromRate;
        // then multiple to the new currencies rate from US Dollar
        return amountInUSD * toRate;
    }
}