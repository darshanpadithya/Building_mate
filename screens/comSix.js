import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';


export const Compo6 = ({ navigation }) => {
  const user = [
    {
      id: '1',
      description: " OPC is suitable for most general concrete jobs and mortar or stucco construction projects.",
      heading: "Ordinary Portland cement ",
      cost:210,
      source: require('./../images/cements/pic1.jpg')
    },
    {
      id: '2',
      description: "it has a higher resistance to various chemical reactions within concrete. PPC is often used for projects like bridges, piers, dams, marine structures, sewage works or underwater concrete projects.",
      heading: "Portland pozzolana cement ",
      cist:270,
      source: require('./../images/cements/pic2.png')
    },
    {
      id: '3',
      description: "Rapid-hardening cement may have an increased lime content, combined with a finer grinding process, or better strength development.",
      heading: "Rapid-hardening cement",
      cost:250,
      source: require('./../images/cements/pic3.png')
    },
    {
      id: '4',
      description: "Quick-setting cement may be beneficial for time-sensitive projects or those located near stagnant or running water.",
      heading: "Quick-setting cement",
      cost:300,
      source: require('./../images/cements/pic5.jpg')
    },
    {
      id: '5',
      description: "Manufacturers produce low-heat cement by monitoring the percentage of tricalcium aluminate in the mixture to ensure it stays below 6% of the whole. This helps maintain low heat during the hydration process, making this cement type more resistant to sulfates and less reactive than other types of cement",
      heading: "Low heat cement",
      cost:270,
      source: require('./../images/cements/pic6.png')
    },
    {
      id: '6',
      description: "Sulphate-resisting cement helps reduce the risk of sulfate side effects on concrete. Its most common use is for constructing foundations in soil with high sulfate content. This concrete type can also be beneficial for projects like canal linings, culverts and retaining walls.",
      heading: "Sulphate-resisting cement furnace slag cement",
      cost:250,
      source: require('./../images/cements/pic7.jpg')
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
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Cements Products</Text>
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

export default Compo6;