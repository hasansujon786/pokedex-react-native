import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

import Colors from '../constant/colors'
import { HEADER_SIZE } from '../constant/shared'

const INDICATOR_SIZE = 80
const LIGHT_SIZE = 20

const Header = ({ isFlashLightOn, isLoading }) => {
  const indicatorOpacity = useSharedValue(1)

  useEffect(() => {
    if (isFlashLightOn) {
      indicatorOpacity.value = withRepeat(
        withTiming(0.5, { duration: 250 }),
        -1,
        true
      )
    } else {
      indicatorOpacity.value = withTiming(1, { duration: 250 })
    }
  }, [isFlashLightOn])

  const rStyles = useAnimatedStyle(() => {
    return {
      opacity: indicatorOpacity.value,
    };
  })

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.indicatorWrapper} >
          <Animated.View style={[styles.indicator, rStyles]} />
        </View>
        <View style={styles.lightWrapper}>
          <View style={[styles.light, styles.lightRed]} />
          <View style={[styles.light, styles.lightYellow]} />
          <View style={[styles.light, styles.lightGreen]} />
          <View style={{ flex: 1 }} />
          {isLoading && <View style={[styles.light, styles.lightRed]} />}
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.red,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    justifyContent: 'center',
    height: HEADER_SIZE,
  },
  indicatorWrapper: {
    backgroundColor: Colors.blue,
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  indicator: {
    backgroundColor: Colors.blueDark,
    width: INDICATOR_SIZE * 0.55,
    height: INDICATOR_SIZE * 0.55,
    borderRadius: INDICATOR_SIZE * 0.55,
  },
  lightWrapper: {
    flexDirection: 'row',
    marginLeft: 20,
    flex: 1,
  },
  light: {
    width: LIGHT_SIZE,
    height: LIGHT_SIZE,
    borderRadius: LIGHT_SIZE,
    backgroundColor: 'white',
    marginRight: 8,
    borderWidth: 1,
  },
  lightRed: {
    backgroundColor: Colors.red,
    borderColor: Colors.redDark
  },
  lightYellow: {
    backgroundColor: Colors.yellow,
    borderColor: Colors.yellowDark
  },
  lightGreen: {
    backgroundColor: Colors.green,
    borderColor: Colors.greenDark,
  }
});
