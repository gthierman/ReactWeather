var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location, description, icon} = this.props;
    const ICON_PREFIX = "wi "
    const WEATHER_CONDITIONS = [
      {
        icon: "04n",
        iconClass: "wi-night-cloudy",
        image: "public/img/night-cloudy.png"
      },
      {
        icon: "01d",
        iconClass: "wi-day-sunny",
        image: "public/img/night-cloudy.png"
      }
    ]
    function renderIcon() {
      var iconCode;
      if (icon === "") {
        return <div className="search-dialogue"><i className="fa fa-search"></i>Search a city</div>
      }else if ( icon === "04n") {
        iconCode = "wi-night-cloudy"
      }else if (icon === "01d"){
        iconCode = "wi-day-sunny"
      }else if (icon === "10n") {
        iconCode="wi-night-alt-rain"
      }
      var iconName = `${ICON_PREFIX}${iconCode}`
      return <i className={iconName}></i>
    }
    function renderTemp() {
      if(description && temp) {
        return <h2 className="weather-temp">{temp} {String.fromCharCode(176)} Celsius<br/>Cloud cover  {String.fromCharCode(8212)} {description}</h2>
      }
    }
    return (
      <div>
        <h1 className="weather-location">{location}</h1>
        {renderTemp()}
        {renderIcon()}
      </div>
    );
  }
});

module.exports = WeatherMessage;
