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

const getRandomNumber = () =>Math.floor(Math.random() * 1000)

const getUrl1 = () => 'https://rn-app-links.onrender.com/apple-app-site-association';
const getUrl2 = (id) => `https://shopping-app-be.onrender.com/products/${id}`;

const cron = () => {

    
    let counter =0;
    
    Promise.all([
        // fetchData(getUrl1()),
        fetchData(getUrl2 (getRandomNumber()) )])
        .then(data => console.log(util.inspect(data, {showHidden: false, depth: null, colors: true}))
    )
        .catch(error => console.error(util.inspect(error, {showHidden: false, depth: null, colors: true}))
    );
    
    setInterval(() => {
        console.log("counter", counter)


        
        counter++;
        Promise.all([
            // fetchData(getUrl1()),
            
            fetchData(getUrl2 (getRandomNumber()) )])
        .then(data => console.log(util.inspect(data, {showHidden: false, depth: null, colors: true}))
    )
        .catch(error => console.error(util.inspect(error, {showHidden: false, depth: null, colors: true}))
    );
    
    }, 1000*60*14.5);// Render spins down a Free web service that goes 15 minutes without receiving inbound traffic.
}



module.exports = {cron}

