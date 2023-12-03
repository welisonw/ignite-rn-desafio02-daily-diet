import styled from "styled-components/native";

export interface CardBgColors {
  bgColor?: "gray_200" | "green_light" | "red_light";
};

export const Container = styled.View<CardBgColors>`
  align-items: center;
  justify-content: center;
  height: 102px;
  border-radius: 8px;
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === "gray_200") return theme.colors.base.gray_200;
    if (bgColor === "green_light") return theme.colors.brand.green_light;
    if (bgColor === "red_light") return theme.colors.brand.red_light;
    else return theme.colors.base.gray_200;
  }};
`;
