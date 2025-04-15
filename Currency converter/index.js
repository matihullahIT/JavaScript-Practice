const apikey = "211397f6198d679cf890fc57";

document.addEventListener("DOMContentLoaded", function () {
    loadCurrencies();
});

 const loadCurrencies = async () => {    
    try {
        const  response= await fetch(`https://v6.exchangerate-api.com/v6/211397f6198d679cf890fc57/latest/USD`)
        const data= await response.json()
        console.log(response)
        const option=Object.keys(data.conversion_rates)
        .map((key) => `<option value="${key}">${key}</option>`)
        .join("");
        document.getElementById("from").innerHTML = option;
        document.getElementById("toselect").innerHTML = option;
    } catch (err) {
        console.log(err);
    }
};
async function handleExchange() {
    const fromAmount = document.getElementById("fromAmount").value;
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("toselect").value;
    const result =document.getElementById("result")
    // Removed unused 'toAmount' declaration
    if (!fromAmount || isNaN(fromAmount)) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }
    try {
        const response= await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/${fromCurrency}/${toCurrency}/${fromAmount}`)
        const data=  response.json()
        if (!response.ok) {
            throw new Error(`Error: ${data.error}`);
        }
        result.innerHTML = `
            <h1>Currency Conversion</h1>
            <h2>1 ${data.base_code} = ${data.conversion_rate} ${data.target_code}</h2>
            <span>From: ${data.base_code}</span><br/>
            <span>To: ${data.target_code}</span><br/>
            <span>Result: ${data.conversion_result}</span>
        `;

        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
