import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

export default function App() {

  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(input){
    setGoalText(input)

  }
  function addGoal(){

   console.log("presed")
   setGoals((courseGoals) => [...courseGoals, goalText]);
    console.log(goals);
  }

  return (
    <View style={styles.appContainer}>
      {/* <Text style={styles.textViews}>Hello World!</Text>

      <TextInput style={{backgroundColor:'#000', borderColor: 'red', width: 200, height:25, borderRadius: 5, padding: 10}}></TextInput>
      <Button title = 'Tap Me!'/>
      <StatusBar style="auto" /> */}
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Enter you goal here'
      onChangeText={goalInputHandler}
      ></TextInput>
      <Button title='Add a Goal' onPress={addGoal}/>
    </View>


    <View style={styles.goalsContainer}>
    <ScrollView >
      <Text>List of goals...</Text>

      {goals.map((goal) =>
            <View style={styles.goalItem}>
      <Text style={styles.goalText} key={goal}>{goal}</Text>
      </View>)}
    </ScrollView>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#2929',
  //   color: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // textViews: {marginLeft: 15, borderColor: '#fff' ,borderWidth: 3, padding: 10},

  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  }
  ,
   inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom : 24,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },

  goalsContainer: {
    flex: 5
   },
   goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
   },
   goalText: {
    color: 'white'
   }
});
