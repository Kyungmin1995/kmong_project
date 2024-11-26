import { Stack, useRouter } from "expo-router";
import { height, screenHeight, screenWidth, width } from "@/globalDimension";
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Back_w_Icon from "@/assets/icon/back_w.svg";
import HeartIcon from "@/assets/icon/heart.svg";
import ShareIcon from "@/assets/icon/share.svg";
import MaximizeIcon from "@/assets/icon/maximize.svg";
import HouseIcon from "@/assets/icon/house-2.svg";
import SmartIcon from "@/assets/icon/smart-home.svg";
import CalenderIcon from "@/assets/icon/calendar-tick.svg";
import StarIcon from "@/assets/icon/star.svg";
import HangerIcon from "@/assets/icon/hanger.svg";
import IceIcon from "@/assets/icon/ice.svg";
import AirIcon from "@/assets/icon/air.svg";
import SofaIcon from "@/assets/icon/sofa.svg";
import BathIcon from "@/assets/icon/bath.svg";
import BooksIcon from "@/assets/icon/books.svg";
import NextIcon from "@/assets/icon/Next.svg";
import HeartFillIcon from "@/assets/icon/heart-fill.svg";

type RouteParams = {
  id: string;
  address: string;
  category: string;
  price: string;
};
export default function Screen() {
  const router = useRouter();
  const route = useRoute();

  const { id, address, category, price } = route.params as RouteParams;
  const [activeSlide, setActiveSlide] = useState(0);
  const [fill, setFill] = useState<boolean>(false);

  // 하트클릭
  const onHeartClick = () => setFill(!fill);
  const dummyData = [{ id: 1 }, { id: 2 }, { id: 3 }];

  // 리뷰 더미데이터
  const reviewsA = [
    {
      id: 1,
      rating: 5,
      text: "너무 만족 중이에요. 매주 오고 있습니다^^",
      date: "2024.9.23",
    },
    {
      id: 2,
      rating: 5,
      text: "가족들이랑 시간 보내기 좋네요. 아이들도 주말만 기다려요",
      date: "2024.8.9",
    },
    {
      id: 3,
      rating: 5,
      text: "깨끗하고 편안했어요. 다음에 또 방문할게요.",
      date: "2024.7.15",
    },
  ];
  const reviewsB = [
    {
      id: 1,
      rating: 5,
      text: `아니 진짜 정말 오래 고민한 제가 바보라고 느껴질만큼 너무 만족 중이에요... 매번 숙소 잡기도 귀찮았는데,
확정된 나만의 공간 최곱니다 힐링 완료!!`,
      date: "2024.9.23",
    },
    {
      id: 2,
      rating: 5,
      text: `이거 친구랑 반띵해서 내면 개꿀이더라구요 매번 힐링해야 한다고 캠핑, 글램핑, 여행 같이 다니던 친구가 있었는데 여기로 정착했습니다 ㅎㅎ😙`,
      date: "2024.8.9",
    },
    {
      id: 3,
      rating: 5,
      text: "자연 속에 있는 나...? 꽤나 흥미롭군~",
      date: "2024.7.15",
    },
    {
      id: 4,
      rating: 5,
      text: "여기 카페 커피 존맛탱입니다 ㅎㅎㅎㅎ",
      date: "2024.7.15",
    },
  ];
  const reviewsC = [
    {
      id: 1,
      rating: 5,
      text: "너무 만족 중이에요. 매주 오고 있습니다^^",
      date: "2024.9.23",
    },
    {
      id: 2,
      rating: 5,
      text: "가족들이랑 시간 보내기 좋네요. 아이들도 주말만 기다려요",
      date: "2024.8.9",
    },
  ];
  //이미지 슬라이더
  const imagesA = [
    require("@/assets/images/a_s1.png"),
    require("@/assets/images/a_s2.png"),
    require("@/assets/images/a_s3.png"),
  ];
  const imagesB = [
    require("@/assets/images/b_s1.png"),
    require("@/assets/images/b_s2.png"),
    require("@/assets/images/b_s3.png"),
  ];
  const imagesC = [
    require("@/assets/images/c_s1.png"),
    require("@/assets/images/c_s2.png"),
    require("@/assets/images/c_s3.png"),
  ];

  const insets = useSafeAreaInsets(); //상태바 정보
  const { top, left, right, bottom } = insets;
  console.log(top, "222top");

  const renderItem = ({
    item,
  }: {
    item: { id: number; rating: number; text: string; date: string };
  }) => (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          gap: width * 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </View>
        <Text style={styles.rating}>현재 거주 중</Text>
      </View>
      <View
        style={{
          alignContent: "center",
          gap: width * 5,
          justifyContent: "space-between",
          height: height * 102,
          paddingTop: height * 25,
        }}
      >
        <Text style={styles.review}>{item.text}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // 여기서 헤더를 숨깁니다
        }}
      />
      <View style={styles.container}>
        <View
          style={[
            styles.fixedHeader,
            {
              top: -height * (0 - top),
            },
          ]}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <View style={styles.headerIconItem}>
              <Back_w_Icon />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Carousel
            loop={false}
            width={screenWidth}
            height={height * 280}
            data={dummyData}
            onSnapToItem={(index) => setActiveSlide(index)}
            renderItem={({ index }) => {
              return (
                <View>
                  <ImageBackground
                    style={{
                      height: height * 280,
                    }}
                    source={
                      category === "A"
                        ? imagesA[index]
                        : category === "B"
                        ? imagesB[index]
                        : imagesC[index]
                    }
                    resizeMode={"cover"}
                  >
                    <SafeAreaView>
                      <StatusBar translucent backgroundColor="transparent" />
                    </SafeAreaView>
                  </ImageBackground>
                </View>
              );
            }}
          />
          <View style={styles.body}>
            <View
              style={[
                styles.headerIconCon,
                { right: 0, top: -height * (280 - top) },
              ]}
            >
              <View style={styles.headerIcon}>
                <TouchableOpacity>
                  <View style={styles.headerIconItem}>
                    <ShareIcon />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onHeartClick}>
                  <View style={styles.headerIconItem}>
                    {fill ? <HeartFillIcon /> : <HeartIcon />}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                position: "relative",
                paddingHorizontal: width * 16,
              }}
            >
              <View style={styles.counter}>
                <Text style={styles.counterText}>
                  {activeSlide + 1} / {dummyData.length}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: width * 0.5,
                borderBottomColor: "#D9D9D9",
                paddingHorizontal: width * 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={styles.number}>
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#fff",
                        paddingLeft: width * 8,
                      },
                    ]}
                  >
                    {category === "A"
                      ? "등록번호 92"
                      : category === "B"
                      ? "등록번호 104"
                      : "등록번호 109"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#BCBCBC",
                      },
                    ]}
                  >
                    7일 전
                  </Text>
                </View>
              </View>
              <Text style={styles.address}>
                {category === "B"
                  ? "2~3인용 모듈하우스"
                  : category === "C"
                  ? "2~3인용 모듈하우스 (욕실 1개)"
                  : "1인용 모듈하우스"}
                {address}
              </Text>
              <Text style={styles.price}>{price}</Text>
              <Text
                style={{
                  color: "#404040",
                  fontSize: width * 12,
                  fontWeight: 500,
                  marginBottom: height * 17,
                }}
              >
                {category === "A"
                  ? "관리비 20만원"
                  : category === "B"
                  ? "관리비 20만원"
                  : "관리비 20만원"}
              </Text>
            </View>
            <View style={{ paddingHorizontal: width * 16 }}>
              <View style={styles.banner}>
                <Text
                  style={{
                    color: "#535353",
                    fontSize: width * 14,
                    fontWeight: 800,
                  }}
                >
                  내 방을 더 깨끗하게!
                </Text>
                <Text
                  style={{
                    color: "#535353",
                    fontSize: width * 10,
                    fontWeight: 500,
                  }}
                >
                  새로워진 청소 서비스를 체험해보세요
                </Text>
                <View
                  style={{
                    backgroundColor: "#F3F3F3",
                    borderColor: "#514A50",
                    borderWidth: width * 1,
                    borderRadius: width * 1.2,
                    width: width * 44,
                    height: height * 16,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: height * 11,
                  }}
                >
                  <Text style={{ fontSize: width * 8, color: "#585858" }}>
                    보러가기
                  </Text>
                </View>
              </View>
              <View style={styles.iconBox}>
                <View style={styles.iconItem}>
                  <MaximizeIcon />
                  <Text>전용 19.83㎡</Text>
                </View>
                <View style={styles.iconItem}>
                  <HouseIcon />
                  <Text>
                    {id === "B"
                      ? "2~3인용 모듈하우스"
                      : id === "C"
                      ? "2~3인용 모듈하우스 (욕실 1개)"
                      : "1인용 모듈하우스"}
                  </Text>
                </View>
                <View style={styles.iconItem}>
                  <SmartIcon />
                  <Text>와이파이 보유</Text>
                </View>
                <View style={styles.iconItem}>
                  <CalenderIcon />
                  <Text style={styles.categoryText}>즉시 입주 가능</Text>
                </View>
                <View
                  style={{
                    borderTopColor: "#ddd",
                    borderBottomColor: "#ddd",
                    borderTopWidth: width * 1,
                    paddingTop: height * 25,
                    paddingBottom: height * 25,
                    borderBottomWidth: width * 1,
                  }}
                >
                  <Text
                    style={[styles.subtitleText, { marginBottom: height * 7 }]}
                  >
                    관리비 : 20만원
                  </Text>
                  <Text style={[styles.text]}>
                    포함 : 공유 시설 사용료, 청소비?, 전기료?, 난방비?
                  </Text>
                </View>
                {/* 거주민 리뷰 */}
                <View
                  style={{ marginTop: height * 23, marginBottom: height * 12 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: width * 5,
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.subtitleText}>거주민 리뷰</Text>
                      <StarIcon />
                      <Text style={styles.categoryText}>4.6</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        gap: 3,
                      }}
                    >
                      <Text
                        style={{
                          color: "#FF6804",
                          fontSize: width * 10,
                          fontWeight: "semibold",
                        }}
                      >
                        더보기
                      </Text>
                      <NextIcon />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* 리뷰슬라이더 */}
            <View style={{ marginLeft: width * 16 }}>
              <FlatList
                data={
                  category === "A"
                    ? reviewsA
                    : category === "B"
                    ? reviewsB
                    : reviewsC
                }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                snapToInterval={width * 236} // 슬라이드 간격 (230 + 간격 20)
                decelerationRate="fast" // 스냅 효과 빠르게 적용
                keyExtractor={(item) => item.id.toString()}
              />
            </View>

            {/* 옵션영역 */}
            <View style={{ paddingHorizontal: width * 16 }}>
              <View
                style={{
                  marginTop: height * 58,
                  height: height * 250,
                }}
              >
                <Text style={styles.subtitleText}>옵션</Text>
                <View
                  style={{
                    paddingHorizontal: width * 20,
                    paddingVertical: height * 17,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.icon}>
                    <View style={styles.iconCon}>
                      <HangerIcon />
                    </View>
                    <Text style={styles.iconText}>옷장</Text>
                  </View>
                  <View style={styles.icon}>
                    <View style={styles.iconCon}>
                      <IceIcon />
                    </View>
                    <Text style={styles.iconText}>냉장고</Text>
                  </View>
                  <View style={styles.icon}>
                    <View style={styles.iconCon}>
                      <AirIcon />
                    </View>
                    <Text style={styles.iconText}>에어컨</Text>
                  </View>
                  <View style={styles.icon}>
                    <View style={styles.iconCon}>
                      <SofaIcon />
                    </View>
                    <Text style={styles.iconText}>침대</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", gap: width * 30 }}>
                  <View
                    style={{
                      alignContent: "center",
                      alignItems: "center",
                      gap: height * 6,
                      width: width * 62,
                    }}
                  >
                    <BooksIcon />
                    <Text
                      style={{
                        color: "#BCBCBC",
                      }}
                    >
                      책장, 책상
                    </Text>
                  </View>
                  {category === "C" && (
                    <View
                      style={{
                        alignContent: "center",
                        alignItems: "center",
                        gap: height * 6,
                        width: width * 62,
                      }}
                    >
                      <BathIcon />
                      <Text
                        style={{
                          color: "#BCBCBC",
                        }}
                      >
                        개인욕실
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: width * 18,
            paddingTop: height * 13,
            flexDirection: "row",
            justifyContent: "space-between",
            elevation: 3, // 안드로이드에서 그림자
            shadowColor: "#000", // iOS에서 그림자
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          }}
        >
          <Text>{price}</Text>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btnText}>계약하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedHeader: {
    position: "absolute",
    height: height * 30,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
  },
  headerIconCon: {
    position: "absolute",
    paddingHorizontal: width * 10,
  },
  headerIcon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerIconItem: {
    width: width * 28,
    height: width * 28,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    // paddingHorizontal: width * 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  number: {
    backgroundColor: "#000000",
    width: width * 70,
    height: height * 20,
    borderRadius: width * 10,
    paddingVertical: height * 2,
    justifyContent: "center",
    marginBottom: height * 18,
    marginTop: height * 20,
  },
  text: {
    color: "#404040",
    fontSize: width * 10,
    fontWeight: 500,
  },
  address: {
    color: "#404040",
    fontSize: width * 12,
    fontWeight: 500,
    marginBottom: height * 4,
  },
  price: {
    color: "#404040",
    fontSize: width * 20,
    fontWeight: 700,
    marginBottom: height * 3,
  },
  banner: {
    marginTop: height * 17,
    backgroundColor: "#F2F2F2",
    paddingVertical: height * 10,
    paddingHorizontal: width * 45,
    borderRadius: width * 3,
    // paddingHorizontal: width * 16,
  },
  iconBox: {
    marginTop: height * 40,
  },
  iconItem: {
    flexDirection: "row",
    gap: width * 10,
    alignContent: "center",
    alignItems: "center",
    marginBottom: height * 25,
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
    fontSize: width * 12,
    fontWeight: 600,
    color: "#404040",
  },
  btn: {
    backgroundColor: "#FF6804",
    width: width * 200,
    height: height * 40,
    borderRadius: width * 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 38,
    // elevation: 3, // 안드로이드에서 그림자
    // shadowColor: "#000", // iOS에서 그림자
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
  },
  btnText: {
    fontSize: width * 14,
    fontWeight: "700",
    color: "#fff",
  },
  icon: {
    // backgroundColor: "#ddd",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    gap: height * 6,
  },
  iconCon: {
    width: width * 24,
    height: width * 24,
    alignItems: "center",
  },
  iconText: {
    color: "#BCBCBC",
  },
  slide: {
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  counter: {
    position: "absolute",
    top: -height * 32,
    right: 0,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#0000007a",
    width: width * 35,
    height: height * 20,
    borderRadius: width * 10,
  },
  counterText: {
    fontSize: width * 10,
    fontWeight: "medium",
    color: "#fff",
  },

  card: {
    width: width * 226, // 카드의 너비 설정
    borderColor: "#E4E4E4",
    height: height * 134,
    borderWidth: width * 1,
    marginRight: width * 10, // 카드 간 간격 설정
    padding: width * 6,
    backgroundColor: "#fff",

    justifyContent: "space-between",
  },
  rating: {
    fontSize: width * 8,
    color: "#BCBCBC", // 별점 색상
    fontWeight: "medium",
  },
  review: {
    fontSize: width * 10,
    color: "#535353", // 별점 색상
    fontWeight: "medium",
  },

  date: {
    fontSize: width * 8,
    color: "#BCBCBC", // 별점 색상
    fontWeight: "medium",
  },
});
