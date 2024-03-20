import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

interface Props {
  delta: number
}

const Delta = (props: Props): JSX.Element => {
  const [display, setDisplay] = useState(false)
  const { delta } = props

  const handlePress = (): void => {
    setDisplay(!display)
  }

  return (
    <View style={styles.card}>
      <Button title="何分前か確認する" onPress={() => { handlePress() }} />
      {display && <Text>{delta}分前</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Delta
