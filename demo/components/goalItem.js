import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalText}>
        <Text>{props.value}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#cccc",
    height: 40,
    justifyContent: "center",
    alignContent: "center",
  },
});
