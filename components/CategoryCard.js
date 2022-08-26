import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity style={tw`mr-2`}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={tw`h-20 w-20 bg-gray-300 rounded`}
      />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
