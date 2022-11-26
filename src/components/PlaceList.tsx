import { useState, useEffect } from "react";
import styled from "@emotion/native";
import { PlaceType } from "../types/PlaceType";
import { PlaceItem } from "./PlaceItem";
import { CategoryType } from "../types/CategoryType";
import { placesData } from "../data";

type PlaceListProps = {
    selectedCategory?: CategoryType | null;
};

const PlaceContainer = styled.ScrollView`
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
`;

export const PlaceList = ({ selectedCategory }: PlaceListProps) => {

    const [places, setPlaces] = useState<PlaceType[]>(placesData);

    useEffect(() => {

        if (selectedCategory) {
            const filteredPlaces = placesData.filter((item) => {

                if (item.categories.includes(selectedCategory.id)) {
                    return true;
                } else {
                    return false;
                }
    
            });

            setPlaces(filteredPlaces);
        } else {
            setPlaces(placesData);
        }

    }, [selectedCategory]);

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