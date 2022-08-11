import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titlepart}>
        <Text style={styles.title}>Memo</Text>
      </View>
      <View style={styles.memopart}>
        <Text style={styles.memo}>큰사넷 아이디:~, 비밀번호:~</Text>
        <Text style={styles.memo}>중국집 외상금 5000원 갚기</Text>
        <Text style={styles.memo}>민수 생일:9/16, 엄빠 결혼기념일:11/17</Text>
        <Text style={styles.memo}>서울대 아자아자 화이팅</Text>
        <Text style={styles.memo}>오늘도 비터스의 일꾼은 일하는 중</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    marginTop: 100,
    color: "rgb(68, 116, 246)",
    borderBottomColor: "gray",
  },
  memopart: {
    flex: 0.5,
    marginTop: 150,
    alignItems: "center",
    lineHeight: 100,
  },
  memo: {
    textDecorationLine: "underline",
    fontSize: 15,
    lineHeight: 40,
    underlineColor: "",
  },
});
