var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
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
        isLoading: false
      })
    },function(errorMessage){
      alert(errorMessage);
      that.setState(isLoading: false)
    });
  },
  render: function() {
    var {isLoading, temp, location, description, icon} = this.state;
    function renderMessage() {
      if(isLoading) {
        return <div className="weather-loading">Fetching weather...</div>
      }else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} description={description} icon={icon}></WeatherMessage>
      }
    }
    return (
      <div className="weather-card">
        <div className="weather-message">
          {renderMessage()}
        </div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
      </div>
    );
  }
});

module.exports = Weather;
