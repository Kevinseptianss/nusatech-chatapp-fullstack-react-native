import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../assets/images/background.png";
import logo from "../assets/images/logo.png";
import COLOR from "../constants/color";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    description: "Atur manajemen kampanyemu dengan mudah",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Dive into a world of blissful massage services tailored to your preferences",
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Experience relaxation like never before with our expert services.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={[styles.slides, { width }]}>
      <Text style={styles.slidesTextHeader} accessibilityLabel={item.title}>
        {item.title}
      </Text>
      <Text style={styles.slidesTextBody} accessibilityLabel={item.description}>
        {item.description}
      </Text>
    </View>
  );
};

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const reff = React.useRef(null);
  const router = useRouter();
  const slideAnimation = React.useRef(new Animated.Value(0)).current;
  const slideAnimation2 = React.useRef(new Animated.Value(height)).current; // Start from the bottom

  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && {
                  backgroundColor: COLOR.secondary,
                  width: 24,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  const slideToValue1 = height * 0.45;
  const centerY = height / 2 + 50;
  const easingFunction = Easing.out(Easing.exp);

  const startAnimation = () => {
    const animation1 = Animated.timing(slideAnimation, {
      toValue: slideToValue1,
      duration: 300,
      easing: easingFunction,
      useNativeDriver: true,
    });

    const animation2 = Animated.timing(slideAnimation2, {
      toValue: centerY,
      duration: 500,
      easing: easingFunction,
      useNativeDriver: true,
    });

    Animated.parallel([animation1, animation2]).start();
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentIndex + 1;
    if (nextSlideIndex < slides.length) {
      const offset = nextSlideIndex * width;
      reff?.current?.scrollToOffset({ offset });
      setCurrentIndex(nextSlideIndex);
    } else {
      startAnimation();
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <Animated.View
          style={[
            styles.bottomContainer,
            { transform: [{ translateY: slideAnimation }] },
          ]}
        >
          <FlatList
            ref={reff}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            pagingEnabled
            data={slides}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slide item={item} />}
            keyExtractor={(item) => item.id}
            style={{ flexGrow: 0 }}
            bounces={false}
          />
          <Footer />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonColumn}>
              <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "white" }]}
                onPress={startAnimation}
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            width: "90%",
            height: height,
            alignItems: "center",
            transform: [{ translateY: slideAnimation2 }],
          }}
        >
          <Text style={styles.welcomeText}>
            Selamat datang di Aplikasi Were Chatiing
          </Text>
          <TouchableOpacity
            style={[
              styles.btn,
              { backgroundColor: COLOR.btnGoogle, width: "100%" },
            ]}
            onPress={() => {
              router.push("/(tabs)/chat");
            }}
          >
            <Text style={styles.googleButtonText}>Lanjutkan Dengan Google</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: "25%",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  bottomContainer: {
    position: "absolute",
    bottom: -30,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    height: "45%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingBottom: 20,
  },
  slides: {
    alignItems: "center",
    justifyContent: "center",
  },
  slidesTextHeader: {
    color: COLOR.secondary,
    fontSize: 30,
    fontWeight: "bold",
    maxWidth: "80%",
    textAlign: "center",
    marginTop: 40,
  },
  slidesTextBody: {
    fontSize: 15,
    maxWidth: "80%",
    textAlign: "center",
  },
  indicator: {
    height: 6,
    width: 6,
    backgroundColor: COLOR.greyout,
    marginHorizontal: 3,
    borderRadius: 99,
  },
  footerContainer: {
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    width: "90%",
  },
  buttonColumn: {
    flexDirection: "column",
    gap: 10,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    backgroundColor: COLOR.secondary,
    borderRadius: 10,
  },
  nextButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  skipButtonText: {
    color: COLOR.secondary,
    fontSize: 15,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    maxWidth: "60%",
    marginBottom: 20,
  },
  googleButtonText: {
    color: COLOR.txtGoogle,
    fontSize: 14,
    fontWeight: "500",
  },
});
