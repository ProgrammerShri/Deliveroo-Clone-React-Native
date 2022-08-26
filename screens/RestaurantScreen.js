import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import Icon from "../components/Icon";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const {
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
  } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View style={tw`relative`}>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          style={tw`h-56 w-full bg-gray-300 p-4`}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute top-14 left-5 p-4 bg-gray-100 rounded-full shadow z-10`}
        >
          <Icon type="ant" name="arrowleft" size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View style={tw`bg-white`}>
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-3xl font-bold`}>{title} </Text>
          <View style={tw`flex-row items-center my-1 `}>
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

            <Icon
              type="evil"
              name="location"
              size={24}
              color="gray"
              style={tw`opacity-50`}
            />
            <Text style={tw`text-gray-500 text-xs pl-1`}>
              Nearby · {address}
            </Text>
          </View>

          <Text style={tw`text-gray-500 text-sm mt-2 pb-4`}>
            {short_description}
          </Text>
        </View>

        <TouchableOpacity
          style={tw`flex-row items-center p-4 border-t border-gray-300 justify-between`}
        >
          <Icon
            type="ant"
            name="questioncircleo"
            size={20}
            color="black"
            style={tw`opacity-50`}
          />
          <Text style={tw`text-sm font-bold -ml-36`}>
            Have a food allergy ?
          </Text>
          <Icon type="ant" name="right" size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>

        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
