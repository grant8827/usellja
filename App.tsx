import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Home from './Home';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
