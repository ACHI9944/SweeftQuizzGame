import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosingScreen from "../screens/ChoosingScreen";

const Stack = createNativeStackNavigator();

function GameStack() {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Choosing" component={ChoosingScreen} />
    </Navigator>
  );
}

export default GameStack;
