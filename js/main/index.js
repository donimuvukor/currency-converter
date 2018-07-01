/*import loadScripts from '../utils/loadScripts';
import IndexController from './IndexController';

const polyfillsNeeded = [];

if (!('Promise' in self)) polyfillsNeeded.push('/js/polyfills/promise.js');

try {
  new URL('b', 'http://a');
}
catch (e) {
  polyfillsNeeded.push('/js/polyfills/url.js');
}

loadScripts(polyfillsNeeded, function() {
  new IndexController(document.querySelector('.main'));
});


/*
function doConversion() {
    let in_amount = document.getElementById("in_amount").value;
    let out_amount = document.getElementById("out_amount");
    let ex_rate = 100;
    out_amount.value = in_amount * ex_rate;
}

let from_curr;
let to_curr;
*/

/*
To Do: Import helperFunctions.js into indexController.js
To Do: Physically import Jake's idb-promised library - collect code from Emma
To Do: Cache pages of currency converter and serve them from cache if network request fails
To Do: Store 10 most recent conversion rate pairs in indexedDB, update 
*/