import React from 'react';
import { StatusBar,  SafeAreaView } from 'expo-status-bar';

import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar /> 
      <Cesta />
    </SafeAreaView>    
  );
}
