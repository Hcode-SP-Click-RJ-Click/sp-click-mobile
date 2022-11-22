import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
`;

const PlaceContainer = styled.View`
  border-color: blue;
  border-width: 1px;
  border-style: solid;
  height: 200px,
  width: 100%;
`;

const PlaceImage = styled.ImageBackground`
  height: 200px;
  justify-content: flex-end;
  padding-left: 15px;
  padding-bottom: 15px;
`;

const PlaceTitle = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const PlaceSubTitle = styled.Text`
  color: #fff;
`;

export default function App() {
  return (
    <Container>
      <Title>Descubra lugares incríveis!</Title>
      <PlaceContainer>
        <PlaceImage source={require('./assets/maracana.jpg')}>
          <PlaceTitle>Maracanã</PlaceTitle>
          <PlaceSubTitle>Um dos estádios mais famosos do mundo.</PlaceSubTitle>
        </PlaceImage>
      </PlaceContainer>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({});
