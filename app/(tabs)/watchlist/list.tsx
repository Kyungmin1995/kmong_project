import Header from "@/components/Header";
import { height, width } from "@/globalDimension";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Post() {
  const insets = useSafeAreaInsets(); //상태바 정보
  const { top, left, right, bottom } = insets;
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 헤더 */}
      <View
        style={{
          flex: 1,
          top: Platform.OS === "android" ? top : null,
        }}
      >
        <Header />
        <View style={styles.content}>
          <View style={{ gap: height * 20 }}>
            <View style={styles.item}>
              <ImageBackground
                style={{
                  width: width * 165,
                  height: height * 110,
                  backgroundColor: "#F4F2F7",
                }}
                source={require("@/assets/images/List/item1.png")}
                resizeMode={"cover"} // 'cover', 'contain', 'stretch', 'repeat', 'center'
              />
              <View style={{ justifyContent: "space-between" }}>
                <View style={{ gap: height * 1 }}>
                  <Text style={styles.subtitleText}>태안군 감자마을</Text>
                  <Text style={styles.text}>A구역 2호</Text>
                </View>
                <Text style={styles.subtitleText}>매매 1000만원</Text>
              </View>
            </View>
            <View style={styles.item}>
              <ImageBackground
                style={{
                  width: width * 165,
                  height: height * 110,
                  backgroundColor: "#F4F2F7",
                }}
                source={require("@/assets/images/List/item2.png")}
                resizeMode={"cover"} // 'cover', 'contain', 'stretch', 'repeat', 'center'
              />
              <View style={{ justifyContent: "space-between" }}>
                <View style={{ gap: height * 1 }}>
                  <Text style={styles.subtitleText}>00시 토마토마을</Text>
                  <Text style={styles.text}>A구역 8호</Text>
                </View>
                <Text style={styles.subtitleText}>매매 1000만원</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: width * 18,
  },
  item: {
    flexDirection: "row",
    gap: width * 11,
    borderBottomWidth: width * 1,
    paddingBottom: height * 20,
    borderColor: "#D9D9D9",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainCategoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 24,
    fontWeight: "bold",
  },
  titleText: {
    fontFamily: "Pretendard",
    fontSize: width * 16,
    fontWeight: "bold",
  },
  subtitleText: {
    fontFamily: "Pretendard",
    fontSize: width * 15,
    fontWeight: "semibold",
  },
  categoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "semibold",
  },
  text: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "medium",
  },
});
