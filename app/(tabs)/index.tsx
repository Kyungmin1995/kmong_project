import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";

import { useState } from "react";
import NomalScreen from "@/components/NomalScreen";
import ExpandableScreen from "@/components/ExpandableScreen";
import HighEndScreen from "@/components/HighEndScreen";
import { dataA, dataB, dataC } from "../lib/data";
import { height, width } from "@/globalDimension";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function HomeScreen() {
  const navigate = useRouter();
  const [selectedTab, setSelectedTab] = useState("Nomal");

  const goBack = () => {
    //뒤로가기
    // navigate.back();
  };
  const insets = useSafeAreaInsets(); //상태바 정보
  const { top, left, right, bottom } = insets;
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        {/* 헤더 */}
        <View
          style={{
            flex: 1,
            top: Platform.OS === "android" ? top : null,
          }}
        >
          <Header title="감자 마을 매물" back={goBack} />
          <View style={styles.content}>
            <Text
              style={[
                styles.subtitleText,
                {
                  paddingTop: height * 1,
                  paddingBottom: height * 10,
                  paddingLeft: width * 3,
                },
              ]}
            >
              부지
            </Text>
            <ImageBackground
              style={{
                width: "100%",
                height: height * 200,
                backgroundColor: "#F4F2F7",
              }}
              source={
                selectedTab === "Nomal"
                  ? require("@/assets/images/a_img.png")
                  : selectedTab === "Expandable"
                  ? require("@/assets/images/b_img.png")
                  : selectedTab === "HighEnd"
                  ? require("@/assets/images/c_img.png")
                  : require("@/assets/images/a_img.png")
              }
              resizeMode={"cover"} // 'cover', 'contain', 'stretch', 'repeat', 'center'
            />
          </View>
          {/* 탭 버튼 섹션 */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === "Nomal" && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab("Nomal")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "Nomal" && styles.tabTextActive,
                ]}
              >
                일반형
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === "Expandable" && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab("Expandable")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "Expandable" && styles.tabTextActive,
                ]}
              >
                확장형
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === "HighEnd" && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab("HighEnd")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "HighEnd" && styles.tabTextActive,
                ]}
              >
                고급형
              </Text>
            </TouchableOpacity>
          </View>
          {/* 탭 별로 보여질 NomalScreen,ExpandableScreen,HighEndScreen  */}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.tabContent}>
              {selectedTab === "Nomal" && <NomalScreen data={dataA} />}
              {selectedTab === "Expandable" && (
                <ExpandableScreen data={dataB} />
              )}
              {selectedTab === "HighEnd" && <HighEndScreen data={dataC} />}
            </View>
          </ScrollView>
        </View>
        {/* 메인 이미지 영역 */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: height * 8.5,
  },
  content: {
    padding: width * 18,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainCategoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 24,
    fontWeight: 700,
  },
  titleText: {
    fontFamily: "Pretendard",
    fontSize: width * 16,
    fontWeight: 700,
  },
  subtitleText: {
    fontFamily: "Pretendard",
    fontSize: width * 15,
    fontWeight: 600,
  },
  categoryText: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: 600,
  },
  text: {
    fontFamily: "Pretendard",
    fontSize: width * 12,
    fontWeight: 500,
  },
  tabContent: {
    padding: width * 20,
  },
  tabs: {
    flexDirection: "row",
    paddingTop: height * 12,
    paddingBottom: height * 14,
    paddingHorizontal: width * 12,
    // backgroundColor: "blue",
    gap: width * 10,
  },
  tabButton: {
    width: width * 76,
    height: height * 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 5,
    backgroundColor: "#fff",
    borderWidth: width * 1,
    borderColor: "#E4E4E4",
  },
  tabButtonActive: {
    backgroundColor: "#FF6E40",
  },
  tabText: {
    fontSize: width * 15,
    fontWeight: "500",
    color: "#BCBCBC",
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },

  screen: {},
});
