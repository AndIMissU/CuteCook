import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScreenWidth = require('Dimensions').get('window').width;

class changeMyInfo extends Component {
  static navigationOptions = {
    title: '个人设置',
    headerStyle: {
      backgroundColor: 'white',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>个人设置</Text>
        <View style={{width: ScreenWidth,height:20,opacity: 0}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  }
}); 
module.exports = changeMyInfo;