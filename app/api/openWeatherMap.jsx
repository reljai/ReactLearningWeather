var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4f3c88c3aec077267f4ed182d08134ba&units=imperial';

module.exports = {
    getTemp: function(city) {
        var encodedCity = encodeURIComponent(city);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;
        return axios.get(requestUrl).then(function(response) {
            console.log("response: ", response);
            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data;
            }
        }, function(response) {
            throw new Error(response.data.message);
        });
    }
};