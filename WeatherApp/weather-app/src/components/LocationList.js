import React, { Component } from 'react'
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';
import './styles.css';

// Another way
// debugger;
// let tmp = [];
// for (let index = 0; index < cities.length; index++) {
//     const element = cities[index];
//     tmp.push(<WeatherLocation key={index} city={element} />);
// }
// return tmp;

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }

    const strToComponents = cities => (
        cities.map(city =>
            (
                <WeatherLocation
                    key={city}
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)} />))
    );

    return (
        <div className='locationList'>
            {strToComponents(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;