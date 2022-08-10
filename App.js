import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 , alignItems:'center'}}>
      <View style={styles.title}>
          <Text style={styles.Note_us}>Note us!</Text>
      </View>
      <View style={styles.bottom_line}>
        <View style={{flex : 1.5, justifyContent : 'center'}}>
          <Text style={styles.texts}>Memo</Text>
        </View>
        <View style={{flex : 1, justifyContent : 'center'}}>
          <Text style={{fontWeight:"bold"}}>
            가장 최근 작성 날짜 : _월 _일
          </Text>
        </View>
        <View style={{flex : 1, justifyContent : 'center'}}>
          <Text style={{fontWeight:"bold"}}>
            신규 메모 생성하기
          </Text>
        </View>
      </View>
      <View style={styles.bottom_line}>
       <View style={{flex : 1.5, justifyContent : 'center'}}>
        <Text style={styles.texts}>Diary</Text>
       </View>
       <View style={{flex : 1, justifyContent : 'center'}}>
        <Text style={{fontWeight:"bold"}}>
          가장 최근 작성 날짜 : _월 _일
        </Text>
       </View>
       <View style={{flex : 1, justifyContent : 'center'}}>
        <Text style={{fontWeight:"bold"}}>
          신규 다이어리 생성하기
        </Text>
       </View>
      </View>
      <View style={styles.Memo}>
      <View style={{flex : 1.5, justifyContent : 'center'}}>
        <Text style={styles.texts}>To do list</Text>
       </View>
       <View style={{flex : 1, justifyContent : 'center'}}>
        <Text style={{fontWeight:"bold"}}>
          가장 최근 작성 날짜 : _월 _일
        </Text>
       </View>
       <View style={{flex : 1, justifyContent : 'center'}}>
        <Text style={{fontWeight:"bold"}}>
          신규 리스트 생성하기
        </Text>
       </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex : 5,
    backgroundColor : "white",
    justifyContent : 'center',
    alignItems : 'center',
  },
  Note_us: {
    fontSize : 50,
    fontWeight: "bold",
    marginTop:10
  },
  Memo : {
    flex: 3,
    backgroundColor: "White",
    alignItems: 'center',
    justifyContent : 'center',
  },
  bottom_line : {
    flex: 3,
    backgroundColor: "White",
    alignItems: 'center',
    justifyContent : 'center',
    borderBottomWidth: 5,
    borderBottomColor : "lightgray",
    width : "60%"
  },
  texts: {
    fontSize : 30,
    fontWeight : 'bold',
    color:"rgb(68,116,246)"
  }
});

