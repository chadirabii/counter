import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return Alert.alert("Error", "cannot decrement below 0");
    }
    setCount((prevState) => prevState - 1);
  };
  const reset = (val) => {
    setCount(val);
  };
  return (
    <View style={styles.container}>
      <Text style={tw`text-red-500 text-3xl font-bold`}>{count}</Text>
      <View style={tw`flex-row  `}>
        <TouchableOpacity
          onPress={increment}
          style={tw`bg-blue-500 px-4 py-2 flex justify-center items-center rounded-lg mr-2`}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // disabled={count === 0 ? true : false}
          onPress={decrement}
        >
          <Text
            style={tw`bg-[#dc2626] px-4 py-2 flex justify-center items-center rounded-lg `}
          >
            Decrement
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={count === 0 ? true : false}
        style={tw`bg-[#f59e0b] px-4 py-2 flex justify-center items-center rounded-lg w-[52] mt-2 `}
        onPress={() => reset(0)}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
