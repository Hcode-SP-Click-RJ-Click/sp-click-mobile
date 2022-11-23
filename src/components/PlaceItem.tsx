import styled from "@emotion/native";

const PlaceContainer = styled.View`
  height: 200px;
  width: 100%;
  margin-top: 15px;
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
                <PlaceTitle>{props.name}</PlaceTitle>
                <PlaceSubTitle>{props.description}</PlaceSubTitle>
            </PlaceImage>
        </PlaceContainer>
    );

};