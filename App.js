import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisibility , setModalVisibility] = useState(false)

  function addGoal(goalText){
     setGoals((courseGoals) => [...courseGoals, {text : goalText, id : Math.random().toString()}]);
    console.log(goals);
    hideModal();
  }

  function onDeleteHandler(id){
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !==  id);
    })

  }

  function showModal(){
   setModalVisibility(true);
  }

  function hideModal(){
    setModalVisibility(false)
  }




  return (
    <View style={styles.appContainer}>

    <Button title='Add a goal!' color = '#5e0acc' onPress={showModal}/>

      <GoalInput onCancel = {hideModal}  visible = {modalVisibility} onAddGoal = {addGoal}/>
    <View style={styles.goalsContainer}>
      <Text>List of goals...</Text>
    <FlatList data={goals} renderItem =
    {(itemData) => {

      return(
       <GoalItem id = {itemData.item.id} text = {itemData.item.text} onDeleteItem = {onDeleteHandler} />
      )
    }}

    keyExtractor = {(item, index) => {return  item.id; }}
    />

    </View>
    </View>


// {goals.map((goal) =>
//   <View style={styles.goalItem}>
// <Text style={styles.goalText} key={goal}>{goal}</Text>
// </View>)}

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


  goalsContainer: {
    flex: 5
   },


});
