import { useState } from "react";
import styled from "@emotion/native";
import { PlaceType } from "../types/PlaceType";
import { PlaceItem } from "./PlaceItem";

const PlaceContainer = styled.View`
    padding: 0 20px;
    width: 100%;
`;

export const PlaceList = () => {

    const [places, setPlaces] = useState<PlaceType[]>([{
        id: 1,
        title: "Zoológico de São Paulo",
        subtitle: "Uma aventura animal!",
        image: "https://ppcult-2022.web.app/images/sp/zoo.jpg",
        rating: 4,
    }, {
        id: 2,
        title: "Estação da Luz",
        subtitle: "Um dos cartões postais mais antigos de São Paulo",
        image: "https://ppcult-2022.web.app/images/sp/luz.jpg",
        rating: 4.8,
    }, {
        id: 3,
        title: "MASP",
        subtitle: "Um prato cheio para os amantes da Arte Moderna",
        image: "https://ppcult-2022.web.app/images/sp/masp.jpg",
        rating: 5,
    }]);

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