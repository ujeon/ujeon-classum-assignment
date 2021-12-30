import React from 'react';
import {Image} from './styles';

interface CircleImageProps {
  source: any;
  defaultSource: string;
  width?: string;
  height?: string;
}

const CircleImage: React.FC<CircleImageProps> = ({
  source,
  defaultSource,
  width,
  height,
}) => {
  return (
    <Image
      source={{uri: source}}
      width={width}
      height={height}
      defaultSource={defaultSource}
    />
  );
};

export default CircleImage;
