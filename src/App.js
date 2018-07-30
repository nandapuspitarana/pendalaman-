import React, { Component } from 'react';

// extends itu aku ingin mirip seperti
//class App extends React.Component {
class App extends Component {
  render() {
    return (
      <div>
        <Counter namaClub="Liverpool" />
        <Counter namaClub="Chealsea" />
        <Counter namaClub="Barca" />
        <Counter namaClub="Manchaster Cty" />
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
