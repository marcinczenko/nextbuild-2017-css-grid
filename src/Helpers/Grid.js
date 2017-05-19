export default class Grid {
  constructor(grid, sections) {
    this.grid = grid;
    this.sections = sections;
  }

  getGridTemplateAreas() {
    return this.grid.reduce((acc, value) => {
      return `${acc} "${value}"`
    }, '');
  }

  getGridTemplateColumns() {
    const columns = Math.max(...this.grid.map((e) => e.split(' ').length));
    return [...Array(columns).keys()].map(() => '1fr').join(' ');
  }

  getGridTemplateRows() {
    return this.grid.map(() => '1fr').join(' ');
  }

  applyToStyles(styles) {
    const gridAreaCodesIter = new Set(this.grid.join(' ').split(' ')).values();
    const gridAreas = this.sections.reduce((acc, value, index) => {
      acc[value] = { gridArea: gridAreaCodesIter.next().value };
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
