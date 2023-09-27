import { Pressable, Text, View } from "react-native";
import { AuthContext } from "../context/context";
import { useContext } from "react";

function GameStack() {
  const authCtx = useContext(AuthContext);
  return (
    <View>
      <Text>game</Text>
      <Pressable
        style={{ padding: 30 }}
        onPress={() => authCtx.clearNameAndToken()}
      >
        <Text>logout</Text>
      </Pressable>
    </View>
  );
}

export default GameStack;
