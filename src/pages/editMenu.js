import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const ScreenWidth = require('Dimensions').get('window').width;
const ratio = ScreenWidth / 1080;
const secondRatio = ScreenWidth / 720; // 由于截图原因, 屏幕大小不一, 所以又加了一个比例;
const px = 1 / require('PixelRatio').get();

class editMenu extends Component {
  static navigationOptions = {
    title: '编辑菜谱',
    headerStyle: {
      backgroundColor: 'white',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      foodListLen: 2,
    }
  }
  addFoodMediaNum() {
    this.setState({
      foodListLen: this.state.foodListLen + 1
    })
  }
  FoodNumber() {
    let foodList = [];
    for(let i = 0; i < this.state.foodListLen; i++) {
      foodList.push(
        <View key={i} style={styles.inputBox}>
          <View style={{
            width: ScreenWidth,
            height: 50 * ratio, 
            backgroundColor: '#e0e0e0',
            flexDirection: 'row',
          }}>
            <TextInput style={styles.leftInput} placeholder='用料：例如五花肉'></TextInput>
            <TextInput style={styles.rightInput} placeholder='用量：例如250G'></TextInput>
          </View>
        </View>
      )
    }
    return foodList;
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.editCover}>
          <Image style={styles.coverImg} source={require('../img/publish/backCover.jpg')}/>
          <TouchableOpacity style={styles.coverChange}>
            <Text style={styles.coverChangeText}>更换封面</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.menuName} placeholder='菜谱名字'></TextInput>
        <TextInput style={styles.menuIntro} placeholder='为这篇菜谱写一段华丽丽的开篇吧  ^_^ '></TextInput>
        <View style={styles.foodNum}>
          <View style={styles.foodNumName}><Text style={{ color: '#7b7b7b' }}>食材用料</Text></View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.FoodNumber()}
            </ScrollView>
            <TouchableOpacity style={styles.addFoodNum} onPress={()=>this.addFoodMediaNum()}>
              <Image style={styles.addFoodNumImg} source={require('../img/publish/add.png')}/>
              <Text style={styles.addFoodNumText}>添加食材</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addOperation}>
          <Image style={styles.addFoodNumImg} source={require('../img/publish/add.png')}/>
          <Text style={styles.addFoodNumText}>添加步骤</Text>
        </TouchableOpacity>
        <View style={styles.tips}>
          <Text style={{fontSize: 16, color: '#666'}}>小贴士</Text>
        </View>
        <TouchableOpacity style={styles.addTips}>
          <Text style={{fontSize: 16, color: '#999'}}>有什么小妙招一定要分享哟～</Text>
        </TouchableOpacity>
        <View style={styles.bottomBlock}>
          <Text style={styles.blockInfo}>
            点击 “发布” 按钮，即表示同意 <Text style={{color: '#419fd3'}}>《萌煮用户分享食谱营养协议》</Text>
          </Text>
          <Image style={styles.bottomBlockImg} source={require('../img/publish/publish.png')} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  editCover: {
    width: ScreenWidth,
    height: 600 * ratio,
  },
  coverImg: {
    width: ScreenWidth,
    height: 600 * ratio,
  },
  coverChange: {
    width: 300 * ratio,
    height: 90 * ratio,
    backgroundColor: '#fed60d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45 * ratio,
    position: 'absolute',
    top: 260 * ratio,
    left: 390 * ratio
  },
  coverChangeText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
  },
  menuName: {
    width: ScreenWidth,
    height: 125 * ratio,
    backgroundColor: 'white',
    marginTop: 22 * ratio,
    paddingLeft: 33* ratio,
    fontWeight: '700',
    color: '#7b7b7b'
  },
  menuIntro: {
    width: ScreenWidth,
    height: 140 * ratio,
    backgroundColor: 'white',
    marginTop: 30 * ratio,
    paddingLeft: 33* ratio,
  },
  foodNum: {
    width: ScreenWidth,
    marginTop: 30 * ratio,
    backgroundColor: 'white',
  },
  foodNumName: {
    width: ScreenWidth,
    height: 120 * ratio,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingLeft: 30 * ratio,
    justifyContent: 'center',
  },
  inputBox: {
    width: ScreenWidth,
    height: 126 * ratio,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  leftInput: {
     width: ScreenWidth / 2 - 1,
     height: 50 * ratio,
     backgroundColor: 'white',
     paddingLeft: 25 * ratio
  },
  rightInput: {
    width: ScreenWidth / 2,
     height: 50 * ratio,
     marginLeft: 1,
     backgroundColor: 'white',
     paddingLeft: 25 * ratio
  },
  addFoodNum: {
    width: ScreenWidth,
    height: 150 * ratio,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFoodNumImg: {
    width: 45 * secondRatio,
    height: 45 * secondRatio,
    marginRight: 15 * secondRatio,
  },
  addFoodNumText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffd40d'
  },
  addOperation: {
    width: 1020 * ratio,
    height: 180 * ratio,
    marginTop: 45 * ratio,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30 * ratio,
    borderRadius: 20 * ratio,
    marginBottom: 35 * ratio,
  },
  tips: {
    width: ScreenWidth,
    height: 80 * secondRatio,
    backgroundColor: 'white',
    paddingLeft: 20 * secondRatio,
    justifyContent: 'center'
  },
  addTips: {
    width: ScreenWidth,
    height: 80 * secondRatio,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 20 * secondRatio,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
  bottomBlock: {
    width: ScreenWidth,
    height: 480 * secondRatio,
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
  blockInfo: {
    marginTop: 40 * secondRatio,
    width: ScreenWidth,
    height: 25 * secondRatio,
    marginLeft: 30 * secondRatio,
    color: '#a7a5a5',
  },
  bottomBlockImg: {
    width: 449 * secondRatio,
    height: 76 * secondRatio,
    marginTop: 150 * secondRatio
  }
})

module.exports = editMenu;