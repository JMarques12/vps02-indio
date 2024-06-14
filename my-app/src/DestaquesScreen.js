import React from 'react';
import { View, Text, FlatList } from 'react-native';

const filmesDestaques = [
  { id: 1, title: 'Filme 1', poster: 'https://example.com/poster1.jpg' },
  { id: 2, title: 'Filme 2', poster: 'https://example.com/poster2.jpg' },
  { id: 3, title: 'Filme 3', poster: 'https://example.com/poster3.jpg' },
  // ...
];

function DestaquesScreen() {
  return (
    <View>
      <Text>Destaques</Text>
      <FlatList
        data={filmesDestaques}
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

export default DestaquesScreen;