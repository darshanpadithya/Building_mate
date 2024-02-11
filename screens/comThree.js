import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';

export const Compo3 = ({ navigation }) => {
  const user = [
    {
      id: '31',
      description: "Stucco or render is a construction material made of aggregates, a binder, and water. Stucco is applied wet and hardens to a very dense solid. ",
      heading: "Stucco",
      cost:475,
      source: require('./../images/Siding/pic1.jpg')
    },
    {
      id: '32',
      description: "Wood is a structural tissue found in the stems and roots of trees and other woody plants. It is an organic material a natural composite of cellulose fibers that are strong in tension ",
      heading: "Wood",
      cost:600,

      source: require('./../images/Siding/pic7.jpg')
    },
    {
      id: '33',
      description: "A brick is a type of construction material used to build walls, pavements and other elements in masonry construction.",
      heading: "Brick",
      cost:100,

      source: require('./../images/Siding/pic3.jpg')
    },
    {
      id: '34',
      description: "Vinyl siding is plastic exterior siding for houses and small apartment buildings, used for  imitating wood clapboard",
      heading: "Vinyl Siding",
      cost:350 ,
      source: require('./../images/Siding/pic4.jpg')
    },
    {
      id: '35',
      description: "A stone is a piece of rock. It is a mass of hard, compacted mineral. The word is often used to mean a small piece of rock.",
      heading: "Stone",
      cost:50 ,
      source: require('./../images/Siding/pic5.jpg')
    },
    {
      id: '36',
      description: "In fibre cement there is a fibre reinforcement, which contributes to making the fibre-cement material even stronger.",
      heading: "Fibre Cement",
      cost:150 ,
      source: require('./../images/Siding/pic6.jpg')
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
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Siding Products</Text>
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
    paddingBottom: 80,
  },

  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF', 
  },
  
});

export default Compo3;
