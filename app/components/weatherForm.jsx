var React = require('react');

var WeatherForm = React.createClass({
    onButtonClick: function(e) {
        e.preventDefault();
        
        var city = this.refs.city.value;
        if (city.length > 0)
            this.refs.city.value = '';
        this.props.onNewCity(city || '');
    },
    
    render: function() {
        return (
            <form onSubmit={this.onButtonClick}>
                <input type="search" ref="city" placeholder="Search weather by city" />
                <button className="button expanded">Get Weather</button>
            </form>
        );
    }
});
    
module.exports = WeatherForm;