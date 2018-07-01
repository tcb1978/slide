import React, { Component} from 'react';

export default class WeAreDigitalStrategy extends Component {
    render() {
        const background = {
            backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/wearedauntless/weAreDigitalStrategy.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <div classname="Slide Slide__WeAreDigitalStrategy" style={background}></div>
        );
    }
}