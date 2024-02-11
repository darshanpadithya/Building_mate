import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';

export const Compo5 = ({ navigation }) => {
  const user = [
    {
      id: '1',
      description: "Burnt clay bricks are also known as common bricks because they are the most abundant brick type in modern construction. These bricks are used in columns, walls, foundations, and more with a wide variety of purposes",
      heading: "Burnt Clay Bricks",
      cost:120,
      source: require('./../images/Bricks/pic1.jpg')
    },
    {
      id: '2',
      description: ". The bricks comprise a mixture of loamy soil, water, and straw; they also might include manure, clay, or sand to improve their strength and prevent the bricks from cracking.",
      heading: "Sun-Dried Clay Bricks",
      cost:250,
      source: require('./../images/Bricks/pic2.jpg')
    },
    {
      id: '3',
      description: "Typically used in internal brickwork or to make facades and fences, these bricks are made from solid concrete. The concrete is poured into custom molds, allowing manufacturers to create a variety of sizes and shapes. ",
      heading: "Concrete Bricks",
      cost:300,
      source: require('./../images/Bricks/pic3.jpg')
    },
    {
      id: '4',
      description: ". Engineering bricks also have a low absorption capacity, meaning that they cannot absorb a significant amount of moisture, which helps to ensure that the bricks don’t crack, crumble, or leak.",
      heading: "Engineering Bricks",
      cost:400,
      source: require('./../images/Bricks/pic4.jpg')
    },
    {
      id: '5',
      description: "Made using a mixture of sand, lime, and possibly a color pigment to alter the final appearance of the brick, sand lime bricks have a high compressive strength, so they are a common option for load-bearing walls in houses and multi-storied buildings",
      heading: "Sand Lime Bricks",
      cost:450,
      source: require('./../images/Bricks/pic5.jpg')
    },
    {
      id: '6',
      description: "Fly ash is a byproduct produced by coal-fired power plants that can contain toxic metals like mercury, arsenic, antinomy, and chromium. ",
      heading: "Fly Ash Bricks",
      cost:650,
      source: require('./../images/Bricks/pic6.jpg')
    },
  ];

  const userId = firebase.auth().currentUser.uid;
  const db = firebase.firestore();
  
  const addToCart = (item) => {
    const cartsCollection = db.collection('users').doc(userId).collection('cart').doc('cartdetails');
  
    cartsCollection.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          cartsCollection.update({
            items: firebase.firestore.FieldValue.arrayUnion(item)
          })
          .then(() => {
            console.log('Item added to Firestore');
            alert('Item added to cart!');
          })
          .catch((error) => {
            console.error('Error adding item to Firestore: ', error);
            alert('Failed to add item to cart');
          });
        } else {
          cartsCollection.set({
            items: [item]
          })
          .then(() => {
            console.log('Item added to Firestore');
            alert('Item added to cart!');
          })
          .catch((error) => {
            console.error('Error adding item to Firestore: ', error);
            alert('Failed to add item to cart');
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching document: ', error);
        alert('Failed to add item to cart');
      });
  };
  

  const renderItem = ({ item }) => (
    <View>
      <Text style={{ fontSize: 30 }}>{item.heading}</Text>
      <Image
        style={styles.image}
        source={item.source}
        resizeMode="cover"
      />
      <Text>{item.description}</Text>
      <View style={{marginVertical:5,backgroundColor:'#F8BA83',borderRadius:50,width:75,paddingLeft:10}}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }} >$ {item.cost}</Text>
      </View>

      <Button title='Add to the cart' onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFE8C6',paddingLeft:'3%',paddingRight:'3%',paddingTop:'10%' }}>
      <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Bricks Products</Text>
        <FlatList
          data={user}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
        <View style={styles.bottomTabBar}>
          <BottomTabBar navigation={navigation} />
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '3%',
    marginTop: '3%',
    
  },
  image: {
    width: 400,
    height: 250,
  },
  flatListContainer: {
    flexGrow: 1,
    paddingBottom: 80, // Adjust this value according to your BottomTabBar height
  },

  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF', // Change this color according to your design
    // Other styles for your BottomTabBar
  },
});

export default Compo5;