const util = require('util')


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


const url1 = 'https://rn-app-links.onrender.com/apple-app-site-association';
const url2 = 'https://rn-app-links.onrender.com/.well-known/assetlinks.json';

let counter =0;

Promise.all([fetchData(url1), fetchData(url2)])
    .then(data => console.log(util.inspect(data, {showHidden: false, depth: null, colors: true}))
)
    .catch(error => console.error(util.inspect(error, {showHidden: false, depth: null, colors: true}))
);

setInterval(() => {
    console.log("counter", counter)
    
    counter++;
    Promise.all([fetchData(url1), fetchData(url2)])
    .then(data => console.log(util.inspect(data, {showHidden: false, depth: null, colors: true}))
)
    .catch(error => console.error(util.inspect(error, {showHidden: false, depth: null, colors: true}))
);

}, 180000);

