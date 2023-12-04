import styled from "styled-components/native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native"; 

export interface CardBgColors {
  bgColor?: "gray" | "green" | "red";
};

export const Container = styled.View<CardBgColors>`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 102px;
  border-radius: 8px;
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === "gray") return theme.colors.base.gray_200;
    if (bgColor === "green") return theme.colors.brand.green_light;
    if (bgColor === "red") return theme.colors.brand.red_light;
    else return theme.colors.base.gray_200;
  }};
`;

export const ContainerArrowUpRight = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
`;

export const IconArrowUpRight = styled(ArrowUpRight).attrs<CardBgColors>(({ theme, bgColor }) => ({
  size: 24,
  color: bgColor === "green" ? theme.colors.brand.green_dark
       : bgColor === "red" ? theme.colors.brand.red_dark 
       : theme.colors.base.gray_700,
}))<CardBgColors>``;

export const ContainerArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
`;

export const IconArrowBack = styled(ArrowLeft).attrs<CardBgColors>(({ theme, bgColor }) => ({
  size: 24,
  color: bgColor === "green" ? theme.colors.brand.green_dark
       : bgColor === "red" ? theme.colors.brand.red_dark 
       : theme.colors.base.gray_700,
}))<CardBgColors>``;
