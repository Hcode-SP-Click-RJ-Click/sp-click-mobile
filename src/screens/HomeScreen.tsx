import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { PlaceList } from "../components/PlaceList";

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  margin-top: 45px;
`;

export const HomeScreen = () => {

    return (
        <Container>
            <StatusBar style="light" />

            <Title>Descubra lugares incríveis!</Title>

            

            <PlaceList />
        </Container>
    );

};