const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const conversionEl = document.getElementById("conversion");
const arrowEl = document.getElementById("arrow");
const lastUpdateEl = document.getElementById("lastUpdate");
const amountInput = document.getElementById("amount");
const calcBtn = document.getElementById("calcBtn");
const calcResultEl = document.getElementById("calc-result");
const liveRate = document.getElementById("live-rate")
let previousRate = null;

async function fetchRate() {
  const from = fromSelect.value;
  const to = toSelect.value;

  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`
    );
    //   console.log(res);
    const data = await res.json();
    console.log(data);
    const rate = parseFloat(data.rates[to]).toFixed(4);
    updateLiveRate(rate, from, to)
      liveRate.style.backgroundColor = "rgb(209,209,209)";
      
      conversionEl.style.color = "black";
      arrowEl.textContent = "➡️";
  } catch (e) {
    //console.log(e);
    conversionEl.textContent = `Error`;
    arrowEl.textContent = "⚠️";
    liveRate.style.backgroundColor = "rgba(241, 112, 112, 1)";
    conversionEl.style.color = "rgba(134, 26, 26, 1)";
    conversionEl.style.backgroundColor = "rgba(241, 112, 112, 1)";
  }
}

function updateLiveRate(rate, from, to){
    const newRate = parseFloat(rate);

    if(previousRate !== null){
        if(newRate > previousRate)
        {
            conversionEl.style.backgroundColor = "rgb(124, 220, 140)";
            conversionEl.style.color = "rgb(3,68,0)";
            arrowEl.textContent = "⬆️";
        }
      else if (newRate < previousRate) {
      conversionEl.style.backgroundColor = "rgb(220,139,124)";
      conversionEl.style.color = "rgb(68,5,0)";
      arrowEl.textContent = "⬇️";
    } else {
      conversionEl.style.backgroundColor = "rgb(209,209,209)";
      conversionEl.style.color = "black";
      arrowEl.textContent = "➡️";
    }
    }else{
       
      conversionEl.style.backgroundColor = "rgb(209,209,209)";
      conversionEl.style.color = "black";
      arrowEl.textContent = "➡️";
    
    }
    
  conversionEl.textContent = `1 ${from} = ${newRate} ${to}`;
  previousRate = newRate;

  const dtUTC = new Date().toISOString().slice(11,19);
  lastUpdateEl.textContent = dtUTC + " UTC";
}

calcBtn.addEventListener("click", async () => {
  const amount = parseFloat(amountInput.value) || 0;
  const from = fromSelect.value;
  const to = toSelect.value;

  try {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${1}&from=${from}&to=${to}`);
    const data = await res.json();
    const result = parseFloat(data.rates[to]).toFixed(2);
    calcResultEl.textContent = `${amount} ${from} = ${(result * amount).toFixed(2)} ${to}`;
  } catch (err) {
    console.error(err);
    calcResultEl.textContent = "Error calculating conversion!";
  }
});

fetchRate();
setInterval(fetchRate, 60000);
fromSelect.addEventListener("change", ()=>{fetchRate(); previousRate=null});
toSelect.addEventListener("change", ()=>{fetchRate(); previousRate=null});

