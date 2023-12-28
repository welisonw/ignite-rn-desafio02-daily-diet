import styled from "styled-components/native";

export interface inputTextStylesProps {
  multiline?: boolean;
};

export const Container = styled.View`
  width: 100%;
  gap: 5px;
`;

export const InputText = styled.TextInput<inputTextStylesProps>`
  height: ${({ multiline }) => (multiline ? "120px" : "48px")};
  padding: 14px;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.fontFamilys.regular};
  border: 1px solid ${({ theme }) => theme.colors.base.gray_300};
  border-radius: 6px;
`;
