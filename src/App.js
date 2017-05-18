import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <section className="header">header</section>
        <section className="horizontal-menu">horizontal-menu</section>
        <section className="side-panel-left">side-panel-left</section>
        <section className="content">content</section>
        <section className="side-panel-right">side-panel-right</section>
        <section className="messanger">messanger</section>
        <section className="status-bar">status-bar</section>
      </div>
    );
  }
}

export default App;
