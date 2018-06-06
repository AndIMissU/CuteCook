import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

const PixelRatio = require('PixelRatio');
const ScreenWidth = require('Dimensions').get('window').width;
const ScreenHeight = require('Dimensions').get('window').height;

class DefaultTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCategoryData: ['热门', '零食点心', '时令', '蔬菜类', '肉类',
       '水产类', '蛋奶豆制品', '水果坚果', '五谷杂粮'],
      selectCategoryIndex: 0,
      rightData: [
        [
          [
            { name : '酸奶', 'img': require('../img/kinds/hot/SuanNai.jpg')},
            { name : '早餐', 'img': require('../img/kinds/hot/ZaoCan.jpg')},
            { name : '自制肉松', 'img': require('../img/kinds/hot/BuAiChiShuCai.jpg')},
          ],
          [
            { name : '不爱吃蔬菜', 'img': require('../img/kinds/hot/BuAiChiShuCai.jpg')},
            { name : 'BLW手指食物', 'img': require('../img/kinds/hot/BLWShouZhiShiWu.jpg')},
            { name : '自制辅味料', 'img': require('../img/kinds/hot/ZiZhiTiaoWeiLiao.jpg')},
          ]
        ],
        [
          [
            {'name': '包子', 'img': require('../img/kinds/cookies/BaoZi.jpg')},
            {'name': '馒头包子', 'img': require('../img/kinds/cookies/ManTouBaoZi.jpg')},
            {'name': '磨牙棒', 'img': require('../img/kinds/cookies/MoYaBang.jpg')},
          ],
        ],
        [
          [
            {'name': '茭白', 'img': require('../img/kinds/time/JiaoBai.jpg')},
            {'name': '芹菜', 'img': require('../img/kinds/time/QinCai.jpg')},
            {'name': '芋头', 'img': require('../img/kinds/time/YuTou.jpg')},
          ],
        ],
        [
          [
            {'name': '山药', 'img': require('../img/kinds/vegetable/ShanYao.jpg')},
            {'name': '茭白', 'img': require('../img/kinds/vegetable/JiaoBai.jpg')},
            {'name': '南瓜', 'img': require('../img/kinds/vegetable/NanGua.jpg')},
          ],
          [
            {'name': '黄瓜', 'img': require('../img/kinds/vegetable/HuangGua.jpg')},
            {'name': '番茄', 'img': require('../img/kinds/vegetable/FanQie.jpg')},
            {'name': '胡萝卜', 'img': require('../img/kinds/vegetable/HuLuoBo.jpg')},
          ],
          [
            {'name': '白菜', 'img': require('../img/kinds/vegetable/BaiCai.jpg')},
            {'name': '卷心菜', 'img': require('../img/kinds/vegetable/JuanXinCai.jpg')},
            {'name': '萝卜', 'img': require('../img/kinds/vegetable/LuoBo.jpg')},
          ],
          [
            {'name': '彩椒', 'img': require('../img/kinds/vegetable/CaiJiao.jpg')},
            {'name': '冬瓜', 'img': require('../img/kinds/vegetable/DongGua.jpg')},
            {'name': '黑木耳', 'img': require('../img/kinds/vegetable/HeiMuEr.jpg')},
          ],
          [
            {'name': '藕', 'img': require('../img/kinds/vegetable/Ou.jpg')},
            {'name': '花菜', 'img': require('../img/kinds/vegetable/HuaCai.jpg')},
            {'name': '西葫芦', 'img': require('../img/kinds/vegetable/XiHuLu.jpg')},
          ],
          [
            {'name': '娃娃菜', 'img': require('../img/kinds/vegetable/WaWaCai.jpg')},
            {'name': '青菜', 'img': require('../img/kinds/vegetable/QingCai.jpg')},
            {'name': '茄子', 'img': require('../img/kinds/vegetable/QieZi.jpg')},
          ],
          [
            {'name': '青椒', 'img': require('../img/kinds/vegetable/QingJiao.jpg')},
            {'name': '生菜', 'img': require('../img/kinds/vegetable/ShengCai.jpg')},
            {'name': '丝瓜', 'img': require('../img/kinds/vegetable/SiGua.jpg')},
          ],
          [
            {'name': '苦瓜', 'img': require('../img/kinds/vegetable/KuGua.jpg')},
            {'name': '莴苣', 'img': require('../img/kinds/vegetable/WoJu.jpg')},
            {'name': '蘑菇', 'img': require('../img/kinds/vegetable/MoGu.jpg')},
          ],
          [
            {'name': '平菇', 'img': require('../img/kinds/vegetable/PingGu.jpg')},
            {'name': '鸡腿菇', 'img': require('../img/kinds/vegetable/JiTuiGu.jpg')},
            {'name': '金针菇', 'img': require('../img/kinds/vegetable/JinZhenGu.jpg')},
          ],
          [
            {'name': '芹菜', 'img': require('../img/kinds/vegetable/QinCai.jpg')},
            {'name': '蟹味菇', 'img': require('../img/kinds/vegetable/XieWeiGu.jpg')},
            {'name': '杏鲍菇', 'img': require('../img/kinds/vegetable/XingBaoGu.jpg')},
          ],
          [
            {'name': '芦笋', 'img': require('../img/kinds/vegetable/LuSun.jpg')},
            {'name': '荸荠', 'img': require('../img/kinds/vegetable/BiQi.jpg')},
            {'name': '口蘑', 'img': require('../img/kinds/vegetable/KouMo.jpg')},
          ],
          [
            {'name': '苋菜', 'img': require('../img/kinds/vegetable/XianCai.jpg')},
            {'name': '茼蒿', 'img': require('../img/kinds/vegetable/TongHao.jpg')},
            {'name': '茶树菇', 'img': require('../img/kinds/vegetable/ChaShuGu.jpg')},
          ],
          [
            {'name': '韭菜', 'img': require('../img/kinds/vegetable/JiuCai.jpg')},
          ]
        ],
        [
          [
            {'name': '鸡肉', 'img': require('../img/kinds/meat/JiRou.jpg')},
            {'name': '猪肉', 'img': require('../img/kinds/meat/ZhuRou.jpg')},
            {'name': '牛肉', 'img': require('../img/kinds/meat/NiuRou.jpg')},
          ],
          [
            {'name': '羊肉', 'img': require('../img/kinds/meat/YangRou.jpg')},
            {'name': '猪肝', 'img': require('../img/kinds/meat/ZhuGan.jpg')},
            {'name': '鸡肝', 'img': require('../img/kinds/meat/JiGan.jpg')},
          ],
          [
            {'name': '鹅肝', 'img': require('../img/kinds/meat/EGan.jpg')},
          ],
        ],
        [
          [
            {'name': '鳕鱼', 'img': require('../img/kinds/aquaticProducts/XueYu.jpg')},
            {'name': '龙利鱼', 'img': require('../img/kinds/aquaticProducts/LongLiYu.jpg')},
            {'name': '虾', 'img': require('../img/kinds/aquaticProducts/Xia.jpg')},
          ],
          [
            {'name': '银鱼', 'img': require('../img/kinds/aquaticProducts/YinYu.jpg')},
            {'name': '鲈鱼', 'img': require('../img/kinds/aquaticProducts/LuYu.jpg')},
            {'name': '蛤蜊', 'img': require('../img/kinds/aquaticProducts/GeLi.jpg')},
          ],
          [
            {'name': '紫菜', 'img': require('../img/kinds/aquaticProducts/ZiCai.jpg')},
            {'name': '鱿鱼', 'img': require('../img/kinds/aquaticProducts/YouYu.jpg')},
            {'name': '金枪鱼', 'img': require('../img/kinds/aquaticProducts/JinQiangYu.jpg')},
          ],
          [
            {'name': '干贝', 'img': require('../img/kinds/aquaticProducts/GanBei.jpg')},
            {'name': '扇贝', 'img': require('../img/kinds/aquaticProducts/ShanBei.jpg')},
          ],
        ],
        [
          [
            {'name': '奶酪', 'img': require('../img/kinds/EBMProducts/NaiLao.jpg')},
            {'name': '牛奶', 'img': require('../img/kinds/EBMProducts/NiuNai.jpg')},
            {'name': '酸奶', 'img': require('../img/kinds/EBMProducts/SuaiNai.jpg')},
          ],
          [
            {'name': '鸡蛋', 'img': require('../img/kinds/EBMProducts/JiDan.jpg')},
            {'name': '鹌鹑蛋', 'img': require('../img/kinds/EBMProducts/AnChunDan.jpg')},
            {'name': '豆腐', 'img': require('../img/kinds/EBMProducts/DouFu.jpg')},
          ],
          [
            {'name': '淡奶油', 'img': require('../img/kinds/EBMProducts/DanNaiYou.jpg')},
            {'name': '黄油', 'img': require('../img/kinds/EBMProducts/HuangYou.jpg')},
            {'name': '油豆皮', 'img': require('../img/kinds/EBMProducts/YouDouPi.jpg')},
          ]
        ],
        [
          [
            {'name': '火龙果', img: require('../img/kinds/fruit/HuoLongGuo.jpg')},
            {'name': '苹果', 'img': require('../img/kinds/fruit/PingGuo.jpg')},
            {'name': '香蕉', 'img': require('../img/kinds/fruit/XiangJiao.jpg')},
          ],
          [
            {'name': '牛油果', 'img': require('../img/kinds/fruit/NiuYouGuo.jpg')},
            {'name': '橙子', 'img': require('../img/kinds/fruit/ChengZi.jpg')},
            {'name': '红枣', 'img': require('../img/kinds/fruit/HongZao.jpg')},
          ],
          [
            {'name': '梨', 'img': require('../img/kinds/fruit/Li.jpg')},
            {'name': '猕猴桃', 'img': require('../img/kinds/fruit/MiHouTao.jpg')},
            {'name': '花生', 'img': require('../img/kinds/fruit/HuaSheng.jpg')},
          ],
          [
            {'name': '杏仁', 'img': require('../img/kinds/fruit/XingRen.jpg')},
            {'name': '腰果', 'img': require('../img/kinds/fruit/YaoGuo.jpg')},
            {'name': '蔓越莓', 'img': require('../img/kinds/fruit/ManYueMei.jpg')},
          ]
        ],
        [
          [
            {'name': '黑豆', 'img': require('../img/kinds/cereals/HeiDou.jpg')},
            {'name': '红豆', 'img': require('../img/kinds/cereals/HongDou.jpg')},
            {'name': '绿豆', 'img': require('../img/kinds/cereals/LvDou.jpg')},
          ],
          [
            {'name': '毛豆', 'img': require('../img/kinds/cereals/MaoDou.jpg')},
            {'name': '荞麦', 'img': require('../img/kinds/cereals/QiaoMai.jpg')},
            {'name': '燕麦', 'img': require('../img/kinds/cereals/YanMai.jpg')},
          ],
          [
            {'name': '玉米', 'img': require('../img/kinds/cereals/YuMi.jpg')},
            {'name': '土豆', 'img': require('../img/kinds/cereals/TuDou.jpg')},
            {'name': '红薯', 'img': require('../img/kinds/cereals/HongShu.jpg')},
          ],
          [
            {'name': '小米', 'img': require('../img/kinds/cereals/XiaoMi.jpg')},
            {'name': '芝麻', 'img': require('../img/kinds/cereals/ZhiMa.jpg')},
            {'name': '紫薯', 'img': require('../img/kinds/cereals/ZiShu.jpg')},
          ],
          [
            {'name': '藜麦', 'img': require('../img/kinds/cereals/LiMai.jpg')},
          ] 
        ]
      ]
    }
  }
  
  categoryClick(index){
    this.setState({
      selectCategoryIndex: index
    })
  }

  leftRenderRow(){
    let leftDom = [];
    for (let i = 0; i < this.state.leftCategoryData.length; i++) {
      leftDom.push(
        <TouchableOpacity activeOpacity={1} onPress={this.categoryClick.bind(this,i)} key={i}>
          <View key={i} style={{
            height: 60,
            backgroundColor: this.state.selectCategoryIndex == i ? 'white':'#f6f6f6',
            borderLeftWidth: this.state.selectCategoryIndex == i ? 3 : 0,
            borderLeftColor: '#ffd40d',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
            <Text style={{
              color: this.state.selectCategoryIndex == i ? '#985100': 'black'
            }}>
              {this.state.leftCategoryData[i]}
            </Text>
          </View>
        </TouchableOpacity>
      )
    };
    return leftDom;
  }

  // 一行三条数据
  rightRenderRowItem(index){
    let rowItemDom = [];
    for(let i = 0; i < (this.state.rightData[this.state.selectCategoryIndex])[index].length; i++){
      rowItemDom.push(
        <View key={i} style={{alignItems: 'center'}}>
          <View style={{
            height:56,
            width: 56,
            borderRadius:30,
            borderWidth: 1,
            borderColor: '#f6f6f6'
          }}><Image source={((this.state.rightData[this.state.selectCategoryIndex])[index])[i].img} style={{
            height: 50,
            width: 50,
            marginTop: 2,
            marginLeft: 2,
            borderRadius:25,
          }} resizeMode={'cover'}></Image>
          </View>
          <Text style={{ marginTop: 10 }}>
            {((this.state.rightData[this.state.selectCategoryIndex])[index])[i].name}
          </Text>
        </View>
      )
    };
    return rowItemDom;
  }

  // scrollowView 自动换行效果实现方式 一行显示三个商品，构造数据时，三个商品数据放到一个索引里面
  // listView自动换行 flexWrap: 'wrap', alignItems: 'flex-start' 配合使用可实现相应的结果
  rightRenderRow() {
    let rightDom = [];
    rightDom.push(
      <View key={this.state.rightData[this.state.selectCategoryIndex].length+1} style={{
        borderLeftColor: '#ffd40d',
        borderLeftWidth: 4,
        marginTop: 22,
        marginLeft: 9
      }}>
        <Text style={{
          color: '#985100',
          fontSize: 15,
          marginLeft: 18,
        }}>
          {this.state.leftCategoryData[this.state.selectCategoryIndex]}
        </Text>
      </View>
      
    )
    for(let i = 0; i < this.state.rightData[this.state.selectCategoryIndex].length; i++){
      rightDom.push(
        <View key={i} 
        style={{
          flexDirection:'row',
          justifyContent: 'space-around',
          marginTop: 23,
        }}
        >
          {this.rightRenderRowItem(i)}
        </View>
      )
    }
    return rightDom;
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftstyle}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.leftRenderRow()}
          </ScrollView>
        </View>
        <View style={styles.rightstyle}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.rightRenderRow()}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    flex:1,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
  leftstyle: {
    flex: 2
  },
  rightstyle: {
    flex: 6,
  }
}); 
module.exports = DefaultTabBar;