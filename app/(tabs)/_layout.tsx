import React from 'react';
import { Link, Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {

  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor:Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb'
        } 
      }}
    >
      <Tabs.Screen 
        name='index'
        options={{
          tabBarIcon: ({color}) => <Feather name="search" size={22} color={color}/>,
          tabBarIconStyle: {marginTop: 3,},
          tabBarLabel:'Search',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700, paddingBottom: 7,}
        }}
      />
      <Tabs.Screen 
        name='wishList'
        options={{
          tabBarIcon: ({color}) => <Entypo name="heart-outlined" size={22} color={color} />,
          tabBarIconStyle: {marginTop: 3,},
          tabBarLabel: 'WishList',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700, paddingBottom: 7,}
        }}
      />
      <Tabs.Screen 
        name='trips'
        options={{
          tabBarIcon: ({color}) => <FontAwesome5 name="airbnb" size={22} color={color} />,
          tabBarIconStyle: {marginTop: 3,},
          tabBarLabel: 'Trips',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700, paddingBottom: 7,}
        }}
      />
      <Tabs.Screen 
        name='inbox'
        options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="message-outline" size={22} color={color} />,
          tabBarIconStyle: {marginTop: 3,},
          tabBarLabel: 'Inbox',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700, paddingBottom: 7,}
        }}
      />
      <Tabs.Screen 
        name='profile'
        options={{
          tabBarIcon: ({color}) => <Ionicons name="person-circle-outline" size={22} color={color} />,
          tabBarIconStyle: {marginTop: 3,},
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700, paddingBottom: 7,}
        }}
      />
    </Tabs>
  );
}
