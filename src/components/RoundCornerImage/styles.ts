import styled from 'styled-components/native';

interface Image {
  height: number;
}

export const Image = styled.Image<Image>`
  height: ${({height}) => height}px;
  align-self: stretch;
  border-radius: 14px;
`;
