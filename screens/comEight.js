import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';


export const Compo8 = ({ navigation }) => {
  const user = [
    { 
        id: '81',
        description :"Aluminum hardware is a crucial and popular hardware component that is part of any residential or commercial space." ,
        heading:"Aluminum hardware",
        cost:500,
        source: require('./../images/Hardware/pic1.png')

    },
    { 
        id: '82', 
        description :"These are some of the most used hardware products and components in any home, and at McCoyMart, we have a big portfolio of cabinet and furniture products for you to use. " ,
        heading:"Cabinet and furniture hardware",
        cost:5699,
        source: require('./../images/Hardware/pic2.png')
    },
    { 
        id: '83',
        description :"Door hardware is another popular range of products to look out for where you can access the best door hardware. ",
        heading:"Door Hardware",
        cost:1367,
        source: require('./../images/Hardware/pic3.png')

    },
    { 
        id: '84', 
        description :"Steel is an alloy of iron and carbon with improved strength and fracture resistance compared to other forms of iron. Many other elements may be present or added.  " ,
        heading:"Fasteners",
        cost:2500,
        source: require('./../images/Hardware/pic4.png')
    },
    { 
        id: '85',
        description :"Glass fittings and hardware If your home is filled with glass hardware, you’d know that getting the right glass fittings and equipment is essential to ensure the glass stays fixed." ,
        heading:"Glass fittings",
        cost:2959,
        source: require('./../images/Hardware/pic5.png')
    },
    { 
        id: '86',
        description :"STANLEY STHT36127-812 5 Meter Plastic Short Measuring Tape for Home, DIY, Professional & Industrial Use, YELLOW & BLACK" ,
        heading:"Meter Measuring Tape", 
        cost:320,
        source: require('./../images/Hardware/pic6.png')
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
      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Hardware Products</Text>
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
export default Compo8;
