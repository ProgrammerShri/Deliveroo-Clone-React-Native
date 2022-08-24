import React, { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`flex-row py-3 items-center mx-4`}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          style={tw`h-12 w-12 bg-gray-300 rounded-full`}
        />

        <View style={tw`px-2`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-black text-xl`}>Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
