import React, { Component} from 'react';

export default class WeAreDauntlessTwo extends Component {
    render() {
        const background = {
            backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/wearedauntless/weAreDauntlessTwo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <div classname="Slide Slide__WeAreDauntlessTwo" style={background}></div>
        );
    }
}