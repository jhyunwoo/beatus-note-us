import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            borderBottomWidth: 1,
            width: "100%",
            alignItems: "center",
            height: 50,
          }}
        >
          <Text>설정</Text>
        </View>
        <View style={{ justifyContent: "center", height: 160 }}>
          <FontAwesome name="user-circle" size={120} color="rgb(68,116,246)" />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            marginBottom: 5,
            height: 30,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>이도엽</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            backgroundColor: "rgb(68,116,246)",
            width: "98%",
            alignItems: "center",
            borderRadius: 15,
            marginBottom: 5,
            height: 40,
          }}
        >
          <Text style={{ color: "white" }}>프로필 수정하기</Text>
        </View>
      </View>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <View style={{ marginTop: 15, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>계정</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            paddingBottom: 15,
            borderColor: "lightgray",
          }}
        >
          <Text>개인 설정</Text>
        </View>
        <View style={{ paddingTop: 15 }}>
          <Text>비밀번호 및 보안</Text>
        </View>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>기본 설정</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            paddingBottom: 15,
            borderColor: "lightgray",
          }}
        >
          <Text>알림</Text>
        </View>
        <View style={{ paddingTop: 15 }}>
          <Text>언어</Text>
        </View>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>일반</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            paddingBottom: 15,
            borderColor: "lightgray",
          }}
        >
          <Text>새로운 스타일</Text>
        </View>
        <View style={{ paddingTop: 15 }}>
          <Text>동기화</Text>
        </View>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>개인 정보</Text>
        </View>
        <View>
          <Text>이 앱이 사용하는 권한</Text>
        </View>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>그 외의 것들</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text>불편한 점 문의하기 (문의번호 : 010 - 0000 - 0000)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    marginTop: 30,
  },
});
