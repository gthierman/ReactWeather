var React = require('react');
var Loader = require('Loader');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location, description, icon, isLoading, searchPrompt} = this.props;
    function renderIcon() {
      var iconClass;
      var imgSrc;
      if (icon === "") {
        iconClass="fa fa-search"
        imgSrc="/img/search.png"
      }
      if (icon=== "01d"){
        iconClass = "wi wi-day-sunny";
        imgSrc = '/img/sunny.png';
      }
      if (icon === "01n"){
        iconClass = "wi wi-night-clear";
        imgSrc = '/img/sunny.png';
      }
      if (icon === "02d"){
        iconClass = "wi wi-day-cloudy"
        imgSrc = '/img/scattered-cloud.png';
      }
      if (icon === "02n"){
        iconClass = "wi wi-night-alt-cloudy"
        imgSrc = '/img/scattered-cloud.png';
      }
      if (icon === "03d" || icon === "03n"){
        iconClass = "wi wi-cloud"
        imgSrc = '/img/scattered-cloud.png';
      }
      if ( icon === "04d" || icon === "04n" ) {
        iconClass = "wi wi-cloudy"
        imgSrc = 'img/broken-clouds.png'
      }
      if ( icon === "09d" || icon === "09n" ) {
        iconClass = "wi wi-rain-mix"
        imgSrc="/img/rain.png"
      }
      if ( icon === "10d") {
        iconClass = "wi wi-day-rain-mix"
        imgSrc="/img/rain.png"
      }
      if ( icon === "10n") {
        iconClass = "wi-night-rain-mix"
        imgSrc="/img/rain.png"
      }
      if ( icon === "11d" || icon === "11n" ) {
        iconClass = "wi wi-storm-showers"
      }
      if ( icon === "13d" || icon === "13n" ) {
        iconClass = "wi wi-snow"
        imgSrc = "/img/light-snow.png"
      }
      if ( icon === "50d" || icon === "50n" ) {
        iconClass = "wi wi-fog"
        imgSrc = '/img/mist.png';
      }
      if (isLoading) {
        return <div><img src={imgSrc}/></div>
      } else if (!isLoading) {
        return <div><i className={iconClass}></i> <img src={imgSrc}/></div>
      }
    }

    function renderSearchtext() {
      if (searchPrompt && !isLoading) {
        return <div><div className="search-dialogue"><i className="fa fa-search"></i>Search for weather in any city</div></div>
      }
    }

    function renderTemp() {
      if(description && temp && !isLoading) {
        return <h2 className="weather-temp">{temp} {String.fromCharCode(176)} C<br/>{description}</h2>
      }
    }

    function renderLoader() {
      if (isLoading) {
        return <Loader></Loader>
      }
    }

    function renderLocation() {
      if (!isLoading) {
        return <h1 className="weather-location">{location}</h1>
      }
    }
    return (
      <div>
        {renderLoader()}
        {renderLocation()}
        {renderTemp()}
        {renderIcon()}
        {renderSearchtext()}
      </div>
    );
  }
});

module.exports = WeatherMessage;
