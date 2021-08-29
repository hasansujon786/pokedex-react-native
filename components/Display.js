import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

import Colors from '../constant/colors'
import { DISPLAY_MARGIN } from '../constant/shared'

const { width } = Dimensions.get('screen')
const DISPLAY_WIDTH = width - 16 - (DISPLAY_MARGIN * 2)
const DISPLAY_PADDING = 36
const DOT_SIZE = 14

const Display = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dotWrapper}>
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.screen}>
        <Image
          resizeMode='contain'
          source={{ uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c319.png' }}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
      <View style={styles.lineWrapper}>
        <View style={[styles.line, { width: 58 }]} />
        <View style={[styles.line, { width: 52 }]} />
        <View style={[styles.line, { width: 57 }]} />
        <View style={[styles.line, { width: 60 }]} />
      </View>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
  container: {
    margin: DISPLAY_MARGIN,
    height: DISPLAY_WIDTH * 0.80,
    width: DISPLAY_WIDTH,
    padding: DISPLAY_PADDING,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  dotWrapper: {
    ...StyleSheet.absoluteFillObject,
    height: DISPLAY_PADDING,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: 'white',
    marginHorizontal: 8,
    borderWidth: 1,
    backgroundColor: Colors.red,
    borderColor: Colors.redDark
  },
  screen: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 5,
    backgroundColor: Colors.blueLight,
    // backgroundColor: '#000',
    borderColor: Colors.blueLightAlt,
    borderBottomWidth: 0,
  },
  lineWrapper: {
    position: 'absolute',
    height: DISPLAY_PADDING,
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: 0,
    right: DISPLAY_PADDING,
  },
  line: {
    marginVertical: 1.3,
    height: 3,
    backgroundColor: Colors.gray,
  }
})
