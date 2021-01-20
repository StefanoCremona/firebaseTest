/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';

firebase.messaging().registerDeviceForRemoteMessages();

AppRegistry.registerComponent(appName, () => App);
