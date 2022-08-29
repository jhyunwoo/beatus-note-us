import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.setting_text}>
          <Text>설정</Text>
        </View>
        <View style={styles.userIcon}>
          <FontAwesome name="user-circle" size={120} color="rgb(68,116,246)" />
        </View>
        <View style={styles.nickname}>
          <Text style={styles.nickname_text}>이도엽</Text>
        </View>
        <View style={styles.profile_botton}>
          <Text style={{ color: "white" }}>프로필 수정하기</Text>
        </View>
      </View>
      <View style={styles.setting}>
        <View style={styles.title_setting1}>
          <Text style={styles.title_text}>계정</Text>
        </View>
        <View style={styles.underline_menu}>
          <Text>개인 설정</Text>
        </View>
        <View style={styles.menu}>
          <Text>비밀번호 및 보안</Text>
        </View>
        <View style={styles.title_setting2}>
          <Text style={styles.title_text}>기본 설정</Text>
        </View>
        <View style={styles.underline_menu}>
          <Text>알림</Text>
          <FontAwesome name="toggle-on" size={22} color="black" />
        </View>
        <View style={styles.menu}>
          <Text>언어</Text>
        </View>
        <View style={styles.title_setting2}>
          <Text style={styles.title_text}>일반</Text>
        </View>
        <View style={styles.underline_menu}>
          <Text>새로운 스타일</Text>
        </View>
        <View style={styles.menu}>
          <Text>동기화</Text>
        </View>
        <View style={styles.title_setting2}>
          <Text style={styles.title_text}>개인 정보</Text>
        </View>
        <View>
          <Text>이 앱이 사용하는 권한</Text>
        </View>
        <View style={styles.title_setting2}>
          <Text style={styles.title_text}>그 외의 것들</Text>
        </View>
        <View style={styles.margin}>
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
  setting_text: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 5,
    height: 30,
    marginBottom: 20,
  },
  userIcon: {
    justifyContent: "center", 
    height: 160 
  },
  nickname: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 5,
    height: 30,
    marginBottom: 20,
  },
  nickname_text: { 
    fontSize: 20, 
    fontWeight: "bold",
  },
  profile_botton: {
    justifyContent: "center",
    backgroundColor: "rgb(68,116,246)",
    width: "98%",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 5,
    height: 40,
  },
  setting: { 
    marginLeft: 15, 
    marginRight: 15 
  },
  title_setting1: { 
    marginTop: 15, 
    marginBottom: 20 
  },
  title_text : { 
    fontSize: 20, 
    fontWeight: "bold" 
  },
  underline_menu: {
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: "lightgray",
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  menu: { 
    paddingTop: 15 
  },
  title_setting2: { 
    marginTop: 30, 
    marginBottom: 20 
  },
  margin: { 
    marginBottom: 20 
  }
});