import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Compo1 = ({ navigation }) => {
  const user = [
    {
      id: '1',
      description: "A pine is any conifer tree or shrub in the genus Pinus of the family Pinaceae.",
      heading: "Pine",
      cost: 800,
      source: require('./../images/Lumber/lum1.png')
    },
    {
      id: '2',
      description: "Cedrus with spicy-resinous scented wood, thick ridged or square-cracked bark",
      heading: "Cedar",
      cost: 2200,

      source: require('./../images/Lumber/lum2.png')
    },
    {
      id: '3',
      description: "Walnut trees are any species of tree the type genus of the family Juglandaceae",
      heading: "Walnut",
      cost: 2200,
      source: require('./../images/Lumber/lum3.jpg')
    },
    {
      id: '4',
      description: "An oak is a hardwood tree or shrub in the genus Quercus of the beech family.",
      heading: "Oak",
      cost: 500,
      source: require('./../images/Lumber/lum4.jpg')
    },
    {
      id: '5',
      description: "A birch is a thin-leaved deciduous hardwood tree of the genus Betula,",
      heading: "Birch",
      cost: 1200,
      source: require('./../images/Lumber/lum5.jpg')
    },
    {
      id: '6',
      description: "Meliaceae. Mahogany is used commercially for a wide variety of goods",
      heading: "Mahogany",
      cost: 2200,
      source: require('./../images/Lumber/lum6.jpg')
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
    <View style={{ flex: 1, backgroundColor: '#FFE8C6',paddingLeft:'3%',paddingRight:'3%' }}>
      <View style={{ flex: 1 }}>
      <SafeAreaView>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Lumber Products</Text>
      </SafeAreaView>

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

export default Compo1;
