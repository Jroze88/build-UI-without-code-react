import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Header from './components/Header/'
import Text from './components/Text/'
import Card from './components/Card/'
import Button from './components/Button/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContentContainer: {
    padding: 8,
  },  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
})

const App = () => (
  <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    <Header
      title="Favourites"
      leftIcon="menu"
      rightIcon="image"
      placement="center"
      backgroundColor="darksalmon"
      foregroundColor="white"
    />
    <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <Text color="crimson" fontSize="24" textAlign="left" fontWeight="bold">
        Favourite Pictures
      </Text>
      <Card title="Trees" image="https://picsum.photos/200/300" />
      <Card title="Plants" image="https://picsum.photos/200/300" />
      <Card title="Flowers" image="https://picsum.photos/200/300" />
      <Button title="See More" color="crimson" icon="" type="outlined" />
    </ScrollView>
  </View>
)

export default App
