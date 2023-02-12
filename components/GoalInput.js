import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function GoalInput(props){

    const [goalText, setGoalText] = useState('');

    function goalInputHandler(input){
        setGoalText(input)
    }

    function onAddGoal(){
        props.onAddGoal(goalText)
        setGoalText('');
    }

    return (

        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <Image style={styles.image} source = {require('../assets/adaptive-icon.png')}/>
      <TextInput style={styles.textInput} placeholder='Enter you goal here'
      onChangeText={goalInputHandler}

      value ={goalText}
      ></TextInput>
      <View style ={styles.buttonView}>
        <View style = {styles.button}>
      <Button  title='Add a Goal' onPress={onAddGoal} color = "green"/>
      </View>
      <View style = {styles.button}>
      <Button color={"#f31"} title='Cancel' onPress = {props.onCancel}/>
      </View>
      </View>
    </View>
    </Modal>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: '#5e0acc'
      },

      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        color: 'white',
      },
      buttonView:{
        flexDirection: 'row'
      },
      button : {
        width: '30%',
        marginHorizontal: 8,
        marginTop: 16
      },
      image: {
        width: 100,
        height: 100,
        margin:20
      }
})