
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Tab2 from './tab2'
import Tab1 from './tap1'
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import {SafeAreaView,StatusBar, Animated,Button, View, Text , TextInput,Dimensions ,TouchableOpacity,Alert,StyleSheet} from 'react-native';
/**
 * 标签导航
 */
const TopTabNavigator = createMaterialTopTabNavigator({
    推荐: {
        screen: Tab1,
    },
    topPage2: {
        screen: Tab2,
    }
}, {
  
    tabBarPosition: 'top',       //标签栏在屏幕顶部还是底部
    // swipeEnabled:true,           //是否可以滑动切换标签
    // backBehavior:'none',         //andorid按下返回键将返回initalRouteName，如果设置非initalRouteName则直接结束标签导航
    lazy: true,                    //是否只渲染显示的标签
    animationEnabled: true,         //标签切换是否有动画效果
    tabBarOptions: {
        activeTintColor: '#f86442',  //标签栏激活字体颜色
        inactiveTintColor: '#333333',//标签栏未激活字体颜色
        showLabel: true,             //是否显示标签栏
        labelStyle: {fontSize: 16},  //标签样式(可设置字体大小等)
        showIcon: false,              //是否显示标签栏上图标
        scrollEnabled: true,        //是否可以滚动标签栏目(当tab总数超过一屏)
        indicatorStyle: {height: 4,
        width: 20,
        marginLeft: 30,
        borderRadius:2,
        backgroundColor: "#f86442"
        }, //指示器样式 height：0则不显示
        style: {backgroundColor: '#fffff'}, //设置整个tabbar样式(背景颜色等)
        tabStyle:{width: 80,height: 60},//设置单个tabbar样式
    }
});
 
const Tab =createAppContainer(TopTabNavigator)
export default class Home extends React.Component {
  constructor (props) {
    super(props)
   
  }

  render() {
    
    return (
      <Tab></Tab>

    )
  }

}