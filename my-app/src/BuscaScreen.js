import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import axios from 'axios';

const apikey = 'http://www.omdbapi.com/?i=tt3896198&apikey=595d589a';

function BuscaScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscaFilmes() {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${searchQuery}`);
      setFilmes(response.data.Search);
    }
    buscaFilmes();
  }, [searchQuery]);

  return (
    <View>
      <Text>Busca</Text>
      <TextInput
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Buscar filmes"
      />
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Title}</Text>
            <Image source={{ uri: item.Poster }} />
          </View>
        )}
      />
    </View>
  );
}

export default BuscaScreen;