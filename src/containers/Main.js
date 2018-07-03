import React, { Component } from 'react';
import AnimatedSlider from '../components/AnimatedSlider';
import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main container" id="main">
                <AnimatedSlider />
            </main>
        );
    }
}