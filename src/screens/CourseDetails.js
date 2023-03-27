import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Course from './Course';
import data from '../api/Courseapi';

const CourseDetails = ({navigation,route}) => {
    const id= route.params.courseId;
    console.log(id)

    const selectedcourse =data.find((element)=>{
return id===element.id
    })
 
    return(
        <View  style={styles.maincontainer}>
    <View  style={styles.coursecontainer}>
    <View>
     <Image style={styles.imagecontainer}
     source={selectedcourse.image}
     resizeMode="contain"
     />
    </View>
    <Text style={styles.mainheader}>
     {selectedcourse.title}
    </Text>
    <Text style={styles.maindescription}>
     {selectedcourse.description}
    </Text>
    <Text style={styles.coursestyle1}> *   {selectedcourse.course1}
    </Text>
    <Text style={styles.coursestyle1}> *   {selectedcourse.course2}
    </Text>
    <Text style={styles.coursestyle1}> *   {selectedcourse.course3}
    </Text>
    <View style={styles.buttoncontainer}>
        <Text style={styles.pricestyle}>{'\u20A8'} :- {selectedcourse.price}
        </Text>
     <TouchableOpacity style={styles.buttonstyles}
     onPress={()=>{navigation.navigate("Course")
     }}>
       <Text style={styles.buttontext}>Join Now</Text>
     </TouchableOpacity>
    </View>
    </View>
       </View>
     )


}

export default CourseDetails

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
      },
      pricestyle:{
        margin:10,
        fontSize:20,
        // backgroundColor:"#809fff",
       borderRadius:5,
        // paddingVertical:10,
        // paddingHorizontal:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      },
      coursestyle1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        fontSize:15,
      }
})