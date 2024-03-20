import { View, StyleSheet, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import TextCard from '../components/TextCard'
import TimeCard from '../components/TimeCard'
import Delta from '../components/Delta'

const main = (): JSX.Element => {
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    // 1~10分の乱数を生成
    const random = Math.floor(Math.random() * 10) + 1
    setDelta(random)
  }, [])

  return (
    <View>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <TextCard />
        <TimeCard delta={delta} />
        <Delta delta={delta} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 100
  },
  body: {
    height: Dimensions.get('window').height - 100,
    paddingTop: 200
  }
})

export default main
