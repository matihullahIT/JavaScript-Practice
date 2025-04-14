const apikey = "211397f6198d679cf890fc57";

const GetExchangeRates = () => {
    const fromselect = document.getElementById("from");
    const toselect = document.getElementById("toselect");
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            fromselect.innerHTML = `
            <select id="fromCurrency" class="border border-gray-300 rounded p-2 mb-4" onchange="console.log(this.value)">
                ${Object.entries(data.conversion_rates)
                    .map(([key]) => `<option value="${key}">${key}</option>`)
                    .join("")}
            </select>
            `;
            toselect.innerHTML=`
            <span>To</span>
            <select id="toCurrency" class="border border-gray-300 rounded p-2 mb-4">
               ${Object.entries(data.conversion_rates)
                    .map(([key]) => `<option value="${key}">${key}</option>`)
                    .join("")}
            </select>
            `
        }
    };

    try {
        xhr.open("GET", `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`);
        xhr.send();
        // console.log("Exchange triggered");
    } catch (err) {
        console.log(err);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    GetExchangeRates();
});

function handleExchange() {
    const fromAmount = document.getElementById("fromAmount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const toAmount = document.getElementById("toAmount");
    const result = document.getElementById("result");

    if (!fromAmount || isNaN(fromAmount)) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            const res_data = data;
            result.innerHTML = `
            <h1>Currency Conversion</h1>
            <h2>Base Currency: 1 ${res_data.base_code} = ${res_data.conversion_rate} ${res_data.target_code}</h2>
            <span>From: ${res_data.base_code}</span>
            <span>To: ${res_data.target_code}</span>
            <span>Result: ${res_data.conversion_result}</span>
            `;
            toAmount.value = `${res_data.conversion_result}`;
            // console.log(res_data);
        }
    };

    try {
        xhr.open(
            "GET",
            `https://v6.exchangerate-api.com/v6/${apikey}/pair/${fromCurrency}/${toCurrency}/${fromAmount}`
        );
        xhr.send();
    } catch (err) {
        console.log(err);
    }
}