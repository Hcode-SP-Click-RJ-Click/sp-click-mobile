import styled from "@emotion/native";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";
import ShareIcon from "../icons/ShareIcon";
import { usePlace } from "../providers/PlaceProvider";
import { Colors } from "../values/colors";

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

export const HeaderBar = () => {

    const {
        hidePlace,
    } = usePlace();

    return (
        <Container>
            <Button
                onPress={() => {
                    hidePlace();
                }}
            >
                <ArrowLeftIcon />
            </Button>
            <PlaceTitle>Zoológico de São Paulo</PlaceTitle>
            <Button>
                <ShareIcon />
            </Button>
            <Button>
                <FavoriteOutlineIcon
                    color={Colors.themeContrast}
                />
            </Button>
        </Container>
    );

};