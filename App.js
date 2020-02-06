import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TextInput,
  ViewPagerAndroid
} from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <ViewPager style={styles.viewPager} initialPage={0} scrollEnabled={true}>
      <View style={styles.pageStyle1} key="1">
        <Text style={styles.text1}>First page</Text>
      </View>
      <View style={styles.pageStyle2} key="2">
        <Text style={styles.text1}>Second page</Text>
      </View>
      <View style={styles.pageStyle3} key="3">
        <Text style={styles.text2}>Gustavo's page</Text>
        <View
          style={
            (styles.buttonDiv3,
            {
              width: "100%",
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end"
            })
          }
        >
          <Button title="Next" />
        </View>
      </View>
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6e5494",
    alignItems: "center",
    justifyContent: "center"
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "10%",
    backgroundColor: "#993399"
  },
  viewPager: {
    flex: 1,
    backgroundColor: "black"
  },
  pageStyle1: {
    fontSize: 30,
    alignItems: "center",
    backgroundColor: "#FF6347",
    padding: 30
  },
  pageStyle2: {
    alignItems: "center",
    backgroundColor: "#4392F1",
    padding: 30
  },
  pageStyle3: {
    alignItems: "center",
    backgroundColor: "#CFFFB3",
    padding: 30
  },
  text1: {
    fontSize: 30,
    color: "#ffffff",
    fontFamily: "monospace"
  },
  text2: {
    fontSize: 30,
    color: "#000000",
    fontFamily: "monospace"
  },
  buttonDiv3: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: "5%"
  }
});
