const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fe265b6905ab799d953a368a0ea7dc97/' + latitude + ',' + longitude + '?units=uk2'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.')
        } else if (body.error) {
            callback(body.error)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out with wind gusting to ${body.currently.windGust} mph from a speed of ${body.currently.windSpeed} mph. The daily temperature high is ${body.daily.data[0].temperatureMax} degrees. There is a ${body.currently.precipProbability}% chance of rain.`)
        }

    })
}

module.exports = forecast