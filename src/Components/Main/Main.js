import React, { Component } from 'react';

import MainStyles from './MainStyles';

class Main extends Component {

  constructor() {
    super();
    this.styles = MainStyles.get();
  }

  render() {
    return (
      <div style={this.styles.container}>
        <section style={this.styles.header}>header</section>
        <section style={this.styles.horizontalMenu}>horizontal-menu</section>
        <section style={this.styles.sidePanelLeft}>side-panel-left</section>
        <section style={this.styles.content}>content</section>
        <section style={this.styles.sidePanelRight}>side-panel-right</section>
        <section style={this.styles.messanger}>messanger</section>
        <section style={this.styles.statusBar}>status-bar</section>
      </div>
    );
  }
}

export default Main;
