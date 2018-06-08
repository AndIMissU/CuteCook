/**
 * CuteCook App
 * 
 * @AndIMissU
 */

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import changeMyInfo from './src/pages/changeMyInfo'
import index from './src/index';


const appNav = StackNavigator({
  index: { screen: index },
  changeMyInfo: { screen: changeMyInfo },
})


AppRegistry.registerComponent('cute_cook', () => appNav);
