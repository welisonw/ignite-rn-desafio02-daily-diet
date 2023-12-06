import styled from "styled-components/native";
import theme from "@/themes";

export interface TextsStylesProps {
  textAlign?: "left" | "center" | "justify" | "right";
  fontFamily?: keyof typeof theme.fonts.fontFamilys;
  fontSize?: keyof typeof theme.fonts.fontSizes; 
  color?: keyof typeof theme.colors.base | keyof typeof theme.colors.brand;
}

export const Container = styled.Text<TextsStylesProps>`
  font-family: ${({ theme, fontFamily }) => {
    return theme.fonts.fontFamilys[fontFamily ?? "regular"];
  }};

  font-size: ${({ theme, fontSize }) => {
    if (fontSize === "xs") return theme.fonts.fontSizes.xs;
    if (fontSize === "sm") return theme.fonts.fontSizes.sm;
    if (fontSize === "md") return theme.fonts.fontSizes.md;
    if (fontSize === "lg") return theme.fonts.fontSizes.lg;
    if (fontSize === "xl") return theme.fonts.fontSizes.xl;
    if (fontSize === "2xl") return theme.fonts.fontSizes["2xl"];
    else return theme.fonts.fontSizes.md;
  }}px;

  color: ${({ theme, color }) => {
    if (color === "gray_100") return theme.colors.base.gray_100;
    if (color === "gray_200") return theme.colors.base.gray_200;
    if (color === "gray_300") return theme.colors.base.gray_300;
    if (color === "gray_400") return theme.colors.base.gray_400;
    if (color === "gray_500") return theme.colors.base.gray_500;
    if (color === "gray_600") return theme.colors.base.gray_600;
    if (color === "gray_700") return theme.colors.base.gray_700;
    if (color === "white") return theme.colors.base.white;

    if (color === "green_light") return theme.colors.brand.green_light;
    if (color === "green_mid") return theme.colors.brand.green_mid;
    if (color === "green_dark") return theme.colors.brand.green_dark;
    if (color === "red_light") return theme.colors.brand.red_light;
    if (color === "red_mid") return theme.colors.brand.red_mid;
    if (color === "red_dark") return theme.colors.brand.red_dark;

    else return theme.colors.base.gray_700;
  }};

  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;
