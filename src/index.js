const fetch = require('node-fetch');

const fetchData = () => {
    const URL = "http://ambush-api.inyourarea.co.uk/ambush/intercept";
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            "url": "https://api.npms.io/v2/search/suggestions?q=react",
            "method": "GET",
            "return_payload": true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.content)
        .catch((err) => console.error(err));
}


module.exports = fetchData;