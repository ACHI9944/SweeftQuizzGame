import { StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";

const ChoosingScreenStyle = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
  },
  form: {
    width: "100%",
  },
  welocomeView: {
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 60,
    fontFamily: "Main",
  },
  nameText: {
    fontSize: 30,
    fontFamily: "Helper",
  },
  rulesView: {
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  rules: {
    fontSize: 19,
    fontFamily: "Main",
    color: Colors.blue100,
  },

  numberDescription: {
    fontWeight: "300",
    fontSize: 15,
    fontFamily: "Main",
    marginTop: 15,
  },

  numberView: {
    marginTop: 3,
    backgroundColor: Colors.primary100,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  invalidNumberView: {
    borderWidth: 1,
    borderColor: "red",
  },
  correctNumberView: {
    borderWidth: 1,
    borderColor: "#71ce95",
  },
  numberInput: {
    fontSize: 22,
    fontWeight: "300",
    fontFamily: "Helper",
  },
  selectDescription: {
    fontWeight: "300",
    fontSize: 15,
    fontFamily: "Main",
    marginTop: 15,
  },
  select: {
    marginTop: 3,
    backgroundColor: Colors.primary100,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  selectText: {
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Helper",
  },
  clearButton: {
    marginTop: 15,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
  },
});

export default ChoosingScreenStyle;
