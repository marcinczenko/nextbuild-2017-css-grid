// todo: use module resolvers to get rid of ../../
// https://github.com/coryhouse/react-slingshot/issues/398
import Styling from '../../Helpers/Styling';
import Grid from '../../Helpers/Grid';

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '28px',
    backgroundColor: 'CadetBlue',
    padding: '10px'
  }
};

export default class MainStyles {
  static get() {
    let grid = new Grid([
      'header         header         header',
      'horizontalMenu horizontalMenu horizontalMenu',
      'sidePanelLeft  content        sidePanelRight', 
      'sidePanelLeft  content        sidePanelRight', 
      'sidePanelLeft  content        messanger', 
      'statusBar      statusBar      messanger'
    ]);

    const gridStyles = grid.applyToStyles(styles);
    return {
      container: gridStyles.container,
      header: Styling.join(gridStyles.section, gridStyles.header),
      horizontalMenu: Styling.join(gridStyles.section, gridStyles.horizontalMenu),
      sidePanelLeft: Styling.join(gridStyles.section, gridStyles.sidePanelLeft),
      sidePanelRight: Styling.join(gridStyles.section, gridStyles.sidePanelRight),
      messanger: Styling.join(gridStyles.section, gridStyles.messanger),
      content: Styling.join(gridStyles.section, gridStyles.content),
      statusBar: Styling.join(gridStyles.section, gridStyles.statusBar)
    };
  }
};

