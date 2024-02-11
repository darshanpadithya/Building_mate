import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { Button } from 'react-native-elements';

export default function contactUs({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{    alignItems:'center',}}>
      <Image source={require('./../assets/conlogo.png')} style={styles.logo} />
      </View>


 
      <View style={styles.contactInfo}>
        <FontAwesome name="phone" size={24} color="#444" style={styles.icon} />
        <View>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.infoText}>+91 9591336375</Text>
        </View>
      </View>

      <View style={styles.contactInfo}>
        <FontAwesome name="envelope" size={24} color="#444" style={styles.icon} />
        <View>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.infoText}>builtmate2023@gmail.com</Text>
        </View>
      </View>

      <View style={styles.contactInfo}>
        <FontAwesome name="instagram" size={27} color="#444" style={styles.icon} />
        <View>
          <Text style={styles.label}>Instagram:</Text>
          <Text style={styles.infoText}>@builtmate</Text>
        </View>
      </View>

      <View style={styles.contactInfo}>
        <FontAwesome name="facebook" size={27} color="#444" style={[styles.icon,styles.face]} />
        <View>
          <Text style={styles.label}>Facebook:</Text>
          <Text style={styles.infoText}>builtmate</Text>
        </View>
      </View>

      <View style={styles.contactInfo}>
        <FontAwesome name="map-marker" size={27} color="#444" style={[styles.icon,styles.face]} />
        <View>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.infoText}>1234 Street Name, City, Country</Text>
        </View>
      </View>


      <View style={{width: '100%',}}>
      <Button title='Go back' onPress={() => navigation.navigate("Home")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFE8C6',
    paddingTop:'20%',
    paddingLeft:'10%',
    paddingRight:'10%',
    

  },
 
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  icon: {
    marginRight: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
  logo:{
    width:'100%',
    height:80,
    resizeMode:'contain',
    marginBottom:'20%',

  },
  face:{
    marginLeft:5,

  },
});
