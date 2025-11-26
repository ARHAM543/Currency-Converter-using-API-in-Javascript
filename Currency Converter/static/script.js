// Load currency list from Frankfurter REST API
async function loadCurrencies() {
    let res = await fetch("https://api.frankfurter.app/currencies");
    let data = await res.json();

    let from = document.getElementById("from");
    let to = document.getElementById("to");

    for (let code in data) {
        from.innerHTML += `<option value="${code}">${code} — ${data[code]}</option>`;
        to.innerHTML += `<option value="${code}">${code} — ${data[code]}</option>`;
    }

    from.value = "USD";
    to.value = "INR";
}
loadCurrencies();

// Convert value
async function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (amount === "" || amount <= 0) {
        document.getElementById("result").innerHTML =
            "<span style='color:red'>Please enter a valid amount.</span>";
        return;
    }

    const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    );

    let data = await res.json();

    let rate = data.rates[to];

    document.getElementById("result").innerHTML =
        `${amount} ${from} = <br><b style="color:#0066ff; font-size:26px">${rate} ${to}</b>`;
}
