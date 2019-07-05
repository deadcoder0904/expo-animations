import React from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'

class App extends React.Component {
  constructor() {
    super()
    this.opacityValue = new Animated.Value(0)
    this.translateValue = new Animated.Value(0)
    this.scaleValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.opacityValue.setValue(0)
    this.translateValue.setValue(0)
    this.scaleValue.setValue(0)

    Animated.parallel([
      Animated.timing(this.opacityValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
      }),
      Animated.timing(this.translateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        delay: 1000,
      }),
      Animated.timing(this.scaleValue, {
        toValue: 1,
        friction: 1,
        delay: 2000,
      }),
    ]).start()
  }

  render() {
    const opacity = this.opacityValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1],
    })
    const translate = this.translateValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [0, 50, 100, -50, -100, 0],
    })
    const scale = this.scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 3],
    })
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity,
          }}
        >
          <Text style={styles.text}>Opaque Animation</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateX: translate }],
          }}
        >
          <Text style={styles.text}>Translate Animation</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ scale: this.scaleValue }],
          }}
        >
          <Text style={styles.text}>Spring Animation</Text>
        </Animated.View>
        <View style={styles.btnContainer}>
          <Button color="tomato" title="Restart Animation" onPress={() => this.animate()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
  btnContainer: {
    marginVertical: 20,
  },
})

export default App
