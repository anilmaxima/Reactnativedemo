import React,{useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,TextInput,Button,FlatList,Text } from 'react-native';
import GoalItems from './components/goalItems'
import GoalInputs from './components/goalinput'

export default function App() {
  const [courseGoals,setCourseGoals] = useState([])
  const [isAddMode,setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    if(goalTitle.length == 0) {
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals,
      {id:Math.random().toString(),value:goalTitle}])
    setIsAddMode(false)
  }

  const removeGoalHandeler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.main}>
      <Button title="add new goal" onPress={() =>setIsAddMode(true)}/>
      <GoalInputs visible={isAddMode} 
      onAddGoals={addGoalHandler} 
      onCancel={cancelGoalAdditionHandler} />
      <FlatList 
      keyExtractor={(items,index) => items.id}
      data={courseGoals} 
      renderItem={itemsData => <GoalItems 
        id={itemsData.item.id}
        onDelete={removeGoalHandeler}
        title={itemsData.item.value} />
        } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
main:{
  padding:50
}
});
