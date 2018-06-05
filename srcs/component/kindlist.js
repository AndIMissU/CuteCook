import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

const ScreenWidth = require('Dimensions').get('window').width;

class DefaultTabBar extends Component {
  // propTypes = {
  //   goToPage: PropTypes.func,
  //   activeTab: PropTypes.number,
  //   tabs: PropTypes.array,
  //   backgroundColor: PropTypes.string,
  //   activeTextColor: PropTypes.string,
  //   inactiveTextColor: PropTypes.string,
  //   textStyle: Text.propTypes.style,
  //   tabStyle: ViewPropTypes.style,
  //   renderTab: PropTypes.func,
  //   underlineStyle: ViewPropTypes.style,
  // }
  render() {
    return (
      <ScrollableTabView style={styles.tabView}>
        <Text tabLabel='热门'/>
        <Text tabLabel='月龄'/>
        <Text tabLabel='营养标签'/>
        <Text tabLabel='零食点心'/>
        <Text tabLabel='时令'/>
        <Text tabLabel='蔬菜类'/>
        <Text tabLabel='肉类'/>
        <Text tabLabel='水产类'/>
        <Text tabLabel='蛋奶豆制品'/>
        <Text tabLabel='水果坚果'/>
        <Text tabLabel='五谷杂粮'/>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({  
  tabView: {
    
  }
}); 
module.exports = DefaultTabBar;