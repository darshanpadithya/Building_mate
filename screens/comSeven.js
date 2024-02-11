import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';


export const Compo7 = ({ navigation }) => {
  const user = [
    { 
        id: '1',
        description :"All shingles were organic at first with the base material, called felt, being primarily cotton rag until  when cotton rag became more expensive and alternative materials were used. Other organic materials used as the felt included wool, jute or manila, and wood pulp." ,
        heading:"Asphalt shingle Iron",
        cost:150,
        source: require('./../images/Roofing/pic1.jpg')

    },
    { 
        id: '2', 
        description :"Slate is a fine-grained, foliated, homogeneous, metamorphic rock derived from an original shale-type sedimentary rock composed of clay or volcanic ash through low-grade, regional metamorphism. It is the finest-grained foliated metamorphic rock" ,
        heading:"Slate Roof",
        cost:100,
        source: require('./../images/Roofing/pic3.jpg')
    },
    { 
        id: '3',
        description :"Tiles are usually thin, square or rectangular coverings manufactured from hard-wearing material such as ceramic, stone, metal, baked clay, or even glass. They are generally fixed in place in an array to cover roofs, floors, walls, edges, or other objects such as tabletops",
        heading:"Tile Fence ",
        cost:170,
        source: require('./../images/Roofing/pic4.jpg')

    },
    { 
        id: '4', 
        description :"A metal roof is a roofing system featuring metal pieces or tiles exhibiting corrosion resistance, impermeability to water, and long life. It is a component of the building envelope. The metal pieces may be a covering on a structural, non-waterproof roof, or they could be self-supporting sheets. " ,
        heading:"Metal Roof ",
        cost:250,
        source: require('./../images/Roofing/pic5.jpg')
    },
    { 
        id: '5',
        description :"These gutters feature a semicircular design and a curved lip. Due to the rounded design, they feature round downspouts." ,
        heading:"Half-Round Gutters  ",
        cost:220,
        source: require('./../images/Roofing/pic2.png')

    },
    { 
        id: '6',
        description :"These are custom-built gutters that provide a seamless, contemporary look. Fascia gutters need to be installed by a professional who will work with you to create a custom-built system made of one long piece of aluminum. " ,
        heading:"Custom Fascia Gutters", 
        cost:250,
        source: require('./../images/Roofing/pic6.jpg')
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
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Roofing Products</Text>
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
export default Compo7;