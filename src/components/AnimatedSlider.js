import React, { Component, Fragment } from 'react';
import CarouselSlider from 'react-carousel-slider';

export default class AnimatedSlider extends Component {
    render() {
        let jsonData = require('../JSON/slides.json');
        let items = jsonData.items.map((item, index) => 
            <Fragment>
                <img src = {item.imgSrc} />
                <p>{item.des}</p>
            </Fragment>
        );
        return (
            <CarouselSlider slideCpnts = {items} />
        );
    }
}