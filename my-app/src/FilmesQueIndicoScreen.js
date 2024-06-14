import React from 'react';
import { View, Text, FlatList } from 'react-native';

const filmesIndicados = [
  { id: 1, title: 'Filme 1', poster: 'https://example.com/poster1.jpg' },
  { id: 2, title: 'Filme 2', poster: 'https://example.com/poster2.jpg' },
  { id: 3, title: 'Filme 3', poster: 'https://example.com/poster3.jpg' },
  { id: 4, title: 'Filme 4', poster: 'https://example.com/poster4.jpg' },
  { id: 5, title: 'Filme 5', poster: 'https://example.com/poster5.jpg' },
];

function FilmesQueIndicoScreen() {
  return (
    <View>
      <Text>Filmes que indico</Text>
      <FlatList
        data={filmesIndicados}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Image source={{ uri: item.poster }} />
          </View>
        )}
      />
    </View>
  );
}

export default FilmesQueIndicoScreen;