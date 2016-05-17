var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        alert("e_notimpl");
    },
    render: function() {
        // class keyword conflicts with jsx class so need to use className for html
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">Get weather</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="About">About</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="Examples">Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;