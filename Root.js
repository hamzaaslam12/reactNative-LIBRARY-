import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import RouteStack from './StackNavigation';
import AboutStack from './DrawerNavigation';

const Root = createDrawerNavigator({
          Home: {
                    screen: RouteStack 
          },

          About: {
                    screen: AboutStack
          }
})

export default createAppContainer(Root)