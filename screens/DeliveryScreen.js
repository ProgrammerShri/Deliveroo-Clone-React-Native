import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../components/Icon";
import ProgressBar from "react-native-progress/Bar";
import MapView from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View style={tw`bg-[#00CCBB] flex-1 `}>
      <SafeAreaView>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="close" type="ant" size={30} color="white" />
          </TouchableOpacity>
          <Text style={tw`font-light text-white text-lg`}>Order Help</Text>
        </View>

        <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
          <View style={tw`flex-row justify-between items-center`}>
            <View>
              <Text style={tw`text-lg text-gray-400`}>Estimate Arrival</Text>
              <Text style={tw`text-4xl font-bold`}>45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              style={tw`w-20 h-20`}
            />
          </View>
          <ProgressBar
            size={30}
            color="#00CCBB"
            indeterminate={true}
            style={tw`mt-1`}
          />

          <Text style={tw`mt-3 text-gray-500`}>
            Your Order at {restaurant?.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 21.2514,
          longitude: 81.6296,
          //   latitude: restaurant?.lat,
          //   longitude: restaurant?.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={[tw`flex-1 -mt-10`, { zIndex: -1 }]}
        mapType="mutedStandard"
      ></MapView>
      <SafeAreaView style={tw`bg-white flex-row items-center h-28`}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/EGIeHV4WoAA_qE6.jpg",
          }}
          style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`text-lg`}>Shrikant</Text>
          <Text style={tw`text-gray-400`}>Your Rider</Text>
        </View>
        <Text style={tw`text-[#00CCBB] text-lg mx-4`}>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
