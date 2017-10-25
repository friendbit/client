const XMLHttpRequest = require('xhr2');

global.XMLHttpRequest = XMLHttpRequest;

import 'whatwg-fetch';
// 

console.log("ENV called");