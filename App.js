import { Image } from "react-native";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HighlightText from "react-native-highlight-underline-text";
import { BeakerIcon } from "@heroicons/react/solid";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


//투 두 리스트

/* 
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titlepart}>
        <View style={styles.todolist}>
         <Text style={styles.title}>To do list</Text>
        </View>
        <View style={styles.datepart}>
         <AntDesign.Button
            name="caretleft"
            size={24}
            color="rgb(68, 116, 246)"
            backgroundColor="#ffffff"
            borderRadius={10}
            style={styles.dateChange}
          />
         <Text style={styles.date}>22.08.10(수)</Text>
         <AntDesign.Button
            name="caretright"
            size={24}
            color="rgb(68, 116, 246)"
            backgroundColor="#ffffff"
            style={styles.dateChange}
          />
        </View>
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
          <Feather name="search" size={30} color="black" style={styles.search} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.rightbutton}>
          <AntDesign name="delete" size={30} color="black" style={styles.delete}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.centerbutton}>
          <AntDesign name="plus" size={40} color="white" style={styles.plus}/>
         </TouchableOpacity>
      </View>
      <View style={styles.boxpart}>
        <View style={styles.tdl}>
         <Octicons.Button name="checklist" size={40} color="rgb(68, 116, 246)" backgroundColor="white" />
        </View>
        <View style={styles.memo}>
         <SimpleLineIcons.Button name="note" size={40} color="rgb(68, 116, 246)" backgroundColor="white"/>
        </View>
        <View style={styles.diary}>
         <MaterialCommunityIcons.Button name="calendar-edit" size={45} color="rgb(68, 116, 246)" backgroundColor="white" />
        </View>
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    color: "rgb(68, 116, 246)",
    borderBottomColor: "gray",
  },
  dateChange: {
    marginTop:37
  },
  datepart:{
    flexDirection: "row"
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
    flex: 0.15,
    flexDirection: "row",
    marginTop:80
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
  search: {
    marginLeft: -30
  },
  centerbutton: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 85,
    height: 85,
    borderRadius: 50,
    marginLeft: -155,
    marginTop: -12,
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
  delete:{
   marginRight:-30
  },
  boxpart:{
    flex: 0.15,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20
  },
  tdl:{
   marginLeft:40,
   justifyContent:"center"
  },
  memo:{
   justifyContent:"center",
   marginTop:-5,
   marginLeft: 75
  },
  diary:{
   marginLeft: 80,
   marginTop:-3,
   justifyContent:"center"
  }
});
*/





//메모
/*
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
  titlepart:{
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    marginTop: 100,
    color: "rgb(68, 116, 246)",
    borderBottomColor: "gray"
  },
  memopart:{
    flex:0.5,
    marginTop: 150,
    alignItems:"center",
    lineHeight:100
  },
  memo:{
    textDecorationLine: "underline",
    fontSize: 15,
    lineHeight: 40,
    underlineColor: "",
  }
});
*/