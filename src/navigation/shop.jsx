import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { COLORS } from '../constants/themes/colors';

import { Categories, Products, Product } from '../screens';


const Stack = createNativeStackNavigator();


//<Stack Navigator es un contendor que adentro tiene vistas
const ShopNavigator = () => {
  //AGREGANDO ANIMACION
  const config = {
    animation: 'spring',
    config: {
      stiffness:1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      
    }
  }
  
  
  return (
    <Stack.Navigator 
      initialRouteName="Categorias"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.backgroundDark,
          },
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
      },

      }}
     >
      <Stack.Screen
        name="Categorias"
        component={Categories}
        options={{
          headerShown: false, //asi se oculta cabezera
        }}
    />
      <Stack.Screen
        name="Productos"
        component={Products}
     />
      <Stack.Screen
        name="Producto"
        component={Product}
     />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
