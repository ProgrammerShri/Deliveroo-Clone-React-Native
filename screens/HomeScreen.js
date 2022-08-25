import React, { useLayoutEffect } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "../components/Icon";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

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
        <View style={tw`flex-row flex-1 bg-gray-200 items-center mx-2 px-2`}>
          <Icon type="feather" name="search" size={20} color="gray" />
          <TextInput
            placeholder="Resturant and cusines"
            keyboardType="default"
            style={tw`flex-1 p-3 `}
          />
        </View>
        <Icon type="entypo" name="sound-mix" size={25} color="#00CCBB" />
      </View>

      {/* Body  */}
      <ScrollView
        style={tw`bg-gray-100 `}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        {/* Categrories  */}
        <Categories />

        {/* Featured Row  */}
        <FeaturedRow
          id="123"
          title="Featured"
          imgUrl="https://links.papareact.com/wru"
          description="Paid placement for our patners"
          featuredCategory="featured"
        />

        <FeaturedRow
          id="456"
          title="Tasty Discount"
          imgUrl="https://links.papareact.com/wru"
          description="Paid placement for our patners"
          featuredCategory="featured"
        />

        <FeaturedRow
          id="789"
          title="Offer Near You"
          imgUrl="https://links.papareact.com/wru"
          description="Paid placement for our patners"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
