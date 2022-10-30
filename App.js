import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.Rzlt}>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={styles.Plus}
          onPress={() => {
            setCount(count + 1);
          }}
        >
          +1
        </Text>
        <Text
          style={styles.Minus}
          disabled={count === 0}
          onPress={() => {
            setCount(count - 1);
          }}
        >
          -1
        </Text>
      </View>
      <Text
        style={styles.Reset}
        disabled={count === 0}
        onPress={() => {
          setCount(0);
        }}
      >
        Reset
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  Plus: {
    marginTop: 16,
    paddingVertical: 5,
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 50,
    backgroundColor: "#00b32c",
    color: "#20232a",
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold",
  },
  Minus: {
    marginLeft: 10,
    marginTop: 16,
    shadowColor: "black",
    paddingVertical: 5,
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 50,
    backgroundColor: "#e40010",
    color: "#20232a",
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold",
  },
  Reset: {
    marginTop: 16,
    paddingVertical: 5,
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 30,
    backgroundColor: "#ffc537",
    color: "#20232a",
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },

  Rzlt: {
    fontSize: 30,
    fontWeight: "bold",
    fontSize: 50,
    color: "#7f8c8d",
  },
});

export default Counter;
