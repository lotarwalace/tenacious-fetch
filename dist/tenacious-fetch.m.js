function t(t,r,n){return new Promise(function(o,i){!function t(r,n,u){var f=n.retryStatus;(0,n.fetcher)(r,n).then(function(c){if(f.includes(c.status))if(u>0){var a=e(n,--u);n.onRetry&&"function"==typeof n.onRetry&&n.onRetry({retriesLeft:u,retryDelay:a}),setTimeout(function(){return t(r,n,u)},a)}else i(c);else o(c)}).catch(function(o){if(u>0){var f=e(n,--u);n.onRetry&&"function"==typeof n.onRetry&&n.onRetry({retriesLeft:u,retryDelay:f}),setTimeout(function(){return t(r,n,u)},f)}else i(o)})}(r,n,t)})}function e(t,e){var r=t.retryDelay,n=t.factor,o=t.retries;return n&&"number"==typeof n&&Number.isInteger(n)?function(t,e){return Math.pow(t,e)}(n,o-e):r*(o-e)}var r=!1;try{r=window&&window.fetch}catch(t){}export default function(e,n){if(void 0===e&&(e=""),void 0===n&&(n={}),!(n=Object.assign({retries:1,retryDelay:1e3,retryStatus:[],fetcher:r,timeout:void 0},n)).fetcher||"function"!=typeof n.fetcher)throw new Error("tenacious-fetch: No fetch implementation found. Provide a valid fetch implementation via the fetcher configuration property.");"string"!=typeof n.retryStatus&&"number"!=typeof n.retryStatus||(n.retryStatus=[Number.parseInt(n.retryStatus)]);var o=n.timeout;return o&&Number.isInteger(o)?Promise.race([t(n.retries,e,n),new Promise(function(t,e){return setTimeout(function(){return e(new Error("tenacious-fetch: Request took longer than timeout of "+o+" ms."))},o)})]):t(n.retries,e,n)};
//# sourceMappingURL=tenacious-fetch.m.js.map
