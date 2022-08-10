import { Image } from "react-native";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HighlightText from "react-native-highlight-underline-text";
import { BeakerIcon } from "@heroicons/react/solid";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titlepart}>
        <View style={styles.todolist}>
          <AntDesign.Button
            name="caretleft"
            size={24}
            color="blue"
            backgroundColor="#ffffff"
            style={styles.dateChange}
          />
          <Text style={styles.title}>To do list</Text>
          <AntDesign.Button
            name="caretright"
            size={24}
            color="blue"
            backgroundColor="#ffffff"
            style={styles.dateChange}
          />
        </View>
        <Text style={styles.date}>22.08.10(수)</Text>
      </View>
      <View style={styles.listpart}>
        <HighlightText
          isFixed={false}
          bottom={-5}
          ratio={0.2}
          underlineColor="rgb(217,217,217)"
          text="1.수(하) 개념 나가기"
        />
        <Text style={styles.list}>2.비문학 3지문 풀기</Text>
        <Text style={styles.list}>3.영단어 30개 외우기</Text>
        <Text style={styles.list}>4.비터스 과제하기</Text>
      </View>
      <View style={styles.buttonpart}>
        <TouchableOpacity style={styles.leftbutton}>
          <Text style={styles.search}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightbutton}>
          <Text style={styles.delete}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.plus}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dateChange: {
    marginTop: 105,
  },
  todolist: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titlepart: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    color: "rgb(68, 116, 246)",
    borderBottomColor: "gray",
  },
  date: {
    fontSize: 25,
    marginTop: 35,
  },
  listpart: {
    marginTop: 150,
    flex: 0.5,
    marginLeft: 120,
  },
  list: {
    textDecorationLine: "underline",
    fontSize: 15,
    lineHeight: 40,
    underlineColor: "",
  },
  buttonpart: {
    flex: 0.2,
    flexDirection: "row",
  },
  leftbutton: {
    backgroundColor: "rgb(235,235,235)",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 60,
    borderRadius: 50,
    marginLeft: 100,
  },
  button: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 85,
    height: 85,
    borderRadius: 50,
    marginLeft: -155,
    marginTop: -12,
  },
  plus: {
    color: "white",
  },
  rightbutton: {
    backgroundColor: "rgb(235,235,235)",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 60,
    borderRadius: 50,
    marginLeft: -20,
  },
});
