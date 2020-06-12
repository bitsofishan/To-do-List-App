import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
export default function Header() {
    return(
<View style={styles.header}>
    <Text style={styles.title}>Tasks</Text>
</View>

    )

}
const styles=StyleSheet.create({
      header:{
         height:100,
         paddingTop:60,
         backgroundColor:'skyblue',

      },
      title:{
          textAlign:"center",
          color:'black',
          fontSize:20,
          fontWeight:"bold",         
          

      }


});