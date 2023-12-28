import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export interface SelectedIsOnTheDietProps extends TouchableOpacityProps {
  isSelected?: boolean;
  bgColor?: "green" | "red";
};

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.base.gray_300};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 64px 20px 18px;
`;

export const ContainerIconBack = styled.TouchableOpacity`
  width: 15%;
  padding: 8px;
`;

export const Content = styled.View` 
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base.gray_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 28px;
`;

export const ConteinerInputs = styled.View`
  width: 100%;
  flex: 1;
`;

export const ContainerRow = styled.View `
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 47%;
  gap: 20px;
`;

export const SelectedIsOnTheDiet = styled.TouchableOpacity.attrs<SelectedIsOnTheDietProps>(({ activeOpacity: 0.7 }))`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 49%;
  height: 50px;
  background-color: ${({ theme, isSelected, bgColor }) => {
    if (isSelected) {
      if (bgColor === "green") return theme.colors.brand.green_light;
      if (bgColor === "red") return theme.colors.brand.red_light;
    };
    return theme.colors.base.gray_200;
  }};
  border-width: 1px;
  border-color: ${({ theme, isSelected, bgColor }) => {
    if (isSelected) {
      if (bgColor === "green") return theme.colors.brand.green_dark;
      if (bgColor === "red") return theme.colors.brand.red_dark;
    };
    return theme.colors.base.gray_200;
  }};
  border-radius: 6px;
  margin-top: 5px;
`;

export const StatusIsOnTheDiet = styled.View<SelectedIsOnTheDietProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === "green") return theme.colors.brand.green_dark;
    if (bgColor === "red") return theme.colors.brand.red_dark;
  }};
  border-radius: 50%;
`;
