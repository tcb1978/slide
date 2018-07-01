import React, { Component} from 'react';

export default class WeAreBusinessTransformation extends Component {
    render() {
        const background = {
            backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/wearedauntless/weDoBusinessTransormation.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <div classname="Slide Slide__WeAreBusinessTransformation" style={background}></div>
        );
    }
}