import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import Icon from "./Icon";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == "${id}"]{
        ...,
        resturants[]=>{
          ...,
          dishes[]=>
          type->{
            name
          }
        }
      }[0]`,
        { id }
      )
      .then((data) => {
        console.log(data);
        setResturants(data);
      });
  }, []);

  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <Icon type="ant" name="arrowright" size={25} color="#00CCBB" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        style={tw`pt-4`}
      >
        {/* Resturant Card  */}
        <ResturantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi!"
          rating={4.5}
          genre="Pizza"
          address="123 Main St"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with a sauce made fromtomato, onion, and various other ingredients."
          dishes={["Pizza", "Pasta", "Burger"]}
          long={-73.988}
          lat={40.7128}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
