import React from 'react';
import {StatusBar} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator,TransitionPresets,} from 'react-navigation-stack'
import TabNavigator from './src/pages/tabbar'
import { Provider } from 'react-redux';
import store from './src/store'    

const AllPage = createStackNavigator({
  Tab: {screen: TabNavigator}},
{
  headerMode: 'none',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  },
})
const AppContainer=  createAppContainer(AllPage);

 export default class App extends React.Component {

  render () {
    return (
      <Provider store={store}>

        <AppContainer/>
        {/* 配置安卓也从屏幕顶部渲染 */}
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      </Provider>
    )
  }
}


