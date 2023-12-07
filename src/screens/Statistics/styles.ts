import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand.green_light};
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
