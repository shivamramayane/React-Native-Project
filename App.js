import React from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import Course from './src/screens/Course';
import CourseDetails from './src/screens/CourseDetails';
const App = () => {
  const Stack = createNativeStackNavigator();
  return(

<NavigationContainer>
  <Stack.Navigator initialRouteName='Home '>
   {/* home screen */}
    <Stack.Screen name='Home' options={{headerShown:false,}}>
{(props)=><Home {...props} channelName={"shivam technical"}/>}
    </Stack.Screen>
    {/* course screen */}
    <Stack.Screen name='Course' options={{
      headerTitleStyle:{
        fontSize:22,
        color:"#4c5dab"
      },
      headerTitleAlign:"center"
    }} component={Course}/>

     {/* about screen */}
     <Stack.Screen name='About' options={{ headerTitleStyle:{
        fontSize:22,
        color:"#4c5dab"
      },
      headerTitleAlign:"center"
    }} component={About}/>

      {/* userdata screen */}
    <Stack.Screen name='Userdata' options={{ headerTitleStyle:{
        fontSize:22,
        color:"#4c5dab"
      },
      headerTitleAlign:"center"
    }} component={UserData}/>

     {/* Contact screen */}
     <Stack.Screen name='Contact'  options={{ headerTitleStyle:{
        fontSize:22,
        color:"#4c5dab"
      },
      headerTitleAlign:"center"
    }} component={Contact}/>

{/* course datails */}
<Stack.Screen name='CourseDetails'  
   options={{ headerTitleStyle:{
        fontSize:22,
        color:"#4c5dab"
      },
      headerTitleAlign:"center"
    }} component={CourseDetails}/>
  </Stack.Navigator>
</NavigationContainer>
  )

}
export default App;