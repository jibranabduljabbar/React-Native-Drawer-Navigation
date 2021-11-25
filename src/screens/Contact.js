import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function Contact({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text style={{fontWeight: "900",fontFamily: "Cursive",margin: 20}}>Contact</Text>
         <Text> </Text>
         <Button onPress={() => navigation.goBack()} color="#F44336" title="Back" />
         <Text> </Text>
        <Button onPress={() => navigation.openDrawer()} color="#E91E63" title="Drawer" />
        <Text> </Text>
        <Button title="Toggle drawer" color="#9C27B0" onPress={() => navigation.toggleDrawer()} />

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
