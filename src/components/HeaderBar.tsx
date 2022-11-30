import styled from "@emotion/native";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";
import ShareIcon from "../icons/ShareIcon";
import { usePlace } from "../contexts/PlaceContext";
import { Colors } from "../values/colors";
import FavoriteFilledIcon from "../icons/FavoriteFilledIcon";
import { useState } from "react";

type HeaderBarProps = {
    title: string;
};

const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.TouchableOpacity``;

const PlaceTitle = styled.Text`
  color: ${Colors.themeContrast}
`;

export const HeaderBar = ({
    title,
}: HeaderBarProps) => {

    const {
        hidePlace,
    } = usePlace();

    const [isPressed, setIsPressed] = useState(false);

    return (
        <Container>
            <Button
                onPress={() => {
                    hidePlace();
                }}
            >
                <ArrowLeftIcon />
            </Button>
            <PlaceTitle>{title ?? ''}</PlaceTitle>
            <Button>
                <ShareIcon />
            </Button>
            <Button
                onPress={() => {
                    setIsPressed(isPressed ? false : true);
                }}
            >
                <FavoriteFilledIcon
                    color={Colors.themeContrast}
                    fill={isPressed ? 'red' : 'transparent'}
                    stroke={isPressed ? 'transparent' : '#fff'}
                />
            </Button>
        </Container>
    );

};