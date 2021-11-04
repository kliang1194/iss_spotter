// const {fetchMyIP} = require('./iss');
const {fetchCoordsByIP} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! IP:", ip);
// });

fetchCoordsByIP("99.230.1.246", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned coordinates:", coordinates);
});