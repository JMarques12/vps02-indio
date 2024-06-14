import React, { useState } from 'eact';
import { View, Text, TextInput, TouchableOpacity } from 'eact-native';

function ContatoScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviarMensagem = () => {
    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
  };

  return (
    <View>
      <Text>Contato / Quem somos</Text>
      <Text>Nossa equipe é composta por...</Text>
      <Text>Se você tiver alguma dúvida ou sugestão, por favor, não hesite em entrar em contato conosco.</Text>
      <TextInput
        placeholder="Seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Sua mensagem"
        value={mensagem}
        onChangeText={(text) => setMensagem(text)}
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
      />
      <TouchableOpacity onPress={handleEnviarMensagem}>
        <Text>Enviar mensagem</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ContatoScreen;