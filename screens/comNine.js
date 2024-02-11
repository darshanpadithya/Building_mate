import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';


export const Compo9 = ({ navigation }) => {
  const user = [
    { 
        id: '91',
        description :"Float glass uses common glass-making raw materials, typically consisting of sand, soda ash (sodium carbonate), dolomite, limestone, and salt cake " ,
        heading:"Float Glass",
        cost:20,
        source: require('./../images/Glass/pic1.png')

    },
    { 
        id: '92', 
        description :"Shatterproof glass is kind of a catch-all term that can refer to a variety of security glass products. The term can be a bit misleading because what people are usually referring to when they say “shatterproof” is laminated safety and security glass " ,
        heading:"shatterproof glass",
        cost:10,
        source: require('./../images/Glass/pic2.png')
    },
    { 
        id: '93',
        description :"Laminated glass is a type of safety glass consisting of two or more layers of glass with one or more thin polymer interlayers between them which prevent the glass from breaking into large sharp pieces. ",
        heading:"laminated glas:",
        cost:100,
        source: require('./../images/Glass/pic3.png')

    },
    { 
        id: '94', 
        description :"Chromatic Glass is a color vision assistance tool for persons who have difficulty recognizing specific colors or perceiving differences between specific color pairs due to a color vision deficiency. " ,
        heading:"Chromatic glass:",
        cost:250,
        source: require('./../images/Glass/pic4.png')
    },
    { 
        id: '95',
        description :"A chain-link fence  is a type of woven fence usually made from galvanized or linear low-density polyethylene-coated steel wire." ,
        heading:"Extra clear glass ",
        cost:300,
        source: require('./../images/Glass/pic5.png')

    },
    { 
        id: '96',
        description :"Insulated Glass Units (IGUs) feature two panes of glass separated by an inert gas. The layer of gas diffuses heat transfer" ,
        heading:"Insulating glass:", 
        cost:350,
        source: require('./../images/Glass/pic6.png')
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
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Glass Products</Text>
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
export default Compo9;
