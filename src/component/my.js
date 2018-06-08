import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ScreenWidth = require('Dimensions').get('window').width;
const px = 1 / require('PixelRatio').get();
const PixelRatio = require('PixelRatio');

class myInfo extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: ScreenWidth,height:20,opacity: 0}}></View>
        <View style={styles.header}>
          <Text>我的</Text>
        </View>
        <View style={styles.myinfo}>
          <Image style={styles.myavatar} source={require('../img/common/avatar.jpg')} />
          <Text style={styles.mynickname}>IMissU</Text>
          <View style={styles.mynext}></View>
        </View>
        <View style={styles.myfolfan}>
          <View style={styles.myfans}><Text style={{color: '#9a9a9a'}}>0 粉丝</Text></View>
          <View style={styles.myfollow}><Text style={{color: '#9a9a9a'}}>0 关注</Text></View>
        </View>
        <View style={styles.mymenus}>
          <View style={styles.mymenuitem}>
            <Image style={{width:68 * ScreenWidth / 720,height:68 * ScreenWidth / 720}} source={require('../img/myinfo/favorite@2x.png')}/>
            <Text style={{marginTop:22 * ScreenWidth / 720}}>我的收藏</Text>  
          </View >
          <View style={styles.mymenuitem}>
            <Image style={{width:68 * ScreenWidth / 720,height:68 * ScreenWidth / 720}} source={require('../img/myinfo/cook@2x.png')}/>
            <Text style={{marginTop:10}}>我的菜谱</Text> 
          </View>
          <View style={styles.mymenuitem}>
            <Image style={{width:68 * ScreenWidth / 720,height:68 * ScreenWidth / 720}} source={require('../img/myinfo/drafts@2x.png')}/>
            <Text style={{marginTop:22 * ScreenWidth / 720}}>草稿箱</Text> 
          </View>
        </View>
        <View style={styles.mylisthistory}>
          <Image source={require('../img/myinfo/history.png')} style={styles.mylisthistoryimg}/>
          <Text style={{fontSize:16, marginTop: 32 * ScreenWidth / 720, marginLeft: 21 * ScreenWidth /720}}>浏览历史</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  header: {
    height: 90 * ScreenWidth / 720,
    width: ScreenWidth,
    alignItems: 'center', 
    justifyContent: 'center',
    borderBottomColor: '#e0e0e0',
    borderTopColor: '#e0e0e0',
    borderTopWidth: px,
    borderBottomWidth: px,
    backgroundColor: 'white',
  },
  myinfo: {
    height: 180 * ScreenWidth / 720,
    width: ScreenWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  myavatar: {
    width: 126 * ScreenWidth / 720,
    height: 126 * ScreenWidth / 720,
    borderWidth: 2 * px,
    borderColor: '#e0e0e0',
    borderRadius: 64 * ScreenWidth / 720,
    marginLeft: 32 * ScreenWidth / 720,
    marginTop: 28 * ScreenWidth / 720,
  },
  mynickname: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40 * ScreenWidth / 720,
    marginTop: 70 * ScreenWidth / 720,
    fontSize: 20,
  },
  mynext: {
    width: 36 * ScreenWidth / 720,
    height: 36 * ScreenWidth / 720,
    borderTopColor: '#c7c7c7',
    borderTopWidth: 2,
    borderRightColor: '#c7c7c7',
    borderRightWidth: 2,
    transform: [{rotate: '45deg' }],
    top: 74 * ScreenWidth / 720,
    right: 60 * ScreenWidth / 720,
    position: 'absolute',
  },
  myfolfan: {
    width: ScreenWidth,
    height: 80 * ScreenWidth / 720,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  myfans: {
    width: ScreenWidth / 2 - 1,
    height: 32 * ScreenWidth / 720,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#e0e0e0',
    borderRightWidth: 1
  },
  myfollow: {
    width: ScreenWidth / 2,
    height: 32 * ScreenWidth / 720,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mymenus: {
    width: ScreenWidth,
    height: 184 * ScreenWidth / 720,
    backgroundColor: 'white',
    marginTop: 26 * ScreenWidth / 720,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mymenuitem: {
    alignItems: 'center',
    marginTop: 18
  },
  mylists: {
    marginTop: 26 * ScreenWidth / 720,
    height: 266 * ScreenWidth / 720,
    width: ScreenWidth,
    backgroundColor: 'white',
  },
  mylisthistory: {
    marginTop: 26 * ScreenWidth / 720,
    width: ScreenWidth,
    height: 90 * ScreenWidth / 720,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  mylisthistoryimg: {
    width: 37 * ScreenWidth / 720,
    height: 37 * ScreenWidth / 720,
    marginTop: 28 * ScreenWidth / 720,
    marginLeft: 32 * ScreenWidth / 720
  }
}); 
module.exports = myInfo;