# ngweather

It's the Command line tool provides weather forecasting based on geocodes.

# Statement

> Using this command-line tool, the User can see the weather forecast of a specific location.
> This app utilizing the two service to get geocode and weather forecast
>
> 1. geocoding service by mapbox.com, To get geocodes based on provided location.
> 2. forecast service by weatherstack.com, To get current weather forecast based on geocodes.


### There is a command to get deatils.

> node index search --location="delhi" --> To get weather forecast by providing location

### List of all dependencies with version used in this project

- "request": "^2.88.2" --> To make http/https request
- "chalk": "^4.1.0" --> Used to beautifying the console.log message.
- "yargs": "^12.0.0" --> Provides a set of features to make a command-line tool.
