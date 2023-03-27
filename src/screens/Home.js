import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu'
const Home = (props) => {
    return (
        <>
        <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
        {/* <img  style={{height:200, width:340,aspectRatio:1, display:"flex",alignItems:"stretch",marginTop:50,borderRadius:20}} src='https://thumbs.dreamstime.com/b/children-education-kid-read-book-school-boy-reading-books-dreaming-over-blackboard-background-92807607.jpg'></img> */}
        {/* <Image source={{uri:'https://thumbs.dreamstime.com/b/children-education-kid-read-book-school-boy-reading-books-dreaming-over-blackboard-background-92807607.jpg'}}/>
         */}
         <Image  style={styles.headerImage} source={require("../screens/img1.jpg")}/>
        <Text style={[styles.mainHeader,{fontSize:25}]}>Welcome to</Text>
        <Text style={[styles.mainHeader,{fontSize:30,color:"#4c5dab",marginTop:0}]}>{props.channelName}</Text>
        <Text style={styles.paraStyle}>the act or process of imparting or acquiring general knowledge, 
        developing the powers of reasoning and judgment</Text>
        </View>
        <View style={styles.menustyle}>
          <View style={styles.linestyle}></View>
            <Menu/>
      
        </View>
        </View>
        </>
      )
    }
    const styles = StyleSheet.create({
    mainContainer:{
      height:"100%",
      display:"flex",
      // position:"fixed",
      justifyContent:"space-between",
      paddingHorizontal:20,
      backgroundColor:'#fff',
      textAlign:"center",
    },
    homeTop:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    mainHeader:{
    display:"flex",
    marginTop:10,
    textTransform:"uppercase",
    },
    paraStyle:{
      fontSize:19,
      color:"#7d7d7d",
      marginTop:20,
    //   paddingBottom:30,
      lineHeight:26,
    },
    linestyle:{
      marginBottom:20,
      borderWidth:1,
      borderColor:"gray",
      // padding:20,
    },
    headerImage:{
     
      height: 200,
      width:340,
      aspectRatio:1,
      display:"flex",
      alignItems:"stretch",
      marginTop:50,
      borderRadius:20,
    }
    })
export default Home