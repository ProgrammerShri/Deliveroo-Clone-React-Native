import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);
  return (
    <SafeAreaView style={tw`bg-[#00CCBB] flex-1 justify-center items-center`}>
      <Animatable.Image
        source={require("../assets/order-preparing.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={tw`w-96 h-96`}
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={tw`text-lg my-10 text-white font-bold text-center`}
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>

      <Animatable.Image
        source={require("../assets/spinner.gif")}
        iterationCount={1}
        style={tw`w-48 h-48`}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
