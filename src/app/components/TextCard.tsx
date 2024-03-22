import { View, Text, StyleSheet } from 'react-native'

const TextCard = (): JSX.Element => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>1~10分後の時刻が表示されます</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    color: 'rgba(85, 85, 85, 0.5)',
    fontSize: 18
  }
})

export default TextCard
