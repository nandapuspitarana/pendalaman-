import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutUsContainer';
import ContactContainer from './containers/ContactContainer';

// extends itu aku ingin mirip seperti ini itu perubahan
//class App extends React.Component {
class App extends Component {
  state = {
    page: 'home'
  };

  pindah = halaman => {
    this.setState({ page: halaman });
  };

  render() {
    return (
      <div>
        {this.state.page == 'home' && <HomeContainer />}
        {this.state.page == 'about' && <AboutContainer />}
        {this.state.page == 'contact' && <ContactContainer />}

        <button
          onClick={() => {
            this.pindah('home');
          }}>
          home
        </button>
        <button
          onClick={() => {
            this.pindah('about');
          }}>
          about
        </button>
        <button
          onClick={() => {
            this.pindah('contact');
          }}>
          contact
        </button>
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return <h1>Judul</h1>;
  }
}

// const state = { number : 10}

class Counter extends Component {
  state = {
    number: 0
  };

  naik = () => {
    console.log('naiknaik kepuncakk gungung');
    this.setState({
      number: this.state.number + 1
    });
  };

  turun = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Club {this.props.namaClub}</h1>
        <h2>{this.state.number}</h2>
        <button onClick={this.naik}>naik</button>
        <button onClick={this.turun}>turun</button>
      </div>
    );
  }
}
