import styled from "@emotion/native";
import { createContext, useContext, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { Button } from "../components/Button";
import { Colors } from "../values/colors";

// 1 - Context
type StartContextType = {

};

const StartContext = createContext<StartContextType>({});

// 2 - Provider
type StartProviderProps = {
    children: ReactNode;
};

const { width, height } = Dimensions.get('window');

const Container = styled.View`
    position: relative;
    width: ${String(width)}px;
    height: ${String(height)}px;
    background-color: #ffffff50;
    align-items: center;
    padding: 0 20px;
`;

const BackgroundImage = styled.Image`
    position: absolute;
    width: ${String(width)}px;
    height: ${String(height)}px;
`;

const PPCultLogo = styled.Image`
    margin-top: 50px;
`;

const SpLogo = styled.Image`
    margin-top: 150px;
`;

const WelcomeText = styled.Text`
    color: ${Colors.themeContrast};
    font-size: 24px;
    margin-top: 100px;
`;

const SubWelcomeText = styled.Text`
    color: ${Colors.themeContrast};
    font-size: 18px;
    margin-top: 40px;
    text-align: center;
`;

const ButtonContainer = styled.View`
    position: absolute;
    bottom: 50px;
    right: 20px;
    left: 20px;
`;

export const StartProvider = ({
    children,
}: StartProviderProps) => {

    const [show, setShow] = useState(true);

    return (
        <StartContext.Provider value={{}}>
            {children}
            {show && (
                <Container>
                    <BackgroundImage
                        source={require('./../assets/sao-paulo.png')}
                        resizeMode="cover"
                    />

                    <PPCultLogo
                        source={require('./../assets/ppcult.png')}
                    />

                    <SpLogo
                        source={require('./../assets/patrocinadores.png')}
                    />

                    <WelcomeText>Seja bem-vindo a São Paulo</WelcomeText>

                    <SubWelcomeText>Conheça a Terra da Garoa com o app SP Click</SubWelcomeText>

                    <ButtonContainer>
                        <Button onPressEvent={() => setShow(false)}>Vamos começar!</Button>
                    </ButtonContainer>
                </Container>
            )}
        </StartContext.Provider>
    );

}

// 3 - Hook
export const useStart = () => {

    const context = useContext(StartContext);

    return context;

}