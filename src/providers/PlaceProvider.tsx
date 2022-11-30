import styled from "@emotion/native";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";
import ShareIcon from "../icons/ShareIcon";
import { Colors } from "../values/colors";
import { Dimensions } from "react-native";
import { HeaderBar } from "./../components/HeaderBar";
import { StarIcon } from "../icons/StarIcon";
import { Button } from "../components/Button";
import { useState, ReactNode, useContext, useEffect } from "react";
import { PlaceContext } from "../contexts/PlaceContext";
import { PlaceType } from "../types/PlaceType";
import { placesData } from "../data";

type PlaceProviderProps = {
    children: ReactNode;
}

const { width, height } = Dimensions.get('window');

const Container = styled.View`
    position: absolute;
    width: ${String(width)}px;
    height: ${String(height)}px;
`;

const PlaceContainer = styled.View`
  width: ${String(width)}px;
  height: ${String(height)}px;
  background-color: ${Colors.theme};
  padding-top: 30px;
  align-items: center;
  padding: 30px 20px 0 20px;
  position: relative;
`;

const CoverImage = styled.Image`
    width: ${String(width - 40)}px;
    height: 250px;
    margin-top: 20px;
    border-radius: 10px;
`;

const PlaceTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    color: ${Colors.themeContrast};
    width: 100%;
`;

const PlaceText = styled.Text`
    font-size: 14px;
    color: ${Colors.themeContrast};
    width: 100%;
`;

const Rating = styled.View`
    flex-direction: row;
    margin-top: 30px;
    width: 100%;
`;

const RatingValue = styled.Text`
    color: ${Colors.themeContrast};
    font-size: 14px;
    margin-left: 10px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.themeContrast};
    width: 100%;
    margin-top: 10px;
`;

const Description = styled.Text`
    color: ${Colors.themeContrast};
    margin-top: 20px;
    line-height: 20px;
    text-align: justify;
`;

const ButtonAdd = styled(Button)`
    margin-top: 25px;
    width: ${String(width - 40)}px;
`;

export const PlaceProvider = ({ children }: PlaceProviderProps) => {

    const [show, setShow] = useState(false);
    const [place, setPlace] = useState<PlaceType | null>(null);

    useEffect(() => {

        const estacaoLuz = placesData.find((item) => item.id === 2);

        if (estacaoLuz) {
            setPlace(estacaoLuz);
        }

    }, []);

    const showPlace = () => {
        setShow(true);
    }

    const hidePlace = () => {
        setShow(false);
    }

    return (
        <PlaceContext.Provider value={{
            showPlace,
            hidePlace,
        }}>
            {children}
            <Container
                style={{
                    left: show ? 0 : width,
                }}
            >
                <PlaceContainer>
                    <HeaderBar />
                    <CoverImage
                        source={{
                            uri: place?.image,
                        }}
                    />
                    <PlaceTitle>{place?.title ?? ''}</PlaceTitle>
                    <PlaceText>{place?.address ?? ''}</PlaceText>

                    <Rating>
                        <StarIcon />
                        <RatingValue>{place?.rating.toPrecision(2)}</RatingValue>
                    </Rating>

                    <Title>Descrição</Title>
                    <Description>{place?.description ?? ''}</Description>

                    <ButtonAdd>Adicionar à minha viagem</ButtonAdd>
                </PlaceContainer>
            </Container>
        </PlaceContext.Provider>
    )

};

// use -> Hooks
export const usePlace = () => {

    const context = useContext(PlaceContext);

    return context;

}