import { StyleSheet, Text, View } from "react-native";
import { Calendar } from 'react-native-calendars';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titlepart}>
        <Text style={styles.title}>Diary</Text>
      </View>
      <View style={styles.memopart}>
        <Calendar style={styles.diary}></Calendar>
        <View style={styles.memo}>
          <View style={styles.comment_title}>
            <Text style={styles.today_comment}>today's</Text>
            <Text style={styles.today_comment2}>comment</Text>
          </View>
          <View style={styles.comment}>
            <Text>오늘은 사감쌤이 평소에는 30분에 깨우러 오시는 데 45분에 깨우러 오셨다. 다급하게 씻고 나갔지만 8시 1분에 기숙사를 나와 지각을 했다. 아침을 먹고 면학실로 갔다. 수학문제를 좀 풀다가 비터스 과제를 했다. 비터스에서 멋진 앱을 만들었으면 좋겠다.ㅎㅎ </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  titlepart: {
    alignItems: "center",
    justifyContent: "center",
    height : 200
  },
  title: {
    fontSize: 40,
    marginTop: 100,
    color: "rgb(68, 116, 246)",
    fontWeight : "bold"
  },
  memopart: {
    alignItems: "center",
    height : 600
  },
  diary : {
    width : 375
  },
  memo : {
    width : 335
  },
  comment : {
    marginTop : 10
  },
  today_comment : {
    fontSize : 23,
    fontWeight : "bold"
  },
  comment_title: {
    flexDirection : "row"
  },
  today_comment2 : {
    fontSize:23,
    color : "rgb(68, 116, 246)",
    marginLeft : 5,
    fontWeight : "bold"
  }
});