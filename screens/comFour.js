import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';

export const Compo4 = ({ navigation }) => {
  const user = [
    {
      id: '1',
      description: "WEIRD WOLF Premium and Sturdy 4 STEP Aluminium Ladder  (With Platform, Hand Rail).",
      heading: "Step Ladder",
      cost : 2700,
      source: require('./../images/Ladder/pic1.png')
    },
    {
      id: '2',
      description: "20 Feet 100 Kg Corrosion-resistant Aluminium Self Support Extension Ladder Usage: Industrial.This ladder is made from corrosion-resistant aluminum with spicy-resinous scented wood, thick ridged or square-cracked bark",
      heading: "Extension Ladder",
      cost:9000,
      source: require('./../images/Ladder/pic2.jpg')
    },
    {
      id: '3',
      description: "Aardwolf Quickfit Heavy Duty Aluminium Multi Purpose Extension Ladder 15 (Ft) | Stablizer Aluminium Ladder.",
      cost:10000,
      heading: "Multipurpose Ladders",
      source: require('./../images/Ladder/pic3.png')
    },
    {
      id: '4',
      description: ", Articulated Ladders range in size from 3 to 15 feet maximum. When set up as a Single or Extension Ladder, Articulated Ladders may have a length of no more than 30 feet. oak is a hardwood tree or shrub in .",
      cost:20000,
      heading: "Articulated Ladder",
      source: require('./../images/Ladder/pic4.png')
    },
    {
      id: '5',
      description: "The ladder has wide steps with rubber mats to keep you from slipping. It is designed for your safety and comes with a knee guard to prevent falling while on top of an extra durable platform, a safety clutches lock to keep the platform intact and anti-skid shoes for a firm grip.",
      heading: "Step Cool Ladder",
      cost:2500,
      source: require('./../images/Ladder/pic5.png')
    },
    {
      id: '6',
      description: "Size Diamension: Hieght 10feet, Hieght to step 7'.11  max length 106 , max width 32 , max hieght with side 11 .5 , wieght in kg 184kg.",
      heading: "Attic Ladder",
      cost:3000,
      source: require('./../images/Ladder/pic6.png')
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
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Ladder Products</Text>
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

export default Compo4;