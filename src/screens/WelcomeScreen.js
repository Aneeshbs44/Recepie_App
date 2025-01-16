import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp,
  heightPercentageToDP as hp,
 } from 'react-native-responsive-screen'
 import { NavigationContainer } from '@react-navigation/native'
 import LottieView from 'lottie-react-native'
 import Animated from 'react-native-reanimated'
 import { useNavigation } from '@react-navigation/native'
 import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

const WelcomeScreen = () => {
  const animation = React.useRef(null);
  const navigation = useNavigation();
  return (
    <View className='bg-[#f64e32] flex-1 items-center justify-center items-center space-y-10 relative'>
      <Image source={require('../../assets/images/background_rn.png')} 
      style={{ 
        position: 'absolute',
        width: wp(100), 
        height: hp(100),
        resizeMode: 'cover',
         }}
         />
      <StatusBar style='light' />
      {/* Lottie logo */}
     <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: wp(60),
          height: wp(60),
        }}
        source={require('../../assets/lottie/food-logo.json')}
        />
     </View>
            {/* Title and Subtitle */}
            <View className="flex items-center space-y-2">
        <Text
          className="text-white font-extrabold tracking-widest"
          style={{
            fontSize: hp(5),
          }}
        >
          Food Cafe
        </Text>

        <Text
          className="text-white tracking-widest font-medium"
          style={{
            fontSize: hp(2.5),
          }}
        >
          Explore some delicious Food
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingVertical: hp(1.5),
            paddingHorizontal: hp(5),
            borderRadius: hp(1.5),
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "#f64e32",
              fontSize: hp(2.2),
              fontWeight: "medium",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomeScreen