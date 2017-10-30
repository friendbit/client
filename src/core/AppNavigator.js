import { StackNavigator } from 'react-navigation';

import MainScreen from '../pages/MainScreen';
import Login from '../pages/Login';

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  MainScreen: { screen: MainScreen },
}, {
    headerMode: 'screen'
  });

export default AppNavigator;
