import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [ mydata ,setMydata]=useState([])
  const getUserData= async()=>{
    try {
const res =  await fetch("https://thapatechnical.github.io/userapi/users.json")
 const realdata = res.json()
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
  const showUserdata=()=>{
    return <View style={styles.card}>
      <View style={styles.imagecontainer}></View>
    </View>
  }
  return (
    <View>
      <Text>UserData</Text>
      <FlatList
       data={mydata}
       renderItem={{showUserdata}}
      />
    </View>
  )
}
const styles = StyleSheet.create({})
export default UserData

