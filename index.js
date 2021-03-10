const yargs = require("yargs");
const geocodes = require("./utils/geocodes");
const forecast = require("./utils/forecast");
/* node index search --location="delhi" */
yargs
  .command(
    "search",
    "To search weather forecast of the given location",
    (yarg) => {
      yarg.options("location", {
        type: "string",
        demandOption: true,
        description: "Location to find weather forecast",
      });
    },
    (argv) => {
      // geocodes function proiveds the latitude and longitude on given search string
      geocodes(
        argv.location,
        function (error, { latitude, longitude, location }) {
          if (error) {
            return console.log(error);
          } else {
            // forecast function will provide weather forecast data on given latitude and longitude
            forecast(latitude, longitude, function (error, response) {
              if (error) {
                return console.log(error);
              } else {
                console.log(response);
              }
            });
          }
        }
      );
    }
  )
  .help().argv;

//
// {
//     request: {
//       type: 'City',
//       query: 'New Delhi, India',
//       language: 'en',
//       unit: 'm'
//     },
//     location: {
//       name: 'New Delhi',
//       country: 'India',
//       region: 'Delhi',
//       lat: '28.600',
//       lon: '77.200',
//       timezone_id: 'Asia/Kolkata',
//       localtime: '2021-03-07 15:24',
//       localtime_epoch: 1615130640,
//       utc_offset: '5.50'
//     },
//     current: {
//       observation_time: '09:54 AM',
//       temperature: 33,
//       weather_code: 143,
//       weather_icons: [
//         'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png'
//       ],
//       wind_speed: 13,
//       wind_degree: 110,
//       wind_dir: 'ESE',
//       pressure: 1009,
//       precip: 0,
//       humidity: 32,
//       cloudcover: 0,
//       feelslike: 31,
//       uv_index: 9,
//       visibility: 5,
//       is_day: 'yes'
//     }
//   }

/* const urlmapbox =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoiaWFtYWpheXNpbmdoNCIsImEiOiJja2x5MG0zajEyNTYwMnhtcGtxeHh0eDV2In0.8ltoJhYVX_1Whi1YxwmMzA";

request({ uri: urlmapbox, json: true }, function (error, response) {
if(error){
console.log('Unable to connect to the mapbox Api. please try again later!')
}else if(response.body){
 
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
}else{
 
}
  
}); */
