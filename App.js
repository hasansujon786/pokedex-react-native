import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Pressable, View, SafeAreaView } from 'react-native';

import Header from './components/Header'
import Cover from './components/Cover'
import Display from './components/Display'
import Colors from './constant/colors'
import { DISPLAY_MARGIN } from './constant/shared'

export default function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false)
  const handleCoverToggle = () => {
    setIsCoverOpen(v => !v)
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Pressable style={{ flex: 1, padding: 10, paddingBottom: 0 }} onPress={handleCoverToggle}>
        <View style={{ backgroundColor: Colors.red, flex: 1 }}>
          <Display />
          <View style={styles.greenBox} />
        </View>
      </Pressable>

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
  greenBox: {
    width: 160,
    height: 88,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: Colors.greenDark,
    backgroundColor: Colors.green,
    marginLeft: DISPLAY_MARGIN,
  },
});
