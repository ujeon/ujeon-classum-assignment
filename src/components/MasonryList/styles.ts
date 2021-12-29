import styled from 'styled-components/native';

export const ContentsContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

interface ItemContainerProps {
  randomBool: boolean;
  height: number;
}

export const ItemImage = styled.Image<ItemContainerProps>`
  height: ${({height}) => height}px;
  align-self: stretch;
  border-radius: 14px;
`;

export const ItemHeader = styled.View`
  margin-top: 8px;
`;
