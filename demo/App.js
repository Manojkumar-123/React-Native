import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [currentGoal, setCurrentGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setCurrentGoal(enteredText);
  }

  const addGoalHandler = () => {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList, 
      {text: currentGoal, id: Math.random().toString},
    ]);
    setCurrentGoal("");
  }

  const clearGoalHandler = () => {
    setGoalsList([]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={currentGoal} id='goalInput'/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {goalsList.length == 0 ? <Text>No goals yet...</Text> : <FlatList data={goalsList} renderItem={itemData => {
          return(
            <View style={styles.goalText}>
              <Text>{itemData.item.text}</Text>
            </View>
          );
          }} 
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}/>
        }
      </View>
      <View style={{marginBottom: 50}}>
        <Button title='Clear Goals' onPress={clearGoalHandler}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
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
  goalText: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#cccc',
    height: 40,
    justifyContent: 'center',
    alignContent: 'center'
  }
});