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

 * With the results from this request, inside "content", 
 * list every maintainer and each package name that they maintain,
 * return an array with the following shape:
[
    ...
    {
        username: "a-username",
        packageNames: ["a-package-name", "another-package"]
    }
    ...
]
 * NOTE: the parent array and each "packageNames" array should 
 * be in alphabetical order.
 */

const fetchData = require('../index');

module.exports = async function organiseMaintainers () {
  // TODO
  //declare empty array which will hold the final result
  const maintainers = [];
  //retrieve data from api using fetchData function
  const data = await fetchData();
  //extract all maintainers, remove duplicates and sort alphabetically
  const allMaintainers = [... new Set(data.map(el => el.package.maintainers).flat().map(el => el.username))].sort();
  //for each maintainer check what packages they appear in
  allMaintainers.forEach(element => {
    //create an obj on each iteration with the required data
    const obj = {
      username: element,
      packageNames: []
    }
    data.forEach(el => {
      for (item of el.package.maintainers) {
        if (item.username === element) obj.packageNames.push(el.package.name);
      }
    }
    )
    //sort packageNames alphabetically
    obj.packageNames.sort();
    //push final obj to maintainers array
    maintainers.push(obj);
  })
  return maintainers
};

