var React = require('react');

var Icon = React.createClass({
  render: function() {
    var {temp, location, description, icon, isLoading} = this.props;
    const ICON_PREFIX = "wi "
    function renderVisuals() {
      var iconCode;
      var imgSrc;
      if (icon === "") {
        return <div><div className="search-dialogue"><i className="fa fa-search"></i>Search for weather in any city</div><img src="/img/search.png"/></div>
      }
      if (icon === "01d"){
        iconCode = "wi-day-sunny";
        imgSrc = '/img/sunny.png';
      }
      if (icon === "01n"){
        iconCode = "wi-night-clear";
        imgSrc = '/img/sunny.png';
      }
      if (icon === "02d"){
        iconCode = "wi-day-cloudy"
        imgSrc = '/img/scattered-cloud.png';
      }
      if (icon === "02n"){
        iconCode = "wi-night-alt-cloudy"
        imgSrc = '/img/scattered-cloud.png';
      }
      if (icon === "03d" || icon === "03n"){
        iconCode = "wi-cloud"
        imgSrc = '/img/scattered-cloud.png';
      }
      if ( icon === "04d" || icon === "04n" ) {
        iconCode = "wi-cloudy"
        imgSrc = 'img/broken-clouds.png'
      }
      if ( icon === "09d" || icon === "09n" ) {
        iconCode = "wi-rain-mix"
        imgSrc="/img/rain.png"
      }
      if ( icon === "10d") {
        iconCode = "wi-day-rain-mix"
        imgSrc="/img/rain.png"
      }
      if ( icon === "10n") {
        iconCode = "wi-night-rain-mix"
        imgSrc="/img/rain.png"
      }
      if ( icon === "11d" || icon === "11n" ) {
        iconCode = "wi-storm-showers"
      }
      if ( icon === "13d" || icon === "13n" ) {
        iconCode = "wi-snow"
        imgSrc = "/img/light-snow.png"
      }
      if ( icon === "50d" || icon === "50n" ) {
        iconCode = "wi-fog"
      }
      var iconClassName = `${ICON_PREFIX}${iconCode}`
      return <div><i className={iconClassName}></i> <img src={imgSrc}/></div>
    }


    return (
      <div>
        {setVisuals()}
      </div>
    );
  }
});

module.exports = Icon;
