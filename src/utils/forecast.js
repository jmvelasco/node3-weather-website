const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/85ca5b8d89315d8d8062eece54479bda/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast