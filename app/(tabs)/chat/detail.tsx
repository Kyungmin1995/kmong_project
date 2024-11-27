import Header from "@/components/Header";
import { height, screenWidth, width } from "@/globalDimension";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import SendIcon from "@/assets/icon/send.svg";
export default function () {
  const insets = useSafeAreaInsets();
  const { top } = insets;
  const route = useRoute<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 헤더 */}
      <View
        style={{
          flex: 1,
          top: Platform.OS === "android" ? top : null,
        }}
      >
        <Header title={route && route.params?.title} />
        <View style={styles.content}>
          <View style={{}}>
            {/* 채팅내용ㅇ */}

            {route.params?.title === "B 7호 김준미" ? (
              <>
                <View
                  style={{
                    borderRadius: width * 100,
                    overflow: "hidden",
                    width: width * 33,
                    height: width * 33,
                    top: height * 40,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: width * 33,
                      height: height * 33,
                      backgroundColor: "#F4F2F7",
                    }}
                    source={require("@/assets/images/chat/profile1.png")}
                    resizeMode={"contain"}
                  />
                </View>

                <View
                  style={{
                    backgroundColor: "#ddd",
                    padding: width * 9,
                    borderRadius: width * 10,
                    position: "absolute",
                    left: width * 50,
                  }}
                >
                  <Text>지금 방이야?</Text>
                </View>
                <ImageBackground
                  style={{
                    width: width * 35,
                    height: width * 35,
                    position: "absolute",
                    left: width * 40,
                    top: height * 40,
                  }}
                  source={require("@/assets/images/chat/Subtract.png")}
                  resizeMode={"contain"}
                />
                <View
                  style={{
                    backgroundColor: "#ddd",
                    padding: width * 9,
                    borderRadius: width * 10,
                    position: "absolute",
                    left: width * 50,
                    top: height * 40,
                  }}
                >
                  <Text>{route.params.data}</Text>
                </View>
                <Text
                  style={{
                    color: "gray",
                    position: "absolute",
                    top: height * 55,
                    left: width * 260,
                  }}
                >
                  4분전
                </Text>
              </>
            ) : (
              <>
                <View style={styles.imgCon}>
                  <ImageBackground
                    style={{
                      width: width * 33,
                      height: width * 33,
                      backgroundColor: "#F4F2F7",
                    }}
                    source={
                      route.params.title === "B 4호 김우인"
                        ? require("@/assets/images/chat/profile2.png")
                        : route.params.title === "A 6호 김동인"
                        ? require("@/assets/images/chat/profile3.png")
                        : require("@/assets/images/chat/profile4.png")
                    }
                    resizeMode={"cover"}
                  />
                </View>

                <ImageBackground
                  style={{
                    width: width * 35,
                    height: width * 35,
                    position: "absolute",
                    left: width * 40,
                  }}
                  source={require("@/assets/images/chat/Subtract.png")}
                  resizeMode={"contain"}
                />
                <View
                  style={{
                    backgroundColor: "#ddd",
                    padding: width * 9,
                    borderRadius: width * 10,
                    position: "absolute",
                    left: width * 50,
                  }}
                >
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{ width: width * 240 }}
                  >
                    {route.params.data}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: height * 30,
            borderTopWidth: height * 1,
            width: screenWidth,
            paddingHorizontal: height * 18,
            paddingVertical: height * 12,
            borderColor: "#D9D9D9",
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text
              style={{
                color: "#D9D9D9",
              }}
            >
              메세지 입력
            </Text>
            <View
              style={{
                backgroundColor: "#FF6804",
                width: width * 44,
                height: height * 20,
                borderRadius: width * 5,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: width * 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: width * 10,
                }}
              >
                전송
              </Text>
              <SendIcon />
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
    padding: width * 20,
  },
  imgCon: {
    borderRadius: width * 100,
    overflow: "hidden",
    width: width * 33,
    height: width * 33,
    backgroundColor: "red",
    top: height * 10,
  },
  categoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: "500",
  },
});
