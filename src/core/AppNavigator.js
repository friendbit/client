import { StackNavigator } from 'react-navigation';

import MainScreen from '../pages/MainScreen';
import LoginScreen from '../pages/LoginScreen';

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  MainScreen: { screen: MainScreen },
}, {
    headerMode: 'screen'
  });

export default AppNavigator;
