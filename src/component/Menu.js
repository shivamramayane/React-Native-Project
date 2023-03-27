import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Menu = () => {
    const navigation= useNavigation()
  return (
    <View style={styles.menucontainer}>
      <TouchableOpacity  style={styles.buttonstyle} onPress={()=>navigation.navigate('Course') }>
       <Image
        style={styles.iconstyle}
        source={{uri:"https://img.icons8.com/stickers/512/training-skin-type-1.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonstyle} onPress={()=>navigation.navigate('About') }>
      <Image
    
        style={styles.iconstyle}
        source={{uri:"https://img.icons8.com/color/512/info.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonstyle} onPress={()=>navigation.navigate('Userdata') }>
      <Image
        style={styles.iconstyle}
        source={{uri:"https://img.icons8.com/color/512/classmates-standing-skin-type-2.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonstyle} onPress={()=>navigation.navigate('Contact') }>
      <Image
        style={styles.iconstyle}
        source={{uri:"https://img.icons8.com/color/512/new-contact.png"}}/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    menucontainer:{
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"space-evenly",

    },
    iconstyle:{
width:"100%",
height:50,
aspectRatio:1,
    }
})
export default Menu

