import React,{useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal] = useState('')
  const [courseGoals,setCourseGoals] = useState([])

  const goalInputHandler =(enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals,enteredGoal])
    setEnteredGoal('')
  }

  return (
    <View style={styles.main}>
      
      <View style={styles.view}>
        <TextInput placeholder='course' 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value = {enteredGoal}/>
          <Button style={{flex:1}} title='add' onPress={addGoalHandler}/> 
          <Button style={{flex:1}} title='REMOVE' onPress={() => setCourseGoals([])}/> 
      </View>
      <ScrollView>
      {courseGoals.map((goal) => {
        return (
          <View key={goal} style={styles.listitems}>
            <Text>{ goal}</Text>
          </View>
        )})}
        </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
main:{
  flex:1,
  backgroundColor:'gray',
  paddingTop:80,
  padding:10,
  marginTop: 10,
  margin:5
},
view:{
  flexDirection: 'row', 
  justifyContent: 'space-around'
},
input:{
  flex:2,
  margin: 5,
  borderRadius: 10,
  borderWidth: 1
},
listitems:{
  padding:10,
  margin:5,
  backgroundColor:'green',
  borderColor:'black',
  borderWidth:2
}
});
