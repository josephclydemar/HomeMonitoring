import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';

import Header from './components/Header';
import Search from './components/Search';
import CategoryItem from './components/CategoryItem';

const food = [
  {
    name: 'Burger',
    image: require('./assets/images/hamburger.png')
  },
  {
    name: 'Pizza',
    image: require('./assets/images/pizza.png')
  },
  {
    name: 'Cake',
    image: require('./assets/images/cake.png')
  },
  {
    name: 'Orange Juice',
    image: require('./assets/images/orange-juice.png')
  },
  {
    name: 'Beef Steak',
    image: require('./assets/images/steak.png')
  }
];


export default function App() {

  return (
    <View>
      <Header />
      <Search />
      <FlatList 
        data={food}
        renderItem={({ item }) => {
          return <CategoryItem 
                    name={item.name}
                    image={item.image} />;
          }}
        horizontal
        />
      <View>
        <Text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
        <StatusBar style="auto" />
        <Button title='Open Door'/>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
