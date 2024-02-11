import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';


export const Compo2 = ({ navigation }) => {
  const user = [
    { 
        id: '11',
        description :"Wrought iron is an iron alloy with a very low carbon content (less than 0.05%) in contrast to that of cast iron (2.1% to 4%)." ,
        heading:"Wrought Iron",
        cost:4800,
        source: require('./../images/Fencing/pic1.jpg')

    },
    { 
        id: '12', 
        description :"Barbed wire, also known as barb wire, is a type of steel fencing wire constructed with sharp edges or points arranged at intervals along the strands. " ,
        heading:"Barbed Wire",
        cost:400,
        source: require('./../images/Fencing/pic2.jpg')
    },
    { 
        id: '13',
        description :"A synthetic fence, plastic fence or (when made of vinyl) vinyl or PVC fence is a fence made using synthetic plastics, such as vinyl ",
        heading:"Vinyl Fence",
        cost:170,
        source: require('./../images/Fencing/pic3.jpg')

    },
    { 
        id: '14', 
        description :"Steel is an alloy of iron and carbon with improved strength and fracture resistance compared to other forms of iron. Many other elements may be present or added.  " ,
        heading:"Steel",
        cost:250,
        source: require('./../images/Fencing/pic4.jpg')
    },
    { 
        id: '15',
        description :"A chain-link fence  is a type of woven fence usually made from galvanized or linear low-density polyethylene-coated steel wire." ,
        heading:"Chain link ",
        cost:720,
        source: require('./../images/Fencing/pic5.jpg')

    },
    { 
        id: '16',
        description :"An aluminum fence is a fence constructed primarily out of the element aluminium. Due to the metal’s low density and ability to resist corrosion, it has become a popular choice as lightweight, durable fence and railing structure." ,
        heading:"Aluminum", 
        cost:220,
        source: require('./../images/Fencing/pic6.png')
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
    <View style={{ flex: 1, backgroundColor: '#FFE8C6',paddingLeft:'3%',paddingRight:'3%',paddingTop:'5%' }}>
      <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Fencing Products</Text>
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
export default Compo2;
