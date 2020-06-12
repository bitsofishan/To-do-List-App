import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
export default function Todoitem({item,presshandler}) {
    return(
        <TouchableOpacity onPress={()=>presshandler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name="delete" size={18} color="#333"/>
            <Text style={styles.itemtext}>{item.text}</Text>
            </View>
           
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    item:{
         padding:16,
         marginTop:16,
         borderColor:"blue",
         borderWidth:1,
         borderStyle:"dashed",
         borderRadius:10,
         flexDirection:"row",
    },
    itemtext:{
        marginLeft:10,
    }
});