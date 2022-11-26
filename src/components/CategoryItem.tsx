import styled from "@emotion/native";
import { CategoryType } from "../types/CategoryType";

const Container = styled.TouchableOpacity<{
    active: boolean;
}>`
    background-color: ${(props) => props.active ? '#002FF7' : 'transparent'};    
    height: 40px;
    margin-right: 15px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
    justify-content: center;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 16px;
`;

type CategoryItemProps = {
    data: CategoryType;
    active: boolean;
    onPressEvent: () => void;
};

export const CategoryItem = ({ data, active, onPressEvent }: CategoryItemProps) => {

    return (
        <Container
            active={active}
            onPress={onPressEvent}
        >
            <Text>{data.name}</Text>
        </Container>
    );

};