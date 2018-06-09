import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ScreenWidth = require('Dimensions').get('window').width;
const ratio = ScreenWidth / 720;
const px = 1 / require('PixelRatio').get();

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
        <View style={styles.top}>
          <View style={styles.avatar}>
            <Image style={styles.avatarImg} source={require('../img/personInfo/camera.png')} />
            <Text style={styles.avatarText}>头像</Text>
            <Image style={styles.avatarMy} source={require('../img/personInfo/myAvatar.jpeg')} />
            <View style={styles.avatarNext}></View>
          </View>
          <View style={styles.topItem}>
            <Image style={styles.topItemImg} source={require('../img/personInfo/nickname.png')}/>
            <Text style={styles.topItemName}>昵称</Text>
            <Text style={styles.topItemText}>IMissU</Text>
            <View style={styles.topItemNext}></View>
          </View>
          <View style={styles.topItem}>
            <Image style={[styles.topItemImg,styles.sex]} source={require('../img/personInfo/sexm.png')}/>
            <Text style={styles.topItemName}>性别</Text>
            <Text style={styles.topItemText}>女</Text>
            <View style={styles.topItemNext}></View>
          </View>
          <View style={styles.topItem}>
            <Image style={[styles.topItemImg,styles.city]} source={require('../img/personInfo/location.png')}/>
            <Text style={styles.topItemName}>城市</Text>
            <Text style={styles.topItemText}>江西 赣州</Text>
            <View style={styles.topItemNext}></View>
          </View>
          <View style={[styles.topItem,styles.itemCity]}>
            <Image style={[styles.topItemImg,styles.tag]} source={require('../img/personInfo/tag.png')}/>
            <Text style={styles.topItemName}>个性签名</Text>
            <Text style={styles.topItemText}></Text>
            <View style={styles.topItemNext}></View>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.topItem}>
            <Image style={[styles.topItemImg,styles.suggestion]} source={require('../img/personInfo/suggestion.png')}/>
            <Text style={styles.topItemName}>建议反馈</Text>
            <Text style={styles.topItemText}>马上就去吐槽APP体验</Text>
            <View style={styles.topItemNext}></View>
          </View>
          <View style={[styles.topItem,styles.itemCity]}>
            <Image style={[styles.topItemImg,styles.question]} source={require('../img/personInfo/question.png')}/>
            <Text style={styles.topItemName}>V 2.5.0</Text>
            <Text style={styles.topItemText}></Text>
            <View style={styles.topItemNext}></View>
          </View>
        </View>
        <View style={styles.exit}>
          <Text style={styles.exitText}>退出登录</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    alignItems: 'center',
  },
  top: {
    width: 690 * ratio,
    height: 522 * ratio,
    backgroundColor: 'white',
    marginTop: 24 * ratio,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 660 * ratio,
    height: 160 * ratio,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
  },
  avatarImg: {
    width: 60 * ratio,
    height: 60 * ratio,
    marginTop: 50 * ratio,
    marginLeft: 30 * ratio,
  },
  avatarText: {
    fontSize: 17,
    top: 65 * ratio,
    left: 110 * ratio,
    position: 'absolute'
  },
  avatarMy: {
    width: 102 * ratio,
    height: 102 * ratio,
    position: 'absolute',
    top: 30 * ratio,
    right: 88 * ratio,
    borderRadius: 51 * ratio,
  },
  avatarNext: {
    width: 28 * ratio,
    height: 28 * ratio,
    borderTopColor: '#e0e0e0',
    borderRightColor: '#e0e0e0',
    borderTopWidth: 2,
    borderRightWidth: 2,
    transform: [{rotate: '45deg' }],
    position: 'absolute',
    top: 66 * ratio,
    right: 34 * ratio,
  },
  topItem: {
    width: 660 * ratio,
    height: 90 * ratio,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  topItemImg: {
    width: 50 * ratio,
    height: 50 * ratio,
    marginLeft: 35 *  ratio,
    marginTop: 15 * ratio
  },
  topItemName: {
    fontSize: 16,
    top: 30 * ratio,
    left: 110 * ratio,
    position: 'absolute'
  },
  topItemText: {
    position: 'absolute',
    fontSize: 16,
    color: '#9b9b9b',
    top: 28 * ratio,
    right: 78 * ratio
  },
  topItemNext: {
    width: 28 * ratio,
    height: 28 * ratio,
    borderTopColor: '#e0e0e0',
    borderRightColor: '#e0e0e0',
    borderTopWidth: 2,
    borderRightWidth: 2,
    transform: [{rotate: '45deg' }],
    position: 'absolute',
    top: 30 * ratio,
    right: 34 * ratio,
  },
  tag: {
    width: 43 * ratio,
    height: 43 * ratio,
    marginTop: 25 * ratio,
    marginLeft: 40 * ratio
  },
  city: {
    marginTop: 20 * ratio,
    marginLeft: 30 * ratio,
  },
  sex: {
    width: 40 * ratio,
    height: 40 * ratio,
    marginTop: 25 * ratio
  },
  itemCity: {
    borderBottomWidth: 0,
  },
  middle: {
    width: 690 * ratio,
    height: 180 * ratio,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginTop: 22 * ratio,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  question: {
    marginTop: 25 * ratio,
    width: 40 * ratio,
    height: 40 * ratio
  },
  suggestion: {
    width: 40 * ratio,
    height: 40 * ratio,
    marginTop: 25 * ratio,
  },
  exit: {
    width: 690 * ratio,
    height: 90 * ratio,
    backgroundColor: 'white',
    marginTop: 22 * ratio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitText: {
    color: '#922b3b',
    fontSize: 16
  }
}); 
module.exports = changeMyInfo;