import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import SomaScreen from '../screens/SomaScreen';
import SubtracaoScreen from '../screens/SubtracaoScreen';
import MultiplicacaoScreen from '../screens/MultiplicacaoScreen';
import DivisaoScreen from '../screens/DivisaoScreen';
import ResultadoScreen from '../screens/ResultadoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { theme, openSettings } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerTintColor: '#fff',

        headerTitle: 'Calculadora',

        headerRight: () => (
          <Ionicons
            name="settings-outline"
            size={24}
            color="#fff"
            style={{ marginRight: 15 }}
            onPress={openSettings}
          />
        ),
      })}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Soma"
        component={SomaScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Subtração"
        component={SubtracaoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="remove" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Multiplicação"
        component={MultiplicacaoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="close" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Divisão"
        component={DivisaoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="division" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Resultado"
        component={ResultadoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
