import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Header from './components/Header/'
import Card from './components/Card/'
import Button from './components/Button/'
import Text from './components/Text/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    <Header title="Title" leftIcon="menu" />
    <Text style={styles.title}>React Native</Text>
    <ScrollView>
      <Card title="Card Title">Card Content</Card>
      <Card title="Card Title">Card Content</Card>
      <Button title="Button" />
      <Text>Text View</Text>
    </ScrollView>
  </View>
)

export default App
