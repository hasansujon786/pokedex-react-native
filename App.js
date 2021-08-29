import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, Pressable, View, SafeAreaView } from 'react-native';
import Header from './components/Header'
import Cover from './components/Cover'

import Colors from './constant/colors'
const HEADER_SIZE = 130

export default function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false)
  const handleCoverToggle = () => {
    setIsCoverOpen(v => !v)
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Header height={HEADER_SIZE} />
      <Pressable style={{ flex: 1 }} onPress={handleCoverToggle}>
        <Text>Open up App.js to start working on your app!</Text>
      </Pressable>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Cover isOpen={isCoverOpen} onPress={handleCoverToggle} />
      <StatusBar hidden style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.redDark
  },
});
