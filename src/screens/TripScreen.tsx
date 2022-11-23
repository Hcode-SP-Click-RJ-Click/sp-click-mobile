import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

const Container = styled.View`
    padding-top: 30px;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 18px;
`;

export const TripScreen = () => {

    return (
        <Container>
            <StatusBar style="light" />
            <Title>Tela de viagens</Title>
        </Container>
    )

};