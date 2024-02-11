import HomeScreen from "./screens/Home";
import CircleAtTop from "./screens/Profile";
import CartPage from "./screens/Cart";
import Compo1 from "./screens/comOne";
import Login from "./screens/loginPage";
import FeachData from "./screens/Trials"
import Compo2 from "./screens/comTwo";
import Compo3 from "./screens/comThree";
import Compo4 from "./screens/comFour";
import Compo5 from "./screens/comFive";
import Compo6 from "./screens/comSix";
import PaymentScreen from "./screens/PaymentScreen";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Compo8 from "./screens/comEight";
import Compo7 from "./screens/comSeven";
import Compo9 from "./screens/comNine";
import SlideShow from "./screens/SlideShow";
import LoginSignUp from "./screens/loginSignUp";
import contactUs from "./screens/contactUs";
const Stack = createNativeStackNavigator();
 const App = () =>  {

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []); 

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      

      <Stack.Screen 
          name="loginPage"
          component={Login}
          options={{title: "cart" ,headerShown: false}}
        />
            <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome" ,headerShown: false}}
        />

      <Stack.Screen 
          name="loginSignUp"
          component={LoginSignUp}
          options={{title: "cart" ,headerShown: false}}

        />
      
        <Stack.Screen 
          name="Profile"
          component={CircleAtTop}
          options={{title: "Profile" ,headerShown: false}}

        />
        <Stack.Screen 
          name="Cart"
          component={CartPage}
          options={{title: "cart" ,headerShown: false}}

        />
        <Stack.Screen 
          name="comOne"
          component={Compo1}
          options={{title: "cart" ,headerShown: false}}

        />
        
        <Stack.Screen 
          name="Trials"
          component={FeachData}
          options={{title: "cart" ,headerShown: false}}

        />
        <Stack.Screen 
          name="comTwo"
          component={Compo2}
          options={{title: "cart" ,headerShown: false}}
        />
      
      <Stack.Screen 
          name="comThree"
          component={Compo3}
          options={{title: "Sliding",headerShown: false}}
        />
        <Stack.Screen 
          name="comFour"
          component={Compo4}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="comFive"
          component={Compo5}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="comSix"
          component={Compo6}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="PaymentScreen"
          component={PaymentScreen}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="comSeven"
          component={Compo7}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="comEight"
          component={Compo8}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="comNine"
          component={Compo9}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="SlideShow"
          component={SlideShow}
          options={{title: "cart" ,headerShown: false}}
        />
        <Stack.Screen 
          name="contactUs"
          component={contactUs}
          options={{title: "cart" ,headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;