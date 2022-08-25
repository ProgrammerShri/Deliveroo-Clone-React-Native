import React, { useLayoutEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "../components/Icon";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      {/* Header */}
      <View style={tw`flex-row pb-3 items-center mx-4`}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          style={tw`h-12 w-12 bg-gray-300 rounded-full`}
        />

        <View style={tw`flex-1 px-2`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-black text-xl`}>
            Current Location
            <Icon type="entypo" name="chevron-down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <Icon type="ant" name="user" size={35} color="#00CCBB" />
      </View>

      {/* Search  */}
      <View style={tw`flex flex-row  items-center pb-2 mx-4 `}>
        <View style={tw`flex-row flex-1 bg-gray-200 p-3 items-center mx-2`}>
          <Icon type="feather" name="search" size={20} color="gray" />
          <TextInput
            placeholder="Resturant and cusines"
            keyboardType="default"
            style={tw`flex-1 px-2`}
          />
        </View>
        <Icon type="entypo" name="sound-mix" size={25} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
