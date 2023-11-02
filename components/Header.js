import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25
  },
  lightHeader: {
    fontSize: 35
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.lightHeader}>Grab your</Text>
        <Text style={styles.boldHeader}>delicous meal!</Text>
    </View>
  )
}

export default Header;