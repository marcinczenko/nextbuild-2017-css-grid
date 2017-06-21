import React, { Component } from 'react';

import MainGrid, { HeaderGridItem, HorizontalMenuGridItem, SidePanelLeftGridItem, 
  ContentGridItem, SidePanelRightGridItem, MessengerGridItem,
  StatusBarGridItem } from './MainGrid';

class Main extends Component {

  render() {
    return (
      <MainGrid>
        <HeaderGridItem>
          HeaderComponent
        </HeaderGridItem>
        <HorizontalMenuGridItem>
          HorizontalMenuComponent
        </HorizontalMenuGridItem>
        <SidePanelLeftGridItem>
          SidePanelLeftComponent
        </SidePanelLeftGridItem>
        <ContentGridItem>
          ContentComponent
        </ContentGridItem>
        <SidePanelRightGridItem>
          SidePanelRightComponent
        </SidePanelRightGridItem>
        <MessengerGridItem>
          MessengerComponent
        </MessengerGridItem>
        <StatusBarGridItem>
          StatusBarComponent
        </StatusBarGridItem>
      </MainGrid>
    );
  }
}

export default Main;
