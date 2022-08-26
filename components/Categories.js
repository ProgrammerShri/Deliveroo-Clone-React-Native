import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'category']
        `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => {
        console.log(category);
        return (
          <CategoryCard
            key={category._id}
            title={category.name}
            // imgUrl={urlFor(category.image).width(200).url()}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
