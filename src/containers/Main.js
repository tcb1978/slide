import React, { Component } from 'react';
import AnimatedSlider from '../components/AnimatedSlider';
// import ResponsiveCarousel from '../components/ResponsiveCarousel';
import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <AnimatedSlider />
            </main>
        );
    }
}