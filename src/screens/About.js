import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function About({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: "900",fontFamily: "Cursive",margin: 20}}>About</Text>
        <Text> </Text>
        <Button onPress={() => navigation.goBack()} color="#F44336" title="Back" />
        <Text> </Text>
        <Button onPress={() => navigation.openDrawer()} color="#E91E63" title="Drawer" />
        <Text> </Text>
        <Button onPress={() => navigation.toggleDrawer()} color="#9C27B0" title="Toggle Drawer" />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
