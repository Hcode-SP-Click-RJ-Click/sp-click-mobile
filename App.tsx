import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { PlaceItem } from './src/components/PlaceItem';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export default function App() {
  return (
    <Container>
      <Title>Descubra lugares incríveis!</Title>

      <PlaceItem />

      <PlaceItem />

      <PlaceItem />

      {/* <PlaceContainer>
        <PlaceImage source={require('./assets/estacao-luz.jpg')}>
          <PlaceTitle>Estação da Luz</PlaceTitle>
          <PlaceSubTitle>Um dos cartões postais mais antigos de São Paulo</PlaceSubTitle>
        </PlaceImage>
      </PlaceContainer>

      <PlaceContainer>
        <PlaceImage source={require('./assets/masp.jpg')}>
          <PlaceTitle>MASP</PlaceTitle>
          <PlaceSubTitle>Um prato cheio para os amantes da Arte Moderna</PlaceSubTitle>
        </PlaceImage>
      </PlaceContainer> */}
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({});
