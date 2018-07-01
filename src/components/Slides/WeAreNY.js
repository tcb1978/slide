import React, { Component} from 'react';

export default class WeAreNY extends Component {
    render() {
        const background = {
            backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/wearedauntless/weAreNewYork.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <div classname="Slide Slide__WeAreNY" style={background}></div>
        );
    }
}