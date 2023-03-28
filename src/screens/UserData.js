import { FlatList, StyleSheet, Text, View ,Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [ mydata ,setMydata]=useState([])
  const getUserData= async()=>{
    try {
const res =  await fetch("https://thapatechnical.github.io/userapi/users.json")
 const realdata =  await res.json()
 setMydata(realdata);
//  console.log(realdata)
}
catch(error){
console.log(error)
}
  }

  useEffect(()=>
    getUserData(),[]
  )
  const showUserdata = ( { item })=>{
    return <View style={styles.card}>
      <View style={styles.imagecontainer}>
        <Image style={styles.imgStyle} source={{ uri : item.image}}/>
      </View>
      <View>
      <View style={styles.bioDataContainer}>
        <Text style={styles.bioData}>bio-data</Text>
        <Text style={styles.idnumber}>{item.id<10 ? `#0${item.id}`:`#{item.id}`}</Text>
      </View>
      </View>
<View style={styles.mainContain}>
  <Text style={styles.myName}>name :{item.name}</Text>
  <Text style={styles.myName}>email :{item.email}</Text>
  <Text style={styles.myName}>number :{item.mobile}</Text>
</View>
    </View>
  }
  return (
    <View>
      <Text style={styles.mainheader}> UserData</Text>
      <FlatList
      keyExtractor={(item)=>item.id}
       data={mydata}
       renderItem={showUserdata}
       horizontal 
       showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    minHeight:"100%",
    paddingVertical:50,
    backgroundColor:"#ebedee"
  },
  card:{
    width:250,
    height:350,
    backgroundColor:"#fff",
    borderRadius:5,
    margin:20
  },
  bioDataContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"#353535",
    paddingVertical:10,
    
  },
  idnumber:{
    fontSize:20,
    color:"rgba(255,255,255,0.5)",
    paddingRight:10,
  },
  bioData:{
    fontSize:30,
    color:"#fff",

  },
  mainheader:{
    fontSize:30,
    color:"#a18ce5",
    textAlign:"center"
  },
  imgStyle:{
    width:"100%",
    height:180,
  },
  mainContain:{
    padding:10,
    backgroundColor:"#353535",
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
  },
  myName:{
fontSize:14,
color:"#fff",
marginBottom:10,
alignSelf:"flex-start",
textTransform:"capitalize"
  }
})
export default UserData

