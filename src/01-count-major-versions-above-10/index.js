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

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */
const fetchData = require('../index');

module.exports = async function countMajorVersionsAbove10 () {
  // TODO
  const data = await fetchData();
  const result = data.map(el => el.package.version)
    .filter(el => el.split('.')[0] * 1 > 10)
    .length
  return result;
};
