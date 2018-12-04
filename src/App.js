import React, { Component } from 'react';
import './assets/scss/style.scss';
import CardsList from './views/CardsList';
import Header from './layout/Header';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <CardsList />
        </main>
      </div>
    );
  }
}

export default App;
