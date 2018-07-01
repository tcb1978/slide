import React, { Component} from 'react';

export default class WeAreUnafraid extends Component {
    render() {
        const background = {
            backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/wearedauntless/weAreUnafraid.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <div classname="Slide Slide__WeAreUnafraid" style={background}></div>
        );
    }
}