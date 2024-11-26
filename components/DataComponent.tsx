import { dataType } from "@/app/lib/data";
import { useRouter } from "expo-router";

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function DataComponent({ data }: { data: dataType[] }) {
  const navigate = useRouter();
  const navigation = (item: dataType) => {
    //상세페이지로 가면서 메인페이지에 누른 데이터 정보전달
    navigate.push({
      pathname: "/detail/[id]",
      params: {
        id: `${item.id}`,
        category: item.category,
        price: item.price,
        address: item.address,
      },
    });
  };

  return (
    <View style={styles.container}>
      {data.map((_, idx: any) => {
        return (
          <TouchableWithoutFeedback key={_.id} onPress={() => navigation(_)}>
            <View style={styles.itemBox}>
              <ImageBackground
                style={{
                  width: 165,
                  height: 110,
                  backgroundColor: "#F4F2F7",
                }}
                source={
                  _.category === "A"
                    ? require("@/assets/images/item1.png")
                    : _.category === "B"
                    ? require("@/assets/images/item2.png")
                    : require("@/assets/images/item3.png")
                }
                resizeMode={"cover"}
              />
              <View style={{ justifyContent: "space-between" }}>
                <View style={{ gap: 2 }}>
                  <Text style={styles.subtitleText}>{_.title}</Text>
                  <Text style={styles.text}>{_.discripte}</Text>
                </View>
                <Text style={styles.subtitleText}>{_.price}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Pretendard",
    fontSize: 12,
    fontWeight: 500,
  },
  subtitleText: {
    fontFamily: "Pretendard",
    fontSize: 15,
    fontWeight: 600,
  },
  container: {},
  itemBox: {
    alignContent: "center",
    flexDirection: "row",
    gap: 10,
    paddingBottom: 19,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D9D9D9",
    marginBottom: 20,
  },
});
