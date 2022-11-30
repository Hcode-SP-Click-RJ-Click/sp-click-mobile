import { createContext } from "react";

type PlaceContextType = {
    showPlace: () => void;
    hidePlace: () => void;
};

export const PlaceContext = createContext<PlaceContextType>({
    showPlace: () => { },
    hidePlace: () => { },
});