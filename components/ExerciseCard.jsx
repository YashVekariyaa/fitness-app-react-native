import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseCard({ item, router, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Animated.View
        entering={FadeInDown.duration(400)
          .delay(index * 200)
          .springify()}
      >
        <TouchableOpacity
          onPress={() => {
            // router.push({ pathname: "/exerciseDetails", params: item });
            setOpen(true);
            // setData(item);
          }}
          className="flex py-3 space-y-2"
        >
          <View
            className="bg-neutral-200 shadow"
            style={{ borderRadius: hp(3) }}
          >
            <Image
              source={{ uri: item.gifUrl }}
              contentFit="cover"
              style={{ width: wp(44), height: wp(52), borderRadius: hp(3) }}
            />
          </View>
          <Text
            style={{ fontSize: hp(1.7) }}
            className="text-neutral-700 font-semibold ml-1 tracking-wide"
          >
            {item.name?.length > 20
              ? item.name.slice(0, 20) + "..."
              : item.name}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <Modal visible={open} animationType="slide">
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <View className="flex flex-1">
            <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
              <Image
                source={{ uri: item.gifUrl }}
                contentFit="cover"
                style={{ width: wp(100), height: wp(100) }}
                className="rounded-b-[40px]"
              />
            </View>

            <TouchableOpacity
              onPress={() => setOpen(false)}
              className="mx-2 absolute rounded-full mt-2 right-0"
            >
              <AntDesign name="closecircle" size={hp(4.5)} color="#f43f5e" />
            </TouchableOpacity>

            {/* details  */}
            <ScrollView
              className="mx-4 space-y-2 mt-3"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 60 }}
            >
              <Animated.Text
                entering={FadeInDown.duration(300).springify()}
                style={{ fontSize: hp(3.5) }}
                className="font-semibold text-neutral-800 tracking-wide"
              >
                {item?.name}
              </Animated.Text>
              <Animated.Text
                entering={FadeInDown.delay(100).duration(300).springify()}
                style={{ fontSize: hp(2) }}
                className="text-neutral-700 tracking-wide pt-2"
              >
                Equipment:{" "}
                <Text className="font-bold text-neutral-800">
                  {item?.equipment}
                </Text>
              </Animated.Text>
              <Animated.Text
                entering={FadeInDown.delay(200).duration(300).springify()}
                style={{ fontSize: hp(2) }}
                className="text-neutral-700 tracking-wide"
              >
                Secondary Muscles:{" "}
                <Text className="font-bold text-neutral-800">
                  {item?.secondaryMuscles}
                </Text>
              </Animated.Text>
              <Animated.Text
                entering={FadeInDown.delay(300).duration(300).springify()}
                style={{ fontSize: hp(2) }}
                className="text-neutral-700 tracking-wide"
              >
                Target:{" "}
                <Text className="font-bold text-neutral-800">
                  {item?.target}
                </Text>
              </Animated.Text>
              <Animated.Text
                entering={FadeInDown.delay(400).duration(300).springify()}
                style={{ fontSize: hp(3) }}
                className="font-semibold text-neutral-700 tracking-wide py-2"
              >
                Instructions:{" "}
              </Animated.Text>

              {item?.instructions &&
                item?.instructions.map((instruction, index) => (
                  <Animated.Text
                    entering={FadeInDown.delay(index * 6 * 100)
                      .duration(300)
                      .springify()}
                    key={`${instruction}-${index}`}
                    className="font-bold text-neutral-800 pb-1"
                    style={{ fontSize: hp(1.7) }}
                  >
                    {index + 1}. {instruction}
                  </Animated.Text>
                ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}
