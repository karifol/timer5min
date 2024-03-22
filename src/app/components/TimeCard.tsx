import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

interface Props {
  delta: number
}

const TimeCard = (props: Props): JSX.Element => {
  const { delta } = props
  const [TimeStr, setTimeStr] = useState('00時00分00秒')

  setTimeout(() => {
    const now = new Date()
    now.setMinutes(now.getMinutes() + delta)
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    setTimeStr(`${hours}時${minutes}分${seconds}秒`)
  }, 1000)

  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{TimeStr}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    color: '#000000',
    fontSize: 45
  }
})

export default TimeCard
