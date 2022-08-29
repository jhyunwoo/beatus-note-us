import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.Note_us}>Note us!</Text>
      </View>
      <View style={styles.bottom_line}>
        <View style={styles.menu}>
          <View style={styles.icons}>
            <SimpleLineIcons name="note" size={24} color="black" />
          </View>
          <View style={styles.title_Text}>
            <Text style={styles.texts}>Memo</Text>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.font}>
            가장 최근 작성 날짜 : _월 _일
          </Text>
        </View>
        <View style={styles.date}>
          <Text style={{ fontWeight: "bold" }}>
            신규 메모 생성하기
          </Text>
        </View>
      </View>
      <View style={styles.bottom_line}>
        <View style={styles.menu}>
          <View style={styles.icons}>
            <Octicons name="checklist" size={28} color="black" />
          </View>
          <View style={styles.title_Text}>
            <Text style={styles.texts}>Diary</Text>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.font}>
            가장 최근 작성 날짜 : _월 _일
          </Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.font}>
            신규 다이어리 생성하기
          </Text>
        </View>
      </View>
      <View style={styles.Memo}>
        <View style={styles.menu}>
          <View style={styles.icons}>
            <MaterialCommunityIcons
              name="calendar-edit"
              size={30}
              color="black"
            />
          </View>
          <View style={styles.title_Text}>
            <Text style={styles.texts}>To do list</Text>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.font}>
            가장 최근 작성 날짜 : _월 _일
          </Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.font}>
            신규 리스트 생성하기
          </Text>
        </View>
      </View>
      <View style={styles.margin}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center" 
  },
  title: {
    flex: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  Note_us: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
  },
  Memo: {
    flex: 3,
    backgroundColor: "White",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_line: {
    flex: 3,
    backgroundColor: "White",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "lightgray",
    width: "60%",
  },
  texts: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(68,116,246)",
  },
  menu: { 
    flex: 1.5, 
    justifyContent: "center", 
    flexDirection: "row", 
  },
  icons: { 
    justifyContent: "center", 
    marginRight: 5, 
  },
  title_Text: { 
    justifyContent: "center", 
    marginLeft: 5, 
  },
  date: { 
    flex: 1, 
    justifyContent: "center", 
  },
  font: { 
    fontWeight: "bold", 
  },
  margin: { 
    flex: 1, 
    backgroundColor: "white", 
  }
});