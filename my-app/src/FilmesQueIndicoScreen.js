import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
            <Image source={{ uri: item.poster }} style={{ width: 100, height: 150 }} />
          </View>
        )}
      />
    </View>
  );
}

export default FilmesQueIndicoScreen;