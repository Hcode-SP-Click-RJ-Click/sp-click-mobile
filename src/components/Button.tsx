import styled from "@emotion/native";
import { Colors } from "../values/colors";
import { StyleProp, ViewStyle } from "react-native";

const Container = styled.TouchableOpacity`
    background-color: ${Colors.primary};
    height: 40px;
    margin-right: 15px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 20px;
`;

type ButtonProps = {
    children: string;
    onPressEvent?: () => void;
    style?: StyleProp<ViewStyle>;
};

export const Button = ({ children, onPressEvent, style }: ButtonProps) => {

    return (
        <Container
            onPress={onPressEvent}
            style={style}
        >
            <Text>{children}</Text>
        </Container>
    );

};