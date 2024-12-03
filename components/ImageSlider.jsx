import React from "react";
import { sliderImages } from "../constants";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const { width: screenWidth } = Dimensions.get("window");

export default function ImageSlider() {
  return (
    <GestureHandlerRootView
      style={{ flex: 1 }}
      id="carousel-component"
      dataSet={{ kind: "basic-layouts", name: "parallax" }}
    >
      <Carousel
        loop={true}
        width={screenWidth}
        height={258}
        autoPlay={true}
        pagingEnabled={true}
        snapEnabled={true}
        autoPlayInterval={2000}
        data={sliderImages}
        modeConfig={{
          parallaxScrollingScale: 0.7,
          parallaxScrollingOffset: 50,
        }}
        itemWidth={screenWidth * 0.8}
        scrollAnimationDuration={1000}
        renderItem={({ item, index, animationValue }) => {
          return (
            <ParallaxImage
              item={item}
              index={index}
              animationValue={animationValue}
            />
          );
        }}
      />
    </GestureHandlerRootView>
  );
}

const ParallaxImage = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item} style={[styles.image]} />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  imageContainer: {
    width: screenWidth * 0.9, // 80% of the screen width
    height: 250,
    marginHorizontal: screenWidth * 0.1 * 0.5,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
});
