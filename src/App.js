import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super();
    this.styles = styles;
  }

  render() {
    return (
      <div style={this.styles.container}>
        <section style={{...this.styles.section, ...this.styles.header}}>header</section>
        <section style={{...this.styles.section, ...this.styles.horizontalMenu}}>horizontal-menu</section>
        <section style={{...this.styles.section, ...this.styles.sidePanelLeft}}>side-panel-left</section>
        <section style={{...this.styles.section, ...this.styles.content}}>content</section>
        <section style={{...this.styles.section, ...this.styles.sidePanelRight}}>side-panel-right</section>
        <section style={{...this.styles.section, ...this.styles.messanger}}>messanger</section>
        <section style={{...this.styles.section, ...this.styles.statusBar}}>status-bar</section>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'grid',
    gridGap: '5px',
    gridTemplateAreas: '"a a a" "b b b" "c d e" "c d e" "c d f" "g g f"',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
  },

  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '28px',
    backgroundColor: 'CadetBlue',
    padding: '10px'
  },

  header: {
    gridArea: 'a'
  },

  horizontalMenu: {
    gridArea: 'b'
  },

  sidePanelLeft: {
    gridArea: 'c'
  },

  content: {
    gridArea: 'd'
  },

  sidePanelRight: {
    gridArea: 'e'
  },

  messanger: {
    gridArea: 'f'
  },

  statusBar: {
    gridArea: 'g'
  }
};

export default App;
