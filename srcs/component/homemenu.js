import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

const ScreenWidth = require('Dimensions').get('window').width;


class homemenu extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <View style={styles.menuHeader}>
            <Image style={styles.menuHeaderImg} source={require('../img/avatar.jpg')}/>
            <Text style={styles.menuHeaderText}>还未设置宝宝专属菜单</Text>
          </View>
          <View style={styles.menuBody}>
            <Text style={styles.menuBodyText}>萌煮热门标签</Text>
            <View style={styles.menuBodyContainer}>
              <View style={styles.menuBodyItem}>
                <Image style={styles.menuBodyItemImg} source={require('../img/hot-1.png')}/>
                <Text style={styles.menuBodyItemText}>烘焙</Text>
              </View>
              <View style={styles.menuBodyItem}>
                <Image style={styles.menuBodyItemImg} source={require('../img/hot-2.png')}/>
                <Text style={styles.menuBodyItemText}>煎饼</Text>
              </View>
              <View style={styles.menuBodyItem}>
                <Image style={styles.menuBodyItemImg} source={require('../img/hot-3.png')}/>
                <Text style={styles.menuBodyItemText}>补钙</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    height: 220,
    width: ScreenWidth,
    backgroundColor: '#fdfdfd',
    marginTop: -ScreenWidth * 540 / 1080 - 16
  },
  menu: {
    width: ScreenWidth - 40,
    backgroundColor: 'white',
    height: (ScreenWidth - 40) * 330 / 670,
    marginTop: 18,
    marginLeft: 20,
    borderRadius: 10,
    borderColor: '#f7f7f7',
    borderWidth: 1,
  },
  menuHeader: {
    width: ScreenWidth - 80,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
    marginLeft: 20,
    flexDirection: 'row',
  },
  menuHeaderImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#ecb829',
    borderWidth: 2,
    marginTop: 8,
  },
  menuHeaderText: {
    marginTop: 20,
    marginLeft: 10
  },
  menuBody: {
    flex: 1,
    alignItems: 'center',
  },
  menuBodyText: {
    marginTop: 10,
    color: 'gray',
  },
  menuBodyContainer: {
    flexDirection: 'row',
  },
  menuBodyItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuBodyItemImg: {
    width: 50,
    height: 50,
    margin: 35,
    marginTop: 10,
    marginBottom: 0,
  },
  menuBodyItemText: {
    margin: 35,
    marginTop: 10,
    marginBottom: 0,
  }
}); 
module.exports = homemenu;