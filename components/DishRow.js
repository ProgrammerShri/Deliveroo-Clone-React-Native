import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import Icon from "./Icon";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={tw` p-4 bg-white border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2 `}>
            <Text style={tw`mb-1 text-lg`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`text-gray-400 mt-2`}>
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              style={tw`w-20 h-20  bg-gray-300 p-4`}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center pb-3`}>
            <TouchableOpacity style={tw`mr-2`}>
              <Icon type="ant" name="minuscircle" size={40} color="#00CCBB" />
            </TouchableOpacity>
            <Text style={tw`mx-2`}>0</Text>
            <TouchableOpacity style={tw`ml-2`}>
              <Icon type="ant" name="pluscircle" size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
