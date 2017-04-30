var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      icon: "",
      searchPrompt: true
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getData(location).then(function(data){
      that.setState({
        location: location,
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        searchPrompt: false,
        isLoading: false
      })
    },function(errorMessage){
      alert(errorMessage);
      that.setState(isLoading: false)
    });
  },
  render: function() {
    var {isLoading, temp, location, description, icon, searchPrompt} = this.state;
    return (
      <div className="weather-card">
        <div className="weather-message">
          <WeatherMessage temp={temp} location={location} description={description} icon={icon} isLoading={isLoading} searchPrompt={searchPrompt}></WeatherMessage>
        </div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
      </div>
    );
  }
});

module.exports = Weather;
