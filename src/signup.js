import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.SignUp}>회원 가입</Text>

      <View style={styles.Id}>
        <Text style={styles.IdText}>아이디를 입력해주세요</Text>
      </View>

      <Text style={styles.Id01}>사용 가능한 아이디입니다!</Text>

      <View style={styles.Password}>
        <Text style={styles.PasswordText}>비밀번호를 입력해주세요</Text>
      </View>

      <View style={styles.Password2}>
        <Text style={styles.Password3}>비밀번호 확인</Text>
      </View>

      <View style={styles.NickName}>
        <Text style={styles.NickNameText}>닉네임을 입력해주세요</Text>
      </View>

      <Text style={styles.NickName01}>사용 가능한 닉네임입니다!</Text>

      <View style={styles.SignUpButton}>
        <Text style={styles.SignUpButtonText}>회원 가입</Text>
      </View>

      <View style={styles.Icon}>
        <AntDesign name="google" size={24} color="black" />
        <AntDesign name="twitter" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  SignUp: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 100,
  },

  Id: {
    backgroundColor: "rgb(224,224,224)",
    borderRadius: 10,
    marginTop: 25,
  },

  IdText: {
    marginRight: 212,
    color: "rgb(170,170,170)",
    marginLeft: 10,
    marginBottom: 17,
    marginTop: 17,
  },

  Password: {
    backgroundColor: "rgb(224,224,224)",
    borderRadius: 10,
    marginTop: 10,
  },

  PasswordText: {
    marginRight: 200,
    color: "rgb(170,170,170)",
    marginLeft: 10,
    marginBottom: 17,
    marginTop: 17,
  },

  Password2: {
    backgroundColor: "rgb(224,224,224)",
    borderRadius: 10,
    marginTop: 10,
  },

  Password3: {
    marginRight: 270,
    color: "rgb(170,170,170)",
    marginLeft: 10,
    marginBottom: 17,
    marginTop: 17,
  },

  NickName: {
    backgroundColor: "rgb(224,224,224)",
    borderRadius: 10,
    marginTop: 10,
  },

  NickNameText: {
    marginRight: 215,
    color: "rgb(170,170,170)",
    marginLeft: 10,
    marginBottom: 17,
    marginTop: 17,
  },

  SignUpButton: {
    backgroundColor: "rgb(53,160,255)",
    borderRadius: 10,
    marginTop: 10,
  },

  SignUpButtonText: {
    marginRight: 154,
    marginLeft: 154,
    color: "rgb(255,255,255)",
    marginBottom: 17,
    marginTop: 17,
    fontWeight: "bold",
  },

  Id01: {
    color: "rgb(170,170,170)",
    marginRight: 200,
    marginTop: 5,
    fontSize: 12,
  },

  NickName01: {
    color: "rgb(170,170,170)",
    marginRight: 200,
    marginTop: 5,
    fontSize: 12,
  },

  Icon: {
    flexDirection: "row",
  },
});
