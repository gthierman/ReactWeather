var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;
    return (
      <div className="weather-message">
        <h3>{location}</h3>
        {temp} {String.fromCharCode(176)} Celsius
      </div>
    );
  }
});

module.exports = WeatherMessage;
