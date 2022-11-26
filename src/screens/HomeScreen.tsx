import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { CategoriesList } from "../components/CategoriesList";
import { PlaceList } from "../components/PlaceList";
import { useState } from "react";
import { CategoryType } from "../types/CategoryType";

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  margin-top: 45px;
`;

const CategoriesContainer = styled.View`
  height: 60px;
`;

export const HomeScreen = () => {

  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

  return (
    <Container>
      <StatusBar style="light" />

      <Title>Descubra lugares incríveis!</Title>

      <CategoriesContainer>
        <CategoriesList
          onChange={(category) => setSelectedCategory(category)}
        />
      </CategoriesContainer>

      <PlaceList
        selectedCategory={selectedCategory}
      />
    </Container>
  );

};