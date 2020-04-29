//const country_url = 'https://free.currencyconverterapi.com/api/v5/countries';Get list of countries
//const rate_url = 'https://free.currencyconverterapi.com/api/v5/convert?q=';USD_PHP,PHP_USD';
//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=5c3d2e9b02dbde708064

const country_url = 'https://free.currconv.com/api/v7/countries?apiKey=';
const rate_url = 'https://free.currconv.com/api/v7/convert?q=';
const query_params = '&compact=ultra&apiKey=';
const api_key = '5c3d2e9b02dbde708064';

//let index = 0;
let from_curr = document.getElementById('from_curr');//Get the 'From' currency select element
let to_curr = document.getElementById('to_curr');//Get the 'To' currency select element
fetch(country_url+api_key)
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


 function doConversion() {
    let in_amount = document.getElementById('in_amount');
    let out_amount = document.getElementById('out_amount');
    let from_curr = document.getElementById('from_curr');
    let to_curr = document.getElementById('to_curr');
    query = from_curr.value+'_'+to_curr.value; 
    let url = rate_url+query+query_params+api_key;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            let rates = data.results;
            let ex_rate = {rates}[query];;
            /*
            for(let r in rates){
                ex_rate.push(rates[r].val);//Store exchange rate pairs
            }
            */
            console.log(data);
            console.log(ex_rate);
            console.log(in_amount.value);
            console.log(ex_rate*in_amount.value);
            url = rate_url;
            out_amount.value = in_amount.value * ex_rate[0];
        });
}
