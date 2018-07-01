import React, { Component } from 'react';
import './App.css';
import EntranceAnimation from './components/EntranceAnimation';
import Header from './containers/Header';
import Aside from './containers/Aside';
import Main from './containers/Main';
import Footer from './containers/Footer';

class App extends Component {
  componentWillMount() {
    this.setState({
      show: false,
    });

    setTimeout(() => this.setState({
      show: true
    }), 100);
  }
  render() {
    return (
      <EntranceAnimation startAnimation={this.state.show} className="">
        <div className="App">
          <Header />
          <Aside />
          <Main />
          <Footer />
        </div>
      </EntranceAnimation>
    );
  }
}

export default App;