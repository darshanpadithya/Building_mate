import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import BottomTabBar from '../componenets/BottomTabBar';
import SlideShow from './SlideShow';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({navigation} ) {

  return (
    <View style={styles.container}>
<SafeAreaView style={{marginBottom:'2%'}}>
      <View style={styles.testBox}>
        <TouchableOpacity    onPress={()=> navigation.navigate("loginPage")} style={styles.transparentButton}>
          <Text style={styles.buttonText1}>About Us</Text>
        </TouchableOpacity>
          <View style={{    flex: 1}}>
        <TouchableOpacity onPress={ ()=> navigation.navigate("Profile")} style={styles.transparentButton1}>
          <Text style={styles.buttonText1}>Profile</Text>
        </TouchableOpacity>
        </View>

      </View>
      </SafeAreaView>

      <View style={styles.slide}>
        <SlideShow/>   
      </View>


    <View style={{flex:1,}}>
      <Text style={styles.components1}>MATERIALS</Text>

      <View style={styles.borders}>
        <View style={styles.comimages}>
          <TouchableOpacity onPress={()=> navigation.navigate("comOne")}  style={styles.tou}><Image source={require('./../images/com1.png')} style={styles.compo} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("comTwo")}  style={styles.tou}><Image source={require('./../images/com2.png')} style={styles.compo} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("comThree")}style={styles.tou}><Image source={require('./../images/com3.png')} style={styles.compo} /></TouchableOpacity>
        </View>

        <View style={styles.comimages}>
          <TouchableOpacity onPress={()=> navigation.navigate("comFour")} style={styles.tou}><Image source={require('./../images/com4.png')} style={styles.compo} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("comFive")} style={styles.tou}><Image source={require('./../images/com5.png')} style={styles.compo} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("comSix")}  style={styles.tou}><Image source={require('./../images/com6.png')} style={styles.compo} /></TouchableOpacity>
        </View>

        <View style={styles.comimages}>
          <TouchableOpacity onPress={()=> navigation.navigate("comSeven")}  style={styles.tou}><Image source={require('./../images/com7.png')} style={styles.compo} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("comEight")} style={styles.tou}><Image source={require('./../images/com8.png')} style={styles.compo} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("comNine")}  style={styles.tou}><Image source={require('./../images/com9.png')} style={styles.compo} /></TouchableOpacity>
        </View>
      </View>
</View>


      <View style={{position: 'absolute',bottom: 0,width: '100%',}}>
      <BottomTabBar  navigation={navigation}/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE8C6',
    flex: 1,
  },
  testBox: {
    fontSize: 20,
    color: 'black',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  slide:{
    height: 250,     
    alignItems: 'center',

  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFE8C6',
    padding: 10,
  },


  comimages: {
    justifyContent: 'center',
    paddingTop: '3%',
    paddingBottom: '2%',
    paddingLeft: '5%',
    paddingRight: '11%',
    flexDirection: 'row',
    width: '100%',

  },
  compo: {
    borderRadius: 30,

    height:'100%',
    width:'100%',

    marginLeft: 10,
    marginRight: 10,
  },
  tou:{
    height:80,
    width:90,
    marginHorizontal:'3%',
  },
  components1: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  borders: {
    borderRadius: 30,
    backgroundColor: '#F8D097',
    marginLeft: '4%',
    marginRight: '4%',
    paddingTop: '2%',
    marginTop: '2%',
    marginBottom: '3%',
    paddingBottom: '3%',
  },
  compNames: {
    marginHorizontal: '3%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },

  transparentButton: {
    backgroundColor: '#E8F4FF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText1: {
    fontSize: 16,
    color: 'black',
  },

  transparentButton1: {
    backgroundColor: '#E8F4FF', 
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    right: 0,
    
    
  },
  button: {
    borderRadius: 20,

    width: '100%',
    alignItems: 'center',
    backgroundColor: '#E8F4FF',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,

    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },

});


