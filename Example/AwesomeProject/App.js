/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NativeModules} from 'react-native';
import { requireNativeComponent } from 'react-native';
import { TouchableOpacity } from 'react-native';

var RNDeliverer = NativeModules.RNDeliverer;
var RNDCamera = NativeModules.RNDCamera;

RNDeliverer.setupStreamer((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Successfully configured');
  }
});

RNDCamera.startCamera()
RNDeliverer.addStreamingEndpoint('rtmp://a.rtmp.youtube.com/live2/1jhu-vp8x-p1u8-axev', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Successfully added the streaming endpoint');
  }
});
RNDeliverer.startEncoding()

const RNDCameraView = requireNativeComponent("RNDCameraView")

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RNDCameraView style={ styles.wrapper } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "stretch"
  },
  wrapper: {
    flex: 1, alignItems: "center", justifyContent: "center"
  },
  border: {
    borderColor: "#eee", borderBottomWidth: 1
  },
  button: {
    fontSize: 50, color: "orange"
  }
});
