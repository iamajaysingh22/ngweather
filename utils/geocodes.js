const request = require("request");
module.exports = function geocodes(location, callback) {
  const uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=V2I234rtyyv5555`;

  request({ uri, json: true }, function (error, response) {
    if (error) {
      callback(
        "Unable to connect to Location seveice, Please check the internet connection.",
        undefined
      );
    } else if (!response.body) {
      callback(
        "Unable to find location. Please try with another location",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};
