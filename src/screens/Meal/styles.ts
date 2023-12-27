import styled from "styled-components/native";

interface HeaderStylesProps {
  isOnTheDiet: boolean | undefined;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<HeaderStylesProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 64px 20px 18px;
  background-color: ${({ theme, isOnTheDiet }) => {
    if (isOnTheDiet) return theme.colors.brand.green_light;
    return theme.colors.brand.red_light;
  }};
`;

export const ContainerIconBack = styled.TouchableOpacity`
  width: 15%;
  padding: 8px;
`;

export const ContainerContent = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.base.gray_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 28px;
  `;

export const Content = styled.View` 
  gap: 24px;
`;

export const ContentNameAndDescription = styled.View`
  gap: 8px;
`;

export const ContentDateAndHour = styled.View`
  gap: 8px;
`;

export const IsOnTheDiet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.base.gray_200};
  width: 144px;
  height: 34px;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 50%;
`;

export const StatusIsOnTheDiet = styled.View<HeaderStylesProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, isOnTheDiet }) => {
    if (isOnTheDiet) return theme.colors.brand.green_dark;
    if (!isOnTheDiet) return theme.colors.brand.red_dark;
  }};
  border-radius: 50%;
`;

export const ContainerButtons = styled.View``;