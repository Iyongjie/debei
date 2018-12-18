/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';
import HomePage from './modules/home/home';
import TaskPage from './modules/task/task';
import MinePage from './modules/mine/mine';
 
export default class debei extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <TabBarIOS barTintColor="#fff">
        <TabBarIOS.Item 
          title="首页"
          icon={require('./resources/tab/homeUnselect.png')}
          selectedIcon={require('./resources/tab/homeSelected.png')}
          selected={this.state.selectedTab === 'home'}
          renderAsOriginal
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}
        >
        {this.initTabBar()}
        </TabBarIOS.Item>
        <TabBarIOS.Item 
          title="任务"
          icon={require('./resources/tab/taskUnselect.png')}
          selectedIcon={require('./resources/tab/taskSelected.png')}
          selected={this.state.selectedTab === 'task'}
          renderAsOriginal
          onPress={() => {
            this.setState({
              selectedTab: "task"
            });
          }}
        >
        {this.initTabBar()}
        </TabBarIOS.Item>
        <TabBarIOS.Item 
          title="我的"
          icon={require('./resources/tab/mineUnselect.png')}
          selectedIcon={require('./resources/tab/mineSelected.png')}
          selected={this.state.selectedTab === 'mine'}
          renderAsOriginal
          onPress={() => {
            this.setState({
              selectedTab: "mine"
            });
          }}
        >
        {this.initTabBar()}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  initTabBar(){
    var view = null;
    switch (this.state.selectedTab) {
      case 'home':
        view = <HomePage></HomePage>;
        break;
      case 'task':
        view = <TaskPage></TaskPage>;
        break;
      case 'mine':
        view = <MinePage></MinePage>;
        break;
    }
    return view;
  }
}
 
AppRegistry.registerComponent('debei', () => debei);
