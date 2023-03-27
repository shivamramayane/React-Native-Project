import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import data from "../api/Courseapi"
const Course = ({navigation}) => {

  const coursecard=({item})=>{
    return(
     <View  style={styles.maincontainer}>
 <View  style={styles.coursecontainer}>
 <View>
  <Image style={styles.imagecontainer}
  source={item.image}
  resizeMode="contain"
  />
 </View>
 <Text style={styles.mainheader}>
  {item.title}
 </Text>
 <Text style={styles.maindescription}>
  {item.description}
 </Text>
 <View style={styles.buttoncontainer}>
  <TouchableOpacity style={styles.buttonstyles}
  onPress={()=>{navigation.navigate("CourseDetails",{  
    courseId:item.id,
  } )
  }}>
    <Text style={styles.buttontext}>Course Details</Text>
  </TouchableOpacity>
 </View>
 </View>
    </View>
  )}
  return (

<FlatList data={data}
keyExtractor={(item)=>{item.id}}
renderItem={coursecard}
/>
  )
}

const styles = StyleSheet.create({
  imagecontainer:{
    width:"100%",
    height:undefined,
    aspectRatio:1,
  
  },
  maincontainer:{
    paddingHorizontal:10,
    textAlign:"center"
  },
  coursecontainer:{
    padding:30,
    backgroundColor:"rgba(255,255,255,0.90),",
    textAlign:"center",
    borderRadius:5,
    shadowColor:"grey",
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30,
  },
  mainheader:{
    fontSize:25,
    color:"#344055",
    textTransform:"uppercase",
    paddingBottom:30,
  },
  maindescription:{
    textAlign:"left",
    paddingBottom:5,
    lineHeight:20,
    fontSize:16,
    color:"#7d7d7d",
  },
  buttoncontainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    marginTop:15,
  },
  buttonstyles:{
    backgroundColor:"#809fff",
   borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  buttontext:{
    color:"#eee",
    fontSize:20,
    textTransform:"capitalize",
  }
})
export default Course;
