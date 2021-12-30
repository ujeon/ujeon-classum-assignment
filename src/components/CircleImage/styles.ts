import styled from 'styled-components/native';

interface ImageProps {
  width?: string;
  height?: string;
}

export const Image = styled.Image<ImageProps>`
  width: ${({width}) => width || '50px'};
  height: ${({height}) => height || '50px'};
  border-radius: 50px;
`;
