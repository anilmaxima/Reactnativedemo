import React,{useState} from 'react';
import { StyleSheet, TextInput, View,Button, Modal } from 'react-native';

const GoalInputes = props => {
    const [enteredGoal,setEnteredGoal] = useState('')

    const goalInputHandler =(enteredText) => {
        setEnteredGoal(enteredText)
      }
      const addGoalHandler = () =>{
         props.onAddGoals(enteredGoal)
         setEnteredGoal('')
      }
      
    return (
        <Modal visible = {props.visible} animationType='slide'>
        <View style={styles.view}>
        <TextInput placeholder='course' 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value = {enteredGoal}/>
        <View style={styles.buttondiv}>
            <View>
                <Button title='add' onPress={addGoalHandler}/>
            </View>
            <View>
                <Button title='cancel' color='red' onPress={props.onCancel}/>
            </View>
        </View>
        </View>
        </Modal>
    )}

    const styles = StyleSheet.create({
        view:{
            flex:1, 
            justifyContent: 'center',
            alignItems:'center'
          },
          input:{
              width:'80%',
              borderColor:'black',
              borderWidth:1,
              padding:10,
              marginBottom:10
          },
          buttondiv:{
              flexDirection:'row',
              justifyContent:'space-between',
              width:'50%'
          },
          button:{
              width:'40%'
          }
        })
    export default GoalInputes