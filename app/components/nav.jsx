var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div>
            <h2>Nav component</h2>
            <IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">Get weather</IndexLink>
            <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="About">About</Link>
            <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="Examples">Examples</Link>
        </div>
    );
};

module.exports = Nav;