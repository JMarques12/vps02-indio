import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function ContatoScreen() {
  return (
    <View>
      <Text>Contato / Quem somos</Text>
      <Text>Nossa equipe é composta por...</Text>
      <Text>Se você tiver alguma dúvida ou sugestão, por favor, não hesite em entrar em contato conosco.</Text>
      <TextInput
        placeholder="Seu nome"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Seu e-mail"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Sua mensagem"
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
      />
      <TouchableOpacity>
        <Text>Enviar mensagem</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ContatoScreen;