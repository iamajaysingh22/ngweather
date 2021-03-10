const request = require("request");
const chalk = require("chalk");

function forecast(latitude, longitude, callback) {
  const uri = `http://api.weatherstack.com/current?access_key=f0sgsg56778gjjjt55&query=${latitude},${longitude}`;
  request({ uri, json: true }, function (error, response) {
    if (error) {
      callback(chalk.red("Unable to connect with Weather API."), undefined);
    } else if (response.body.success) {
      callback(chalk.greenBright(response.body.error.info), undefined);
      /*  
   response
   {
        success: false,
        error: {
          code: 601,
          type: 'missing_query',
          info: 'Please specify a valid location identifier using the query parameter.'
        }
      } */
    } else {
      callback(
        undefined,
        chalk.cyan(
          `In ${response.body.location.name}, ${response.body.location.region} ${response.body.location.country} Currently outside temperature ${response.body.current.temperature} degree and Wind speed ${response.body.current.wind_speed}`
        )
      );
    }
  });
}

module.exports = forecast;

// const url =
//   "http://api.weatherstack.com/current?access_key=f0f2506cdcf4fb6325201aa1366a7256&query=";
// request({ uri: url, json: true }, function (error, response) {
//   //console.log(response.body);
//   if (error) {
//     //console.log(chalk.red("Unable to connect with Weather API."));
//   } else if (!response.body.success) {
//     //console.log(chalk.greenBright(response.body.error.info));
//   } else {
//     /* console.log(
//       chalk.cyan(
//         `In ${response.body.location.name} Currently outside temperature ${response.body.current.temperature} degree and Wind speed ${response.body.current.wind_speed}`
//       )
//     ); */
//   }
// });
