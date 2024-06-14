import React from 'eact';
import { View, Text, FlatList, Image } from 'eact-native';

const filmesDestaques = [
  { id: 1, title: 'Filme 1', poster: 'https://example.com/poster1.jpg' },
  { id: 2, title: 'Filme 2', poster: 'https://example.com/poster2.jpg' },
  { id: 3, title: 'Filme 3', poster: 'https://example.com/poster3.jpg' },
  //...
];

function DestaquesScreen() {
  return (
    <View>
      <Text>Destaques</Text>
      <FlatList
        data={filmesDestaques}
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

export default DestaquesScreen;