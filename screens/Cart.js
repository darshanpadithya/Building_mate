import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { firebase } from '../Firebase/firebase';
import 'firebase/firestore';
import BottomTabBar from '../componenets/BottomTabBar';

export const CartPage = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, settotalCost] = useState(0);
  
  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const cartsCollection = db.collection('users').doc(userId).collection('cart').doc('cartdetails');
  
    cartsCollection.get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const cartItems = data.items || [];
          setCartItems(cartItems);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.cost; 
    });
    settotalCost(total);
  }, [cartItems]);
  
  const deleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    const deletedItem = updatedCartItems.splice(index, 1)[0];

    
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const cartsCollection = db.collection('users').doc(userId).collection('cart').doc('cartdetails');

    cartsCollection.get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const newItems = data.items.filter(item => item.id !== deletedItem.id);
          cartsCollection.update({ items: newItems })
            .then(() => {
              console.log('Item removed from Firestore');
            })
        }
      })


    setCartItems(updatedCartItems);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
      <View style={{flexDirection: 'row' }}>

        <Text style={styles.title}>Cart Items</Text>
        <Text style={styles.cost}> ${totalCost}</Text></View>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 30 }}>{item.heading}</Text>
              <Image
                style={styles.image}
                source={item.source}
                resizeMode="cover"
              />
              <Text>{item.description}</Text>
              <View style={{flexDirection:'row'}} >
                <View style={{ marginVertical: 5, backgroundColor: '#F8BA83', borderRadius: 50, width: 80, paddingLeft: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$ {item.cost}</Text>
                </View>

                <TouchableOpacity style = {styles.deleteItem} onPress={() => deleteItem(item)}>
                <Text style = {styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.proceed_to_buy} onPress={() => navigation.navigate("PaymentScreen")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Proceed to pay ${totalCost}</Text>
          </View>
        </TouchableOpacity>
        <BottomTabBar navigation={navigation} />
      </View>
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8C6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 10,
  },
  image: {
    width: 400,
    height: 250,
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    flex:1,
  },
  flatListContainer: {
    flexGrow: 1,
    paddingBottom: 115, 
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },

  button: {
    borderRadius: 20,
    width: '50%',
    backgroundColor: 'lightblue',

  },
  proceed_to_buy:{
    backgroundColor:'#FFE8C6',
    alignItems: 'center',
  },
  cost:{
    fontSize:20 ,fontWeight:'bold' ,    backgroundColor: 'gold', 
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    right: 0,

  },
  deleteItem:{
   
    backgroundColor: '#4F54DC',
    paddingHorizontal: 10,
    paddingTop: 3,
    position:'absolute',
    right: 0,

  },
  deleteText:{
    fontSize:20 ,
    fontWeight:'bold' ,
    paddingHorizontal: 20,
    color:'white',

  },
});

export default CartPage;