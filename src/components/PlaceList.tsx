import { useState, useEffect } from "react";
import styled from "@emotion/native";
import { PlaceType } from "../types/PlaceType";
import { PlaceItem } from "./PlaceItem";
import { CategoryType } from "../types/CategoryType";

type PlaceListProps = {
    selectedCategory?: CategoryType | null;
};

const PlaceContainer = styled.ScrollView`
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
`;

export const PlaceList = ({ selectedCategory }: PlaceListProps) => {

    const [places, setPlaces] = useState<PlaceType[]>([{
        id: 1,
        title: "Zoológico de São Paulo",
        subtitle: "Uma aventura animal!",
        image: "https://ppcult-2022.web.app/images/sp/zoo.jpg",
        rating: 4,
        categories: [1, 7],
    }, {
        id: 2,
        title: "Estação da Luz",
        subtitle: "Um dos cartões postais mais antigos de São Paulo",
        image: "https://ppcult-2022.web.app/images/sp/luz.jpg",
        rating: 4.8,
        categories: [1],
    }, {
        id: 3,
        title: "MASP",
        subtitle: "Um prato cheio para os amantes da Arte Moderna",
        image: "https://ppcult-2022.web.app/images/sp/masp.jpg",
        rating: 5,
        categories: [1, 2],
    }]);

    useEffect(() => console.log("CATEGORIA SELECIONADA", selectedCategory), [selectedCategory]);

    return (
        <PlaceContainer>
            {places.map((item) => (
                <PlaceItem
                    key={item.id}
                    data={item}
                />
            ))}
        </PlaceContainer>
    );

}