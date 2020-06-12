import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
export default function SandBox() {
    return(
         <View style={styles.container}>
           <Text style={styles.BoxOne}>One</Text>
           <Text style={styles.BoxTwo}>Two</Text>
           <Text style={styles.BoxThree}>Three</Text>
           <Text style={styles.BoxFour}>Four</Text>

         </View>
    )
}
const styles=StyleSheet.create({
 container:{
     //flex:1,
     flexDirection:'row',
     justifyContent:'center',
     //alignItems:'center',
     paddingTop:100,
     backgroundColor:"#ddd"
 },
 BoxOne:{
     flex:1,
     backgroundColor:'violet',
     padding:10,
 },
 BoxTwo:{
    flex:1,
    backgroundColor:'gold',
    padding:20,
},
BoxThree:{
    flex:1,
    backgroundColor:'coral',
    padding:30,
},
BoxFour:{
    flex:1,
    backgroundColor:'skyblue',
    padding:40,
},
});