import styled from "styled-components/native";
import theme from "@/themes";

export interface ButtonStylesProps {
  bgColor?: keyof typeof theme.colors.base | keyof typeof theme.colors.brand;
};

export const Container = styled.TouchableOpacity<ButtonStylesProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  margin-top: 8px;
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === "gray_200") return theme.colors.base.gray_200;
    if (bgColor === "gray_300") return theme.colors.base.gray_300;
    if (bgColor === "gray_700") return theme.colors.base.gray_700;
    
    if (bgColor === "green_light") return theme.colors.brand.green_light;
    if (bgColor === "red_light") return theme.colors.brand.red_light;

    else return theme.colors.base.gray_700;
  }};
`;
