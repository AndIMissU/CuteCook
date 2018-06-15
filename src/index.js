import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

let Swipers = require('./component/homeswipers');
let Homelist = require('./component/homelist');
let Homemenu = require('./component/homemenu');
let Kindlist = require('./component/kindlist');
let Myinfo = require('./component/my');

const ScreenWidth = require('Dimensions').get('window').width;
const PixelRatio = require('PixelRatio');
const px = 1 / require('PixelRatio').get();

const HOME = 'home';
const HOME_NORMAL = require('./img/common/home_normal.png');
const HOME_FOCUS = require('./img/common/home_pressed.png');
const KIND = 'kind';
const KIND_NORMAL = require('./img/common/fenlei_normal.png');
const KIND_FOCUS = require('./img/common/fenlei_pressed.png');
const SHARE = 'share';
const SHARE_NORMAL = require('./img/common/fenxiang_normal.png');
const SHARE_FOCUS = require('./img/common/fenxiang_pressed.png');
const MESSAGE = 'message';
const MESSAGE_NORMAL = require('./img/common/xiaoxi_normal.png');
const MESSAGE_FOCUS = require('./img/common/xiaoxi_pressed.png');
const MY = 'my';
const MY_NORMAL = require('./img/common/wode_normal.png');
const MY_FOCUS = require('./img/common/wode_pressed.png');


class app extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: HOME}
  }
  static navigationOptions = {
    header:null,  //隐藏顶部导航栏
  };
  
  _renderTabItem(img, selectedImg, tag, childView) {  
    return (  
      <TabNavigator.Item  
        selected={this.state.selectedTab === tag}  
        renderIcon={() => tag=='share'?(<View style={{width:50,height:50,backgroundColor:'white',marginTop:-20,borderRadius:25}}><Image style={styles.tabShareIcon} source={img}/></View>):(<Image style={styles.tabIcon} source={img}/>)}  
        renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}  
        onPress={() => { 
          if(tag=='share') {
            this.props.navigation.navigate('editMenu');
          } else {
            this.setState({ selectedTab: tag })
          }
        }}>  
        {childView}  
      </TabNavigator.Item>  

    ); 
  };
  _createChildView(tag,navigate) {
    switch(tag){
      case 'home': 
        return (
          <View style={{flex:1}}>
            <Swipers></Swipers>
            <View style={{marginTop: - ScreenWidth * 540 / 1080 - 25,flex:1,alignItems:'center',justifyContent:'center'}}>
              <Homemenu></Homemenu>
              <Homelist></Homelist>
            </View>
          </View>
        );
      case 'kind': 
        return (
          <View style={{flex:1}}>
            <View style={{width: ScreenWidth,height:20,backgroundColor: '#f9fafc',}}></View>
            <Kindlist></Kindlist>
          </View>
        );
      case 'message': 
        return (
          <View style={{flex:1,backgroundColor:'#00baff'}}>
            <View style={{width: ScreenWidth,height:20,backgroundColor: '#f9fafc',}}></View>
            <Text style={{fontSize:22}}>{tag}</Text>
          </View>
        );
      case 'my': 
        return (
          <View style={{flex:1}}>
            <View style={{width: ScreenWidth,height:20,opacity: 0}}></View>
            <View style={styles.header}>
              <Text>我的</Text>
              <TouchableOpacity onPress={()=> navigate('changeMyInfo')} title=''>
                <Image  style={styles.settings} source={require('./img/myinfo/setting.png')} />
              </TouchableOpacity>
            </View>
            <Myinfo></Myinfo>
          </View>
        );
    }; 

    
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>  
        {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, this._createChildView(HOME))}  
        {this._renderTabItem(KIND_NORMAL, KIND_FOCUS, KIND, this._createChildView(KIND))}  
        {this._renderTabItem(SHARE_NORMAL, SHARE_FOCUS, SHARE, this._createChildView(SHARE))}  
        {this._renderTabItem(MESSAGE_NORMAL, MESSAGE_FOCUS, MESSAGE, this._createChildView(MESSAGE))}  
        {this._renderTabItem(MY_NORMAL, MY_FOCUS, MY, this._createChildView(MY,navigate))}  
      </TabNavigator> 
    )
  }
}

const styles = StyleSheet.create({  
  tab: {  
    height: 52,  
    backgroundColor: 'white',  
    alignItems: 'center',
    borderTopWidth: 1/PixelRatio.get(),
    borderColor: '#e0e0e0',
  },
  tabIcon: {  
    width: 35,  
    height: 35,  
    resizeMode: 'stretch',
  },
  tabShareIcon: {
    width: 40,
    height: 40,
    marginLeft: 5,
    marginTop: 5
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
  settings: {
    position: 'absolute',
    width: 40 * ScreenWidth / 720,
    height: 40 * ScreenWidth / 720,
    top: - 32 * ScreenWidth / 720,
    right: - 320 * ScreenWidth / 720,
  },
}); 

module.exports = app;