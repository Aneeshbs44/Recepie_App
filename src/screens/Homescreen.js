import { SafeAreaView, ScrollView, Text, View, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import {MagnifyingGlassIcon, AdjustmentsHorizontalIcon} from "react-native-heroicons/outline"
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class Homescreen extends Component {
  render() {
    return (
      <View className="flex-1 bg-white">
        <StatusBar style='dark' />
        <SafeAreaView>
          <ScrollView
            showsverticalscrollindicator={false} 
            contentContainerStyle={{
              paddingBottom:50,
            }}
            className='space-y-6 pt-14'
            >
              {/* Avatar and bell icon */}
            {/* <Text>Homescreen</Text> */}
            <View className= "mx-4 flex-row justify-between items-center">
              <AdjustmentsHorizontalIcon  size={hp(4)} color={"gray"} />
              <Image source={require('../../assets/images/avatar.jpg')}
              style={{
                width: hp(5),
                height: hp(5),
                resizeMode: 'cover',
              }}
              className = "rounded-full"
              />
              </View>
              {/* Headline */}
              <View className="mx-4 space-y-1 mb-2">
                <View>
                  <Text
                  style={{
                    fontSize: hp(3.5),
                  }}
                  className="font-bold text-neutral-800"
                  >
                  Fast and nutritious</Text>
                </View>
                <Text style={{
                  fontSize: hp(3),
                  }}
                  className="font-extrabold text-neutral-600">
                  Food you <Text className="text-[#f64e32]"> Love </Text>
                </Text>
                </View>
                {/* Search bar */}
                <View className="mx-4 flex-row items-center border rounded-xl border-gray/50 p-[6px]">

                  <View className="bg-white rounded-full p-2">
                   <MagnifyingGlassIcon
                   size={hp(2.5)}
                   color={"gray"}
                   strokeWidth={3}
                   />
                </View>
                <TextInput
                  placeholder='Search your favourite food'
                  placeholderTextColor={"gray"}
                  style={{
                    fontSize: hp(1.7),
                  }}
                  className="flex-1 text-base mb-1 pl-1 tracking-widest"
                  />
                </View>
                
          </ScrollView>
        </SafeAreaView>
        
      </View>
    )
  }
}

export default Homescreen