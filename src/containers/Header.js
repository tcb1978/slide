import React, { Component } from 'react';
import './Header.css';

const background = {
    backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/wearedauntless/Logo-White.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'initial',
}
export default class Header extends Component {
    render() {
        return (
            
            <header className="header">
                { /*<div className="header__logo" style={background}/>*/ }
                {/*Would be <Link></Link>*/}
                <h1 className="header__logo">Dauntless</h1>
            </header>
        );
    }
}