import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
  const [currentGoal, setCurrentGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setCurrentGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: currentGoal, id: Math.random().toString() },
    ]);
    console.log(currentGoal);
    setCurrentGoal("");
  };

  const clearGoalHandler = () => {
    setGoalsList([]);
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        inputHandler={goalInputHandler}
        buttonHandler={addGoalHandler}
        goalText={currentGoal}
      />
      <View style={styles.goalsContainer}>
        {goalsList.length == 0 ? (
          <Text>No goals yet...</Text>
        ) : (
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  value={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        )}
      </View>
      <View style={{ marginBottom: 50 }}>
        <Button title="Clear Goals" onPress={clearGoalHandler}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
