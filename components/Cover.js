import React, { useEffect } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import Color from '../constant/colors'
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const { width, height } = Dimensions.get('screen')
const COVER_HEIGHT = height - 130

const Cover = ({ onPress, isOpen }) => {
  const translateX = useSharedValue(0)
  useEffect(() => {
    translateX.value = withTiming(isOpen ? width : 0)
  }, [isOpen])

  const rCoverStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value }
      ]
    }
  })

  return (
    <AnimatedPressable style={[styles.cover, rCoverStyles]} onPress={onPress}>
      <View style={styles.clip}></View>
      <View style={styles.binding}></View>
    </AnimatedPressable>
  )
}

export default Cover

const styles = StyleSheet.create({
  cover: {
    ...StyleSheet.absoluteFillObject,
    top: 130,
    width: width,
    height: COVER_HEIGHT,
    backgroundColor: Color.red,

  },
  binding: {
    width: 50,
    height: '100%',
    backgroundColor: Color.redDark,
    alignSelf: 'flex-end',
    borderLeftWidth: 2,
  },
  clip: {
    position: 'absolute',
    top: (COVER_HEIGHT / 2) - 60,
    left: -40,
    width: 80,
    height: 80,
    borderWidth: 7,
    borderColor: Color.yellowDark,
    backgroundColor: Color.yellow,
    transform: [
      { rotate: '45deg' },
    ]
  }
})
