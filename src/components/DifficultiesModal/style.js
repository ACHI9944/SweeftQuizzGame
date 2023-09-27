import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";
const deviceHeight = Dimensions.get("window").height;

const DifficultiesModalStyle = StyleSheet.create({
  modalScreen: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  difficulties: {
    width: "100%",
    height: (deviceHeight * 3) / 5,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  button: {
    marginBottom: 20,
    width: "90%",
  },
  difficulty: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.primary100,
    justifyContent: "center",
  },
  selectedDifficulty: {
    borderWidth: 2,
    backgroundColor: Colors.primary200,
  },
  difficultyText: {
    fontSize: 20,
    fontFamily: "Helper",
  },
});

export default DifficultiesModalStyle;
