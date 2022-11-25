import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";
import { StarIcon } from "../icons/StarIcon";

const PlaceContainer = styled.View`
  height: 200px;
  width: 100%;
  margin-top: 15px;
  position: relative;
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

const ImageOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PlaceRating = styled.View`
  position: absolute;
  right: 15px;
  bottom: 15px;
  align-items: center;
`;

const PlaceRatingValue = styled.Text`
  font-size: 14px;
  color: #fff;
`;

const Buttons = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Button = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #FFFFFF99;
  align-items: center;
  justify-content: center;
`;

type PlaceItemProps = {
    name: string;
    image: any;
    description: string;
};

export const PlaceItem = (props: PlaceItemProps) => {

  return (
    <PlaceContainer>
      <PlaceImage source={props.image} imageStyle={{
        borderRadius: 10,
      }}>
        <ImageOverlay
          colors={['#00000000', '#00000090']}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 0.8 }}
        />
        <PlaceTitle>{props.name}</PlaceTitle>
        <PlaceSubTitle>{props.description}</PlaceSubTitle>
        <PlaceRating>
          <StarIcon />
          <PlaceRatingValue>5.0</PlaceRatingValue>
        </PlaceRating>
        <Buttons>
          <Button>
            <FavoriteOutlineIcon />
          </Button>
        </Buttons>
      </PlaceImage>
    </PlaceContainer>
  );

};