import styled from "styled-components/native";

export interface MealStatusStylesProps {
  isOnTheDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.base.gray_300};
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.base.gray_400};
`;

export const IconStatus = styled.View<MealStatusStylesProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, isOnTheDiet }) => {
    return isOnTheDiet
      ? theme.colors.brand.green_mid
      : theme.colors.brand.red_mid;
  }};
`;
