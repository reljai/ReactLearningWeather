var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    
    handleNewCity: function(city) {
        var that = this;
        
        this.setState({
            city: undefined,
            temp: undefined,
            isLoading: true,
            errorMessage: undefined
        });
        
        OpenWeatherMap.getTemp(city).then(function(data) {
            that.setState({
                city: data.name,
                temp: data.main.temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    
    componentDidMount: function() {
        var location = this.props.location.query.location;
        
        if (location && location.length > 0) {
            this.handleNewCity(location);
            window.location.hash = '#/';
        }
    },
    
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
        
        if (location && location.length > 0) {
            this.handleNewCity(location);
            window.location.hash = '#/';
        }
    },
    
    render: function() {
        var {errorMessage, isLoading, temp, city} = this.state;
        var that = this;
        
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather ...</h3>
            } else if (temp && city) {
                return <WeatherInfo city={city} temp={temp}/>;
            }
        }
        
        function renderError() {
            if (errorMessage) {
                return <ErrorModal message={errorMessage}/>
            }
        }
        
        var showError = typeof errorMessage === 'string';
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onNewCity={this.handleNewCity}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;