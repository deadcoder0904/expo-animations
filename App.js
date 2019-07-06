import React from 'react'
import { Animated, StatusBar, StyleSheet, View } from 'react-native'

const arr = Array.from(Array(500).keys())

class App extends React.Component {
  constructor() {
    super()
    this.animatedValue = []
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    Animated.sequence(
      arr.map(item => {
        return Animated.timing(this.animatedValue[item], {
          toValue: 1,
          duration: 50,
        })
      }),
    ).start()
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedValue[a],
            height: 20,
            width: 20,
            backgroundColor: 'tomato',
            margin: 2,
          }}
        />
      )
    })
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {animations}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default App
