import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header'
import Todoitem from './components/todoitem'
import AddTodo from './components/addtodo'
import SandBox from './components/sandbox'
export default function App() {
  const[todos,setTodos]=useState([
    {text:"buy Coffee",key:'1'},
    {text:"Make app",key:'2'},
    {text:"Play GTA 5",key:'3'},
    {text:"Play GTA 4",key:'4'},
    {text:"Play GTA 6",key:'5'},
    
  ]);
   const presshandler=(key)=>{
     setTodos((prevTodos)=>{
       return prevTodos.filter(todo=>todo.key!=key)

     });
   }
   const submitHandler=(text)=>{
    if(text.length >3){
      setTodos((prevTodos)=>{
        return[
          {text:text, key:Math.random().toString()},
          ...prevTodos
        ]
      });
    } else{
      Alert.alert('oops!','Todos must be over 3 char long',[
        {text:'Understood',onPress:()=>console.log('Alert Closed')}
      ]);
    }
    
   }
  return (
   // <SandBox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed Keyboard')
    }}>
    <View style={styles.container}>
      
      <Header/>
      <View style={styles.content}>
      <AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item})=>(
          <Todoitem item={item} presshandler={presshandler}/>
          )}
        
        />
      </View>
      </View>
      
    </View></TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop:40,
    //paddingHorizontal:20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content:{
    //backgroundColor:"red",
    flex:1,
    padding:40,
  },
  list:{
    //backgroundColor:"yellow",
    flex:1,
    marginTop:20,
  },
  

  
  
});
