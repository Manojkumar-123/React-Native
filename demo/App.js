import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal ..!' style={styles.textInput}></TextInput>
        <Button title='Add Goal'/>
      </View>
      <View style={styles.listContainer}>
        <Text>List of Goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000000',
    width: '80%',
    padding: 5,
  },
  listContainer: {
    marginTop: 10
  }
});
