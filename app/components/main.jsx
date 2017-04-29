var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav></Nav>
        <h1>Hi</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
