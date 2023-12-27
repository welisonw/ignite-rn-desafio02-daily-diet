import styled from "styled-components/native";

interface ContainerStylesProps {
  percentOfMealsInDiet: string
}

export const Container = styled.View<ContainerStylesProps>`
  flex: 1;
  background-color: ${({ theme, percentOfMealsInDiet }) => {
    return percentOfMealsInDiet === "--,--%"
    ? theme.colors.base.gray_200
    : percentOfMealsInDiet > "50" 
    ? theme.colors.brand.green_light 
    : theme.colors.brand.red_light
  }};
`;

export const Header = styled.View`
  height: 168px;
  padding: 58px 24px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.base.gray_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 33px 24px;
`;

export const ContainerCards = styled.View`
  width: 100%;
  gap: 12px;
`;

export const ContainerCardsInAndOutOfTheDiet = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
