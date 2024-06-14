import React from 'eact';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import logo from './logo.svg';
import './App.css';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DestaquesScreen from './DestaquesScreen';
import BuscaScreen from './BuscaScreen';
import FilmesQueIndicoScreen from './FilmesQueIndicoScreen';
import ContatoScreen from './ContatoScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Destaques" component={DestaquesScreen} />
        <Tab.Screen name="Busca" component={BuscaScreen} />
        <Tab.Screen name="Filmes que indico" component={FilmesQueIndicoScreen} />
        <Tab.Screen name="Contato / Quem somos" component={ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;