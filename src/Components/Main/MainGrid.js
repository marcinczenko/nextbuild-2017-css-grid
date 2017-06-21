import glamorous from 'glamorous';
import Grid from '../../Helpers/Grid';
import maxContent from '../../Helpers/MaxContent';

let grid = new Grid([
  'header         header         header',
  'horizontalMenu horizontalMenu horizontalMenu',
  'sidePanelLeft  content        sidePanelRight', 
  'sidePanelLeft  content        sidePanelRight', 
  'sidePanelLeft  content        messenger', 
  'statusBar      statusBar      messenger'
], {
  gridTemplateRows: `${maxContent()} ${maxContent()} 1fr 1fr 1fr 1fr`
});

const gridItemLayout = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '28px',
  backgroundColor: 'CadetBlue',
  padding: '5px'
}

const MainGrid = glamorous.div(grid.container, {height: '100vh', padding: '5px', boxSizing: 'border-box'});

const HeaderGridItem = glamorous.div(grid.header, gridItemLayout);

const HorizontalMenuGridItem = glamorous.div(grid.horizontalMenu, gridItemLayout);

const SidePanelLeftGridItem = glamorous.div(grid.sidePanelLeft, gridItemLayout);

const ContentGridItem = glamorous.div(grid.content, gridItemLayout);

const SidePanelRightGridItem = glamorous.div(grid.sidePanelRight, gridItemLayout);

const MessengerGridItem = glamorous.div(grid.messenger, gridItemLayout);

const StatusBarGridItem = glamorous.div(grid.statusBar, gridItemLayout);

export default MainGrid;
export { HeaderGridItem, HorizontalMenuGridItem, SidePanelLeftGridItem, 
  ContentGridItem, SidePanelRightGridItem, MessengerGridItem,
  StatusBarGridItem };
