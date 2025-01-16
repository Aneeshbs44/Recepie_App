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
    </View>
  )
}

export default WelcomeScreen