import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import { firebase } from '../Firebase/firebase';


export default function FeachData() {
  const [users, setUsers] = useState([]);
  
  const todoRef = firebase.firestore().collection('AAAAA');

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = todoRef.onSnapshot((querySnapshot) => {
        const updatedUsers = [];
        querySnapshot.forEach((doc) => {
          const { heading, text,djhfgjgh } = doc.data();
          updatedUsers.push({
            id: doc.id,
            heading,
            text,
            djhfgjgh,
          });
        });
        setUsers(updatedUsers);
      });

      // Unsubscribe when the component unmounts
      return () => unsubscribe();
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <FlatList
        style={{ height: '100%' }}
        data={users}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={styles.contaner}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.heading}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
              <Text style={styles.itemText}>{item.djhfgjgh}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemHeading: {
    fontWeight: 'bold',
  },
  itemText: {
    fontWeight: '300',
  },
});


