import * as React from 'react';
import {SafeAreaView,StatusBar, Animated,Button, View, Text , TextInput,Dimensions ,TouchableOpacity,Alert,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './home'
import My from './my'
import Find from './find'
import Listen from './listen'

export default TabNavigator = createBottomTabNavigator({
  
  首页: Home,
  我听: Listen,
  发现: Find,
  我的: My,
},
{


  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === '首页') {
        iconName = 'home'
      } else if (routeName === '我听') {
        iconName = 'star'
      } else if (routeName === '发现') {
        iconName = 'dashboard'
      } else if (routeName === '我的'){
        iconName = 'user'
      }
      return <FontAwesome name={iconName} size={20} color={tintColor} />;
    },
  }),

  tabBarOptions: {
    style:{
        // Remove border top on both android & ios
        borderTopWidth: 0,
        borderTopColor: "transparent",
        
        elevation: 0,
        shadowColor : '#5bc4ff',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
    },
  
    activeTintColor: '#EA384D',  // 选中项的颜色
    inactiveTintColor: '#909399', // 未选中项的颜色
  },
}
);

