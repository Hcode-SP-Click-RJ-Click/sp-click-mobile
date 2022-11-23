import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { PlaceItem } from "../components/PlaceItem";

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

export const HomeScreen = () => {

    return (
        <Container>
            <StatusBar style="light" />

            <Title>Descubra lugares incríveis!</Title>

            <PlaceItem
                name="Zoológico de São Paulo"
                image={require("./../assets/zoologico.jpg")}
                description="Uma aventura animal!"
            />

            <PlaceItem
                name="Estação da Luz"
                image={require("./../assets/estacao-luz.jpg")}
                description="Um dos cartões postais mais antigos de São Paulo"
            />

            <PlaceItem
                name="MASP"
                image={require("./../assets/masp.jpg")}
                description="Um prato cheio para os amantes da Arte Moderna"
            />
        </Container>
    );

};