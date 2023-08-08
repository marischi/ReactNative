import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    let nome = 'Mari';

    return (
      <View>
        <Text style={{ margin: 25, fontSize: 25, textAlign: 'center' }}>
          Meu primeiro app
        </Text>
        <Text style={{ marginLeft: 15, color: 'red', fontSize: 20 }}>
          Olá mundo!!
        </Text>

        <Text style={{ fontSize: 20 }}> {nome} </Text>
        <Foto largura={350} altura={350} fulano='IFSP CAR' />
      </View>
    );
  }
}

export default App;

class Foto extends Component {
  render() {
    let img =
      'https://www.ifspcaraguatatuba.edu.br/images/conteudo/Noticias/2023/6636/imagem-1-parte-do-publicoque-assistiu-as-apresentacoesdo-sarau-artistico.png';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />

        <Text>{this.props.fulano}</Text>
      </View>
    );
  }
}
