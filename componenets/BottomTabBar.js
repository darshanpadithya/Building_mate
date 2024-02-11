import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const BottomTabBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Cart")}>
          <View style={styles.button}>
            <Image source={require('./../assets/Cart.png')} style={styles.logoImage} />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={{flex:2,marginHorizontal:'3%'}}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Home")}>
          <View style={styles.button}>
            <Image source={require('./../assets/Home.png')} style={styles.logoImage} />
          </View>
        </TouchableOpacity>      
      </View>

      <View style={{flex:1}}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('contactUs')}>
          <View style={styles.button}>
            <Image source={require('./../assets/Contact.png')} style={styles.logoImage} />
          </View>
        </TouchableOpacity>      
      </View>

      </View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#FFE8C6',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  button: {
    backgroundColor: '#FFDAB9',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderRadius: 20,
   
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
