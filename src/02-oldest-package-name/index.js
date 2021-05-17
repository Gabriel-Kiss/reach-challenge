/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */

const fetchData = require('../index')

module.exports = async function oldestPackageName () {
  //get data from api call using fetchData function
  const data = await fetchData();
  //sort packages by date in ascending order from oldest date to most recent  
  const sortedByDate = data.sort((a, b) => new Date(a.package.date) - new Date(b.package.date));
  //retrieve the name of the first element in the array 
  const name = sortedByDate[0].package.name;
  //return name 
  return name
};

