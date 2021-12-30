import React from 'react';
import {ImageResizeMode} from 'react-native';
import {Image} from './styles';
import {useImageLayout} from '@utils/hooks/useImageLayout';

interface RoundCornerImageProps {
  source: string;
  resizeMode?: ImageResizeMode;
}

const RoundCornerImage: React.FC<RoundCornerImageProps> = ({
  source,
  resizeMode = 'cover',
}) => {
  const {height, onImageLayout} = useImageLayout(source);

  return (
    <Image
      source={{uri: source}}
      resizeMode={resizeMode || 'cover'}
      height={height}
      onLayout={onImageLayout}
    />
  );
};

export default RoundCornerImage;
