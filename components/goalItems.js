import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const GoalItems = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listitems}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listitems:{
        padding:10,
        margin:5,
        backgroundColor:'green',
        borderColor:'black',
        borderWidth:2
      }
    })

export default GoalItems