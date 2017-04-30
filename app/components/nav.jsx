var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Weather</IndexLink>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/examples" activeClassName="active">Examples</Link>
      </nav>
    );
  }
})

module.exports = Nav;
