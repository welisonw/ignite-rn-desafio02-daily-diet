import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  height: 920;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.base.gray_100};
`;
