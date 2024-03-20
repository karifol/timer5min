import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ランダム時計</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  headerText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 24,
    marginBottom: 10
  }
})

export default Header
