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
    debugger;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    },function(errorMessage){
      alert(errorMessage);
      that.setState(isLoading: false)
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;
    function renderMessage() {
      if(isLoading) {
        return <div className="weather-loading">Fetching weather...</div>
      }else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>
      }
    }
    return (
      <div className="weather-card">
        <h2>Get the Weather</h2>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
