import styled from "styled-components/native";


export const ContainerModal = styled.Modal``

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  background-color: #00000040;

`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.base.white};
  padding: 24px;
  border-radius: 8px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: end;
  justify-content: center;
  gap: 12px;
`;
