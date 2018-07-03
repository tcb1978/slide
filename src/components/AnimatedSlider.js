import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;


export default class AnimatedSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }
    }

    nextSlide = () => {
        this.setState({
            slideCount: this.state.slideCount + 1
        })
    }

    previousSlide = () => {
        this.setState({
            slideCount: this.state.slideCount - 1
        })
    }

    render() {
        const jsonData = require('../JSON/slides.json'); // image url's from slides.json

        const slide = jsonData.items.map((item, index) => {
            if (this.state.slideCount == item.slideCount) {
                return <div className="excerpt">
                    <div key={item.slideCount} style={{ backgroundImage: `url(${item.original})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '-webkit-fill-available'}} />
                </div>
            }
        });

        const RightArrow = (props) => {
            return (
                <Arrow onClick={this.nextSlide} className="nextArrow">
                    <i className="fas fa-chevron-circle-right" aria-hidden="true" />
                </Arrow>
            );
        }

        const LeftArrow = (props) => {
            return (
                <Arrow onClick={this.previousSlide} className="backArrow">
                    <i className="fas fa-chevron-circle-left" aria-hidden="true" />
                </Arrow>
            );
        }
        
        return (
            <Fragment>
                {slide}
                <RightArrow/>
                <LeftArrow/>
            </Fragment>
        );
    }
}