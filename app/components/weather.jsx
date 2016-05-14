var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    
    handleNewCity: function(city) {
        var that = this;
        
        this.setState({isLoading: true});
        
        OpenWeatherMap.getTemp(city).then(function(temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false
            });
        }, function(errMsg) {
            that.setState({
                city: null,
                temp: null,
                isLoading: false
            });
            alert(errMsg)
        });
    },
    
    render: function() {
        var {isLoading, temp, city} = this.state;
        var that = this;
        
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather ...</h3>
            } else if (temp && city) {
                return <WeatherInfo city={city} temp={temp}/>;
            }
        }
        
        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onNewCity={this.handleNewCity}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;