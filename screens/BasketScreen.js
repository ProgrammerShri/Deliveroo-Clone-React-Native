import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Icon from "../components/Icon";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const [groupedItemInBaskets, setGroupedItemInBaskets] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemInBaskets(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-md`}>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-gray-400 text-center`}>
              {restaurant?.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
          >
            <Icon
              type="entypo"
              name="circle-with-cross"
              size={40}
              color="#00CCBB"
            />
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row items-center px-4 py-3 bg-white my-5`}>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={tw`w-7 h-7 bg-gray-300 rounded-full `}
          />
          <Text style={tw`flex-1 ml-2`}> Deliver in 50-60 minutes</Text>
          <TouchableOpacity style={tw``}>
            <Text style={tw`text-[#00CCBB]`}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={tw``}>
          {Object.entries(groupedItemInBaskets).map(([key, items]) => {
            return (
              <View
                key={key}
                style={tw`flex-row items-center justify-between bg-white py-2 px-5 border-b border-gray-100`}
              >
                <View style={tw`flex-row items-center`}>
                  <Text style={tw`text-gray-400 text-center`}>
                    {items.length} X
                  </Text>
                  <Image
                    source={{ uri: urlFor(items[0]?.image).url() }}
                    style={tw`w-12 h-12 bg-gray-300 rounded-full ml-1 `}
                  />
                  <Text style={tw` text-left pl-2`}>{items[0]?.name}</Text>
                </View>

                <View style={tw`flex-row items-center`}>
                  <Text style={tw` `}>
                    <Currency quantity={items[0]?.price} currency="INR" />
                  </Text>

                  <TouchableOpacity
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                    style={tw``}
                  >
                    <Text style={tw`text-[#00CCBB] ml-2`}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={tw`p-5 bg-white border-t border-gray-100 mt-4`}>
          <View style={tw`flex-row justify-between py-1`}>
            <Text style={tw`text-gray-400`}>SubTotal</Text>
            <Text style={tw`text-gray-400`}>
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </View>

          <View style={tw`flex-row justify-between py-1`}>
            <Text style={tw`text-gray-400`}>Delivery Fee</Text>
            <Text style={tw`text-gray-400`}>
              <Currency quantity={100} currency="INR" />
            </Text>
          </View>

          <View style={tw`flex-row justify-between py-1`}>
            <Text style={tw`font-extrabold`}>Order Total</Text>
            <Text style={tw`font-extrabold`}>
              <Currency quantity={basketTotal + 100} currency="INR" />
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("PreparingOrderScreen")}
          style={tw`rounded-lg bg-[#00CCBB] mb-4 mx-4 p-4 `}
        >
          <Text style={tw`text-center text-white text-lg font-bold`}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
