const country_url = 'https://free.currencyconverterapi.com/api/v5/countries';//Get list of countries
const rate_url = 'https://free.currencyconverterapi.com/api/v5/convert?q=';//USD_PHP,PHP_USD';

//let index = 0;
let from_curr = document.getElementById('from_curr');//Get the 'From' currency select element
let to_curr = document.getElementById('to_curr');//Get the 'To' currency select element
fetch(country_url)
    .then(response => response.json())
    .then((data) => {
        let countries = data.results;
        for (let country in countries) {
            let currName = countries[country].currencyName;
            let currId = countries[country].currencyId;
            let option = document.createElement('option');
            option.value = currId;//++index;
            option.innerHTML = currName;
            from_curr.appendChild(option);
        }
        for (let country in countries) {
            let currName = countries[country].currencyName;
            let currId = countries[country].currencyId;
            let option = document.createElement('option');
            option.value = currId;//++index;
            option.innerHTML = currName;
            to_curr.appendChild(option);
        }
});


 doConversion() {
    let in_amount = document.getElementById('in_amount');
    let out_amount = document.getElementById('out_amount');
    let from_curr = document.getElementById('from_curr');
    let to_curr = document.getElementById('to_curr');
    query = from_curr.value+'_'+to_curr.value+','+to_curr.value+'_'+from_curr.value;
    let url = rate_url+query;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            let rates = data.results;
            let ex_rate = [];
            for(let r in rates){
                ex_rate.push(rates[r].val);//Store exchange rate pairs
            }
            console.log(ex_rate[0]);
            console.log(in_amount.value);
            console.log(ex_rate[0]*in_amount.value);
            url = rate_url;
            out_amount.value = in_amount.value * ex_rate[0];
        });
}
