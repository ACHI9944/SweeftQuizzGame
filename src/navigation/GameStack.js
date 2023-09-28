import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosingScreen from "../screens/ChoosingScreen";
import StartingScreen from "../screens/StartingScreen";
import FinishScreen from "../screens/FinishScreen";

const Stack = createNativeStackNavigator();

function GameStack() {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Choosing" component={ChoosingScreen} />
      <Screen name="starting" component={StartingScreen} />
      <Screen name="finished" component={FinishScreen} />
    </Navigator>
  );
}

export default GameStack;
