import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "./Icon";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre = "Offer",
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`bg-white mr-3 shadow`}
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        style={[tw`h-36 w-64 rounded-sm `, { objectfit: "contain" }]}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2 `}>{title}</Text>
        <View style={tw`flex-row items-center `}>
          <Icon
            type="ant"
            name="star"
            size={20}
            color="green"
            style={tw`opacity-50`}
          />
          <Text style={tw`text-gray-500 text-xs pl-1`}>
            <Text style={tw`text-green-500`}>{rating}</Text> · {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center pt-1 -ml-0.5`}>
          <Icon
            type="evil"
            name="location"
            size={24}
            color="gray"
            style={tw`opacity-50`}
          />
          <Text style={tw`text-gray-500 text-xs pl-1`}>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
