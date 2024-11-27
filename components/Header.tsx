import { height, screenHeight, width } from "@/globalDimension";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import MenuScreen from "@/components/MenuScreen";
import BackIcon from "@/assets/icon/back.svg";
import MenuIcon from "@/assets/icon/menu.svg";
import BuildingIcon from "@/assets/icon/building.svg";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";

interface headerProps {
  back?: () => void; //뒤로가기
  title?: string; //현제 페이지 이름
}

type RouteParams = {
  title: string;
};
export default function Header(headerProps: headerProps) {
  const [menu, setMenu] = useState(false);

  const route = useRoute<any>();
  const currentTitle = route?.name ? route.name : "";
  const navigate = useRouter();

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const back = () => {
    if (currentTitle === "index") return;
    navigate.back();
  };

  return (
    <>
      <View>
        <View style={styles.header}>
          {/* 뒤로가기 */}
          <View style={styles.left}>
            <TouchableOpacity onPress={back}>
              <View style={styles.leftView}>
                <BackIcon />
              </View>
            </TouchableOpacity>
            {/* 제목 */}
            <Text style={styles.headerText}>
              {currentTitle === "post"
                ? "내가 쓴글/댓글"
                : currentTitle === "list"
                ? "관심 목록"
                : currentTitle === "chat"
                ? "채팅"
                : currentTitle === "profile"
                ? "프로필 설정"
                : headerProps.title}
            </Text>
          </View>

          <View style={styles.menuView}>
            <TouchableOpacity
              onPress={() => {
                alert("개발예정입니다");
              }}
            >
              <BuildingIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu}>
              <MenuIcon />
            </TouchableOpacity>
          </View>
        </View>

        <MenuScreen menu={menu} setMenu={setMenu} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: height * 49,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBlockColor: "#ddd",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 18,
  },
  leftView: {
    width: width * 28,
    height: width * 28,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#000",
    fontSize: width * 17,
    fontWeight: "bold",
  },
  menuView: {
    // width: width * 28,
    // height: width * 28,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: width * 10,
  },
});
