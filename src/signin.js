import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Login}>
        <Text style={styles.LoginText}>로그인</Text>
      </View>

      <View style={styles.Id}>
        <TextInput style={styles.Id1}
        placeholder = "아이디를 입력하새요"/>
      </View>

      <View style={styles.PasswordBox}>
        <TextInput style={styles.PasswordText}
        placeholder = "비밀번호룰 입력하세요"/>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.item}></TouchableOpacity>
        <Text style={styles.AutoLoginText}>로그인 상태 유지</Text>
      </View>

      <TouchableOpacity style={styles.LoginButton}>
        <Text style={styles.LoginButton1}>로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SignUp}>
        <Text style={styles.SignUpText}>회원가입</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.FindId}></View>
        <TouchableOpacity>
          <Text style={styles.FindIdText}>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.FindPasswordText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Login: {},

  LoginText: {
    fontSize: 35,
    marginTop: 100,
    fontWeight: "bold",
    marginBottom: 80,
  },

  Id: {
    backgroundColor: "rgb(224,224,224)",
    borderRadius: 10,
  },

  Id1: {
    marginRight: 212,
    color: "rgb(170,170,170)",
    marginLeft: 10,
    marginBottom: 17,
    marginTop: 17,
  },

  PasswordBox: {
    backgroundColor: "rgb(224,224,224)",
    marginTop: 5,
    borderRadius: 10,
  },

  PasswordText: {
    color: "rgb(170,170,170)",
    marginRight: 200,
    marginTop: 17,
    marginLeft: 9,
    marginBottom: 17,
  },

  AutoLoginText: {
    fontWeight: "bold",
    marginTop: 10,
  },

  AutoLoginCheck: {
    backgroundColor: "rgb(0,0,0)",
    marginTop: 10,
  },

  item: {
    width: 15,
    height: 15,
    marginRight: 10,
    marginTop: 11,
    marginLeft: -170,
    borderWidth: 2,
  },

  LoginButton: {
    marginTop: 15,
    backgroundColor: "rgb(50,130,246)",
    borderRadius: 10,
  },

  LoginButton1: {
    fontWeight: "bold",
    marginRight: 153,
    marginTop: 18,
    marginLeft: 153,
    marginBottom: 18,
    color: "white",
  },

  SignUp: {
    marginTop: 9,
    backgroundColor: "rgb(53,160,255)",
    borderRadius: 10,
    marginBottom : 10
  },

  SignUpText: {
    fontWeight: "bold",
    marginRight: 147,
    marginTop: 18,
    marginLeft: 147,
    marginBottom: 18,
    color: "white",
  },

  FindId: {
    marginLeft: -170,
  },

  FindIdText: {
    marginRight: 15,
  },

  FindPasswordText: {},
});