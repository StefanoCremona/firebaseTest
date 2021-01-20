/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const myMethod = async () => {
  console.log(
    'myMethod: ',
    'isDeviceRegisteredForRemoteMessages',
    firebase.messaging().isDeviceRegisteredForRemoteMessages,
  );

  try {
    console.log('myMethod: ', 'call get token');
    const pushToken = await firebase.messaging().getToken();
    console.log(
      'registerDeviceForRemoteMessages: ',
      'setErrorUser',
      'got token',
      pushToken,
    );
    /* const { status, settings } = await checkNotifications()
    console.log('Notification status: ', status)
    sentrySetup(accessToken, decoded, status, pushToken) */
  } catch (error) {
    console.log('myMethod: ', 'Error after getToken: ', error);
  }
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.getToken}>
              <TouchableOpacity onPress={myMethod}>
                <Text>Get Token</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  getToken: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  }
});

export default App;
