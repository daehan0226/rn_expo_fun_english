import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerbCreateScreen from './src/screens/VerbCreateScreen';
import VerbDetailScreen from './src/screens/VerbDetailScreen';
import VerbListScreen from './src/screens/VerbListScreen';
import { setNavigator } from './src/navigationRef';
// import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { FontAwesome } from '@expo/vector-icons';

const verbListFlow = createStackNavigator({
  VerbkList: VerbListScreen,
  VerbDetail: VerbDetailScreen
});

verbListFlow.navigationOptions = {
  title: 'Verbs',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  // loginFlow: createStackNavigator({
  //   Signup: SignupScreen,
  //   Signin: SigninScreen
  // }),
  mainFlow: createBottomTabNavigator({
    verbListFlow,
    VerbCreate: VerbCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
  );
};
