import React, { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";
import PassMeter from "react-native-passmeter";
import { TextField } from 'react-native-material-textfield';
import ConfettiCannon from 'react-native-confetti-cannon';

const MAX_LEN = 15,
  MIN_LEN = 3,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

export default App = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  return (

    <SafeAreaView style={styles.container}>
      <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      <TextField
        label='Name'
        name={name}
        onSubmitEditing={name => setName(name)}
      />
      <TextField
        label='Password'
        maxLength={15}
        secureTextEntry
        onChangeText={password => setPassword(password)}
      />
      <PassMeter
        showLabels
        password={password}
        maxLength={MAX_LEN}
        minLength={MIN_LEN}
        labels={PASS_LABELS}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: { flex: 1, justifyContent: "center" },
  input: {
    margin: 5,
    padding: 6,
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: "#eceff1"
  }
};