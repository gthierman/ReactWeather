var axios = require('axios');

//f664eaaac513433eacc4e3022f1b0eca
const API_KEY = '&units=metric&appid=f664eaaac513433eacc4e3022f1b0eca';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';

module.exports = {
  getData: function(location) {
    var encodedLocation = encodeURIComponent(location)
    var requestURL = `${OPEN_WEATHER_MAP_URL}${encodedLocation}${API_KEY}`;
    console.log(requestURL);
    return axios.get(requestURL).then(function (res){
      if (res.data.cod & res.data.message) {
        throw new Error(res.data.message);
      }else{
        console.log(res.data);
        return res.data;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
