import React from 'react';

const SeasonDisplay = (props) => {
    return (
        <div className="ui container">
            <div>Latitude: {props.latitude}</div>
            <div>Longitude: {props.longitude}</div>
        </div>
    );
};

export default SeasonDisplay;