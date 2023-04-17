import inquirer from 'inquirer';
async function currencyConverter() {
    let currency = await inquirer.prompt([
        {
            name: "userAmount",
            type: 'number',
            message: 'Enter Amount',
        },
        {
            name: "selectCrrency",
            type: 'list',
            message: 'Select Currency',
            choices: ['USD', 'PKR', 'EURO', "UAE Dhiram", "Riyal"]
        },
        {
            name: "convertCurrency",
            type: 'list',
            message: 'Convert into',
            choices: ['USD', 'PKR', 'EURO', "UAE Dhiram", "Riyal"]
        },
    ]);
    // if user selected PKR  
    if (currency.selectCrrency == "PKR") {
        //   convert into USD
        if (currency.convertCurrency == "USD") {
            console.log((currency.userAmount / 283.00).toFixed(4));
        }
        //   convert  into EURO
        else if (currency.convertCurrency == "EURO") {
            console.log((currency.userAmount / 307.35).toFixed(4));
        }
        //   convert  into Dhiram
        else if (currency.convertCurrency == "UAE Dhiram") {
            console.log((currency.userAmount / 76.17).toFixed(4));
        }
        //   convert into Riyal
        else if (currency.convertCurrency == "Riyal") {
            console.log((currency.userAmount / 76.82).toFixed(4));
        }
        else {
            console.log(currency.userAmount);
        }
    }
    // or user selected USD  
    else if (currency.selectCrrency == "USD") {
        //   convert into PKR
        if (currency.convertCurrency == "PKR") {
            console.log((currency.userAmount * 283.00).toFixed(4));
        }
        //   convert  into EURO
        else if (currency.convertCurrency == "EURO") {
            console.log((currency.userAmount / 1.09).toFixed(4));
        }
        //   convert  into Dhiram
        else if (currency.convertCurrency == "UAE Dhiram") {
            console.log((currency.userAmount * 3.67).toFixed(4));
        }
        //   convert into Riyal
        else if (currency.convertCurrency == "Riyal") {
            console.log((currency.userAmount * 3.64).toFixed(4));
        }
        else {
            console.log(currency.userAmount);
        }
    }
    // or user selected Euro  
    else if (currency.selectCrrency == "EURO") {
        //   convert into PKR
        if (currency.convertCurrency == "PKR") {
            console.log((currency.userAmount * 310.89).toFixed(4));
        }
        //   convert  into EURO
        else if (currency.convertCurrency == "USD") {
            console.log((currency.userAmount * 1.09).toFixed(4));
        }
        //   convert  into Dhiram
        else if (currency.convertCurrency == "UAE Dhiram") {
            console.log((currency.userAmount * 4.01).toFixed(4));
        }
        //   convert into Riyal
        else if (currency.convertCurrency == "Riyal") {
            console.log((currency.userAmount * 3.98).toFixed(4));
        }
        else {
            console.log(currency.userAmount);
        }
    }
    // or user selected Dhiram  
    else if (currency.selectCrrency == "UAE Dhiram") {
        //   convert into PKR
        if (currency.convertCurrency == "PKR") {
            console.log((currency.userAmount * 77.47).toFixed(4));
        }
        //   convert  into EURO
        else if (currency.convertCurrency == "USD") {
            console.log((currency.userAmount / 3.67).toFixed(4));
        }
        //   convert  into Dhiram
        else if (currency.convertCurrency == "EURO") {
            console.log((currency.userAmount / 4.01).toFixed(4));
        }
        //   convert into Riyal
        else if (currency.convertCurrency == "Riyal") {
            console.log((currency.userAmount * 0.99).toFixed(4));
        }
        else {
            console.log(currency.userAmount);
        }
    }
    else {
        //   convert into PKR
        if (currency.convertCurrency == "PKR") {
            console.log((currency.userAmount * 78.15).toFixed(4));
        }
        //   convert  into EURO
        else if (currency.convertCurrency == "USD") {
            console.log((currency.userAmount / 3.64).toFixed(4));
        }
        //   convert  into Dhiram
        else if (currency.convertCurrency == "EURO") {
            console.log((currency.userAmount / 3.98).toFixed(4));
        }
        //   convert into Riyal
        else if (currency.convertCurrency == "UAE Dhiram") {
            console.log((currency.userAmount / 1.00).toFixed(4));
        }
        else {
            console.log(currency.userAmount);
        }
    }
}
currencyConverter();
