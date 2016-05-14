var React = require('react');

var WeatherInfo = ({temp, city}) => {
    return (
        <h3>It is {temp} in {city}</h3>
    );
};
    
module.exports = WeatherInfo;