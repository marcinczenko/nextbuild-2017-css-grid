export default class Grid {
  constructor(grid, sections) {
    this.grid = grid;
  }

  getGridTemplateAreas() {
    return this.grid.reduce((acc, value) => {
      return `${acc} "${value}"`
    }, '');
  }

  getGridTemplateColumns() {
    const columns = Math.max(...this.grid.map((e) => e.split(/\s\s+/).length));
    return [...Array(columns).keys()].map(() => '1fr').join(' ');
  }

  getGridTemplateRows() {
    return this.grid.map(() => '1fr').join(' ');
  }

  applyToStyles(styles) {
    const sections = new Set(this.grid.join(' ').split(/\s\s*/));
    const gridAreas = [...sections].reduce((acc, value) => {
      acc[value] = { gridArea: value };
      return acc;
    }, {});

    return { 
      ...styles,
      container: {
        display: 'grid',
        gridGap: '5px',
        gridTemplateAreas: this.getGridTemplateAreas(),
        gridTemplateColumns: this.getGridTemplateColumns(),
        gridTemplateRows: this.getGridTemplateRows()
      },
      ...gridAreas
    };
  }
};
