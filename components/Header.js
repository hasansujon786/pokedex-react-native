import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constant/colors'
const INDICATOR_SIZE = 80
const LIGHT_SIZE = 20


const Header = ({ height }) => {
  return (
    <View style={[styles.header, { height: height }]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.indicatorWrapper} >
          <View style={styles.indicator} />
        </View>
        <View style={styles.lightWrapper}>
          <View style={[styles.light, styles.lightRed]} />
          <View style={[styles.light, styles.lightYellow]} />
          <View style={[styles.light, styles.lightGreen]} />
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
    justifyContent: 'center'
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
