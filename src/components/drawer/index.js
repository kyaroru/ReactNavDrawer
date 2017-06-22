import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from '../../utils/navigation';
import NavBarItem from '../common/NavBarItem';
import HomeScreen from '../home';
import UserScreen from '../user';
import * as Colors from '../../themes/colors';

const getDrawerItem = navigation => (
  <NavBarItem
    iconName="bars"
    onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Users', Colors.primary, 'white', userDrawerIcon);

const Drawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
  UserScreen: { screen: UserScreen, navigationOptions: userNavOptions },
}, getDrawerConfig(300, 'left', 'HomeScreen'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('ReactNavDrawer', Colors.primary, 'white', getDrawerItem(navigation));

export default Drawer;
