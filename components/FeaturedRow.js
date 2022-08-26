import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import Icon from "./Icon";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == "${id}"]{
          ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      
      }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data.restaurants);
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
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.title}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
