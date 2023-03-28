import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
const Contact = ({navigation}) => {
const [name,setName]=useState("");
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [message,setMessage]=useState("")
const [agree,setAgree]=useState(false)
const submit=()=>{
  if(!name && !email && !phone && !message){
   Alert.alert("plz fill the data")
  }
  else{
   alert(`thank you ${name}`)
    navigation.navigate("Home")
  }
}
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up Your Knowledge</Text>
      <Text style={styles.description}>
        You Can Reach Us Anytime Via shivamramayane@gmail.com{" "}
      </Text>
      <View style={styles.inputConatiner}>
        <Text style={styles.labels}>Enter your Name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Enter Your Name"}
          value={name}
          onChangeText={(userdata)=>setName(userdata)}
        />
      </View>

      <View style={styles.inputConatiner}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Enter Your Email"}
          value={email}
          onChangeText={(email)=>setEmail(email)}
        />
      </View>

      <View style={styles.inputConatiner}>
        <Text style={styles.labels}>Enter your Mobile </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Enter Your Mobile Number"}
          value={phone}
          onChangeText={(phone)=>setPhone(phone)}
        />
      </View>
      <View style={styles.inputConatiner}>
        <Text style={styles.labels}>Tell us about your self </Text>
        <TextInput
          style={[styles.inputStyle, styles.multiLineStyle]}
          placeholder={"Write Something........"}
          value={message}
          onChangeText={(message)=>setMessage(message)}
          numberOfLines={"5"}
          multiline={true}
        />
      </View>
      <View style={styles.wrapper}>
        <Checkbox
        value={agree}
          onValueChange={()=>setAgree(!agree)}/>
        <Text style={styles.wrapperText}>
          I have read and agreed with the tc
        </Text>
      </View>
      <TouchableOpacity
      onPress={submit}
      disabled={!agree}
      style={[styles.buttonstyle,{
        backgroundColor:agree ? "#4630EB":"grey",
      }]}>
        <Text style={styles.buttonText}>Contact us</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 2,
  },
  labels: {
    fontWeight: "bold",
    marginBottom: 10,
    // lineHeight:25,
    color: "#7d7d7d",
  },
  inputConatiner: {
    marginTop: 20,
  },
  multiLineStyle: {
    paddingVertical: 4,
  },
  buttonstyle:{
    marginBottom:20,
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    marginVertical:30,
  },
  buttonText:{
    color:"#eee",
    fontSize:18,
  },
  wrapper:{
    display:"flex",
    flexDirection:"row",
    marginTop:20,

  },
  wrapperText:{
marginLeft:10,
color:"#7d7d7d"
  }
});
export default Contact;
