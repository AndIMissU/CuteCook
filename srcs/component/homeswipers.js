
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

var swipers = React.createClass({
  render() {
    return (
      <Swiper style={styles.wrapper} autoplay={true} paginationStyle={{top:  ScreenWidth * 540 / 1080 -210}} 
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{backgroundColor: 'orange', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}>
        <View><Image resizeMode='cover' style={styles.imageSwiper} source={require('../img/header-1.jpg')} /></View>
        <View><Image resizeMode='cover' style={styles.imageSwiper} source={require('../img/header-2.jpg')} /></View>
        <View><Image resizeMode='cover' style={styles.imageSwiper} source={require('../img/header-2.jpg')} /></View>
      </Swiper>
    );
  }
})

var styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
  },
  imageSwiper: {
    width: ScreenWidth,
    height: ScreenWidth * 540 / 1080,
  }
});

module.exports = swipers;