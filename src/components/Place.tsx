import styled from "@emotion/native";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";
import ShareIcon from "../icons/ShareIcon";
import { Colors } from "../values/colors";
import { Dimensions } from "react-native";
import { HeaderBar } from "./HeaderBar";
import { StarIcon } from "../icons/StarIcon";

const { width, height } = Dimensions.get('window');

const PlaceContainer = styled.View`
  width: ${String(width)}px;
  height: ${String(height)}px;
  background-color: ${Colors.theme};
  padding-top: 30px;
  align-items: center;
  padding: 30px 20px 0 20px;
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

export const Place = () => {

    return (
        <PlaceContainer>
            <HeaderBar />
            <CoverImage
                source={{
                    uri: 'https://ppcult-2022.web.app/images/sp/zoo.jpg',
                }}
            />
            <PlaceTitle>Zoológico de São Paulo</PlaceTitle>
            <PlaceText>Av. Miguel Estefno, 4241 - Água Funda, São Paulo - SP</PlaceText>

            <Rating>
                <StarIcon />
                <RatingValue>5.0</RatingValue>
            </Rating>
        </PlaceContainer>
    )

};