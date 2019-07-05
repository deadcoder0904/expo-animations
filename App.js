import React from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import { Button, Text } from 'react-native-elements'

const screenWidth = Dimensions.get('screen').width

class App extends React.Component {
  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  animate(easing) {
    this.animatedValue.setValue(0)
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing,
    }).start()
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, screenWidth - 100],
    })

    return (
      <SafeAreaView style={styles.flex}>
        <StatusBar hidden />
        <Text h2 style={styles.h2}>
          Easing Animations
        </Text>
        <Animated.View style={[styles.box, { marginLeft }]} />
        <ScrollView>
          <View style={[styles.flex, styles.container]}>
            {/* Step 0 returns to final state 0 steps (instantly), does not wait till duration ends (1000ms) */}
            <Btn title="Step 0" onPress={() => this.animate(Easing.step0)} />
            {/* Step 1 returns to final state in 1 step but waits till the duration ends (1000ms) */}
            <Btn title="Step 1" onPress={() => this.animate(Easing.step1)} />
            {/* Linear goes at same speed from start to end */}
            <Btn title="Linear" onPress={() => this.animate(Easing.linear)} />
            {/* Ease starts slowly at start & increases speed gradually till the end */}
            <Btn title="Ease" onPress={() => this.animate(Easing.ease)} />
            {/* Quad means position of the box equals square of elapsed time */}
            <Btn title="Quad" onPress={() => this.animate(Easing.quad)} />
            {/* Cubic means position of the box equals cube of elapsed time */}
            <Btn title="Cubic" onPress={() => this.animate(Easing.cubic)} />
            {/* Poly means position of the box equals Nth power of elapsed time */}
            <Btn title="Poly" onPress={() => this.animate(Easing.poly(4))} />
            {/* Sin goes according to the sinusoidal wave */}
            <Btn title="Sin" onPress={() => this.animate(Easing.sin)} />
            {/* Circle goes according to the circular function */}
            <Btn title="Circle" onPress={() => this.animate(Easing.circle)} />
            {/* Exp goes according to the exponential curve */}
            <Btn title="Exp" onPress={() => this.animate(Easing.exp)} />
            {/* Elastic is similar to a spring oscillating back and forth */}
            <Btn title="Elastic" onPress={() => this.animate(Easing.elastic(1))} />
            {/* Back should be used with `Animated.parallel()` to create an effect where the object animates back slightly as the animation starts */}
            <Btn title="Back" onPress={() => this.animate(Easing.back(1.70158))} />
            {/* Bounce provides a simple bouncing effect */}
            <Btn title="Bounce" onPress={() => this.animate(Easing.bounce)} />
            {/* Bezier provides a cubic bezier curve */}
            <Btn title="Bezier" onPress={() => this.animate(Easing.bezier(0.5, 0.1, 0.7, 1))} />
            {/* In runs an easing function forwards */}
            <Btn title="In" onPress={() => this.animate(Easing.in(Easing.quad))} />
            {/* Out runs an easing function backwards */}
            <Btn title="Out" onPress={() => this.animate(Easing.out(Easing.quad))} />
            {/* In Out makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration */}
            <Btn title="In Out" onPress={() => this.animate(Easing.inOut(Easing.quad))} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const Btn = props => <Button type="outline" buttonStyle={styles.btn} {...props} />

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    marginTop: 25,
    textAlign: 'center',
  },
  box: {
    margin: 25,
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
  btn: {
    width: 150,
    margin: 10,
  },
})

export default App
