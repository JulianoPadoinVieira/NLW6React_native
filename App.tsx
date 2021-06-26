import React from 'react';
import { StatusBar, LogBox } from 'react-native';

// Importar fontes (expo install @expo-google-fonts/rajdhani),
// expo install expo-font @expo-google-fonts/inter
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

//Para carregar a segunda tela somente após o carregamento das fontes
//expo install expo-app-loading
import AppLoading from 'expo-app-loading';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';


import { Routes } from './src/routes';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  });

  //Verifica se as fontes foram carregadas
  if(!fontsLoaded){
    //Componente "AppLoading segura a tela de splash"
    return <AppLoading/>

  }

  return(
    /*OBS: O retorno do react native deve ser de apenas um elemento,
      para empacotarmos outros elementos e retornarmos tudo de uma fez só 
      utilizamos o fragment, representado pelo '<> </>'*/
    <Background>      
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider><Routes /></AuthProvider>
    </Background>  
  );
}

