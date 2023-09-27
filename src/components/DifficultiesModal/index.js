import { Pressable, ScrollView, Text, View } from "react-native";
import CustomButton from "../ui/CustomButton";
import DifficultiesModalStyle from "./style";
import { difficulties } from "../../DummyData";

const styles = DifficultiesModalStyle;

function DifficultiesModal({ setDifficulty, selectedDifficulty, onCancel }) {
  function pressHandler(value) {
    setDifficulty(value);
    onCancel();
  }
  return (
    <View style={styles.modalScreen}>
      <ScrollView
        style={styles.difficulties}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {Object.keys(difficulties).map((difficulty) => {
          return (
            <Pressable
              key={difficulty}
              onPress={() => pressHandler(difficulty)}
              style={[
                styles.difficulty,
                selectedDifficulty === difficulty && styles.selectedDifficulty,
              ]}
            >
              <Text style={styles.difficultyText}>{difficulty}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton text="Close" onPress={onCancel} />
      </View>
    </View>
  );
}

export default DifficultiesModal;
