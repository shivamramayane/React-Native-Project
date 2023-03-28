import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutConatiner}>
      <Text style={styles.mainHeader}> shivam Ramayane</Text>
      <Text style={styles.paraStyle}> i am a full stack developer</Text>
      <View>
        <Image style={styles.imgStyle} source={{ uri: "https://media.licdn.com/dms/image/D4D03AQHgNZaOXWcKNQ/profile-displayphoto-shrink_800_800/0/1675926325362?e=1685577600&v=beta&t=s-dCH41OMfpvamWLx8-ITCBTSYTly-A4HwZsIYbZgRA" }} />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About Me</Text>
        <Text style={styles.aboutpara}>
          A full stack developer is a web developer or engineer who works with
          both the front and back ends of a website or application. In this
          sense, they provide an end-to-end service, and can be involved in

        </Text>
      </View>
      <Text style={styles.mainHeader}> Follow me on Social Media</Text>
      <View style={styles.menuContainer}>
        {/* <TouchableOpacity
    
      onPress={}
      >
        <Image style={styles.iconStyle}
        source={{uri:""}}/>
      </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/shivam-ramayane-479188210/"
            )
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/___shivam._02/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://github.com/shivamramayane")}
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  aboutConatiner:{
    display:"flex",
    // justifyContent:"center",
    alignItems:"center",

  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
  },
  mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:30,
    marginBottom:10,
    // lineHeight:30
  },
  paraStyle:{
    fontSize:18,
    color:"#7d7d7d",
    paddingBottom:30,
    textTransform:"capitalize"

  },
  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,
  },
  aboutSubHeader:{
    fontSize:18,
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    lineHeight:30,
    alignSelf:"center",
  },
  aboutpara:{
    color:'#fff',
    fontSize:18,
    textTransform:"capitalize",
    marginBottom:20,
  },
  menuContainer:{
    paddingBottom:15,
width:"100%",
flexDirection:"row",
justifyContent:"space-evenly",
  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,

  }
});
export default About;
