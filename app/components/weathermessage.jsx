var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location, description, icon} = this.props;
    const ICON_PREFIX = "wi "
    function renderIcon() {
      var iconCode;
      if( icon === "04n") {
        iconCode = "wi-night-cloudy"
      }else if (icon === "01d"){
        iconCode = "wi-day-sunny"
      }else if (icon === "10n") {
        iconCode="wi-night-alt-rain"
      }
      var iconName = `${ICON_PREFIX} ${iconCode}`
      return <i className={iconName}></i>
    }
    return (
      <div>
        <h1 className="weather-location">{location}</h1>
        <h2 className="weather-temp">{temp} {String.fromCharCode(176)} Celsius<br/>Cloud cover  {String.fromCharCode(8212)} {description}</h2>
        {renderIcon()}
      </div>
    );
  }
});

module.exports = WeatherMessage;
