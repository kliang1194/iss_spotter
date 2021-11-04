// const {fetchMyIP} = require('./iss');
// const {fetchCoordsByIP} = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! IP:", ip);
// });

// fetchCoordsByIP("99.230.1.246", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates);
// });

const location = { latitude: 43.6547, longitude: -79.3623 };

fetchISSFlyOverTimes(location, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned flyover times:", passTimes);
});
