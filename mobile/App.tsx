import React from 'react';
import { StatusBar } from 'react-native';
import AppStack from './src/routes/Appstack';



export default function App(){
  return(
    <>
    <AppStack />
    <StatusBar style="light" />
    </>
  );
}


  
