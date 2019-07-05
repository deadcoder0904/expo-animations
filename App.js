import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'

class App extends React.Component {
  constructor() {
    super()
    this.springValue = new Animated.Value(0.3)
  }

  componentDidMount() {
    this.spring()
  }

  spring() {
    this.springValue.setValue(0.3)
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start(() => this.spring())
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ scale: this.springValue }],
          }}
          source={require('./react-native-logo.png')}
        />
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
})

export default App
