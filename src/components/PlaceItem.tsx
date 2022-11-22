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

export const PlaceItem = () => {

    return (
        <PlaceContainer>
            <PlaceImage source={require('../assets/zoologico.jpg')} imageStyle={{
            borderRadius: 10,
            }}>
            <PlaceTitle>Zoológico de São Paulo</PlaceTitle>
            <PlaceSubTitle>Uma aventura animal!</PlaceSubTitle>
            </PlaceImage>
        </PlaceContainer>
    );

};