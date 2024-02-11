import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Image,Button ,Text,TouchableOpacity, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from '../Firebase/firebase'; 


let lessthan="<";

const CircleAtTop = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    company: '',
  });

  useEffect(() => {
    // Fetch user data from Firebase database
    const userId = firebase.auth().currentUser.uid;
    const userRef = firebase.firestore().collection('users').doc(userId);

    userRef.get().then((doc) => {
      if (doc.exists) {
        const user = doc.data();
        setUserData(user);
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.error('Error fetching user data:', error);
    });
  }, []);


  return (
    
  <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Text style={styles.arrow}>{lessthan}</Text>
        </TouchableOpacity>

        
      <View style={{marginBottom:'5%'}} >
       
      <Image source={require('./../images/Profile.jpg')} 
        style={styles.image}
      />
        
      </View>

        
        
    <View style={{marginTop:'25%'}}>
       <View style={styles.row}>
          <Text  style={styles.cell} >Name : {userData.name}</Text>
        </View>


        <View style={styles.row}>
          <Text  style={styles.cell} >Age : {userData.age}</Text>
        </View>

        <View style={styles.row}>
          <Text  style={styles.cell} >Email : {userData.email}</Text>
        </View>

        <View style={styles.row}>
          <Text  style={styles.cell} >Company : {userData.company}</Text>
        </View>
     
    </View>
    
    </SafeAreaView>
   </View>   

      

        
      
       
      
    
    
  );
};

const styles = StyleSheet.create({
 container:{
  backgroundColor:"#FFE8C6",
  height:'100%',
  width:'100%',

 },

  image: {
    width: '47%', // Set the image width
    height: '47%',
    borderRadius:700 ,
    justifyContent:'center',
    position:'relative',
    padding:0,
    top:'20%',
    left:'25%',
     // Set the image height
  },
  button:{
    top:'-20%',
    padding:50,
    borderRadius:700,
  },
  row: {
    flexDirection: 'row',
    top:'-50%',
    marginHorizontal: '4%',
    borderWidth:2,
    margin:'4%',
    borderRadius: 50,
    backgroundColor:'#E8F4FF',
    
    
    
    
  },
  cell: {
    
    
    padding: '4%',
    margin: '1%',
    justifyContent:'space-around',
    fontSize:17,
    fontWeight:'bold',
    color:'black',
    
  },
  
    arrow:{
      position:'absolute',
      top:'19%',
      left:'-6%',
      buttoncolor:"black",
      marigin:'3%',
      fontSize:50,
      padding:'12%',
      size:20,
      
    
  },
  
  
  
});

export default CircleAtTop;

