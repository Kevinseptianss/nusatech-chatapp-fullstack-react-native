import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import Icon from 'react-native-vector-icons/Ionicons';
import COLOR from '../../constants/color';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLOR.secondary,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Icon name="chatbubbles" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => <Icon name="settings-sharp" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
