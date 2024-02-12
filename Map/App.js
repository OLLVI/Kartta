import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Map from './screens/Map';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

    <Map/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' && Constants.statusBarHeight ? Constants.statusBarHeight : 0,
  },
});
