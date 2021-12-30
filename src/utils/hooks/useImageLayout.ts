import {useState} from 'react';
import {Image, Dimensions, LayoutChangeEvent} from 'react-native';

export const useImageLayout = (source: string) => {
  const [height, setHeight] = useState(0);

  const onImageLayout = (event: LayoutChangeEvent) => {
    let {width} = event.nativeEvent.layout;
    Image.getSize(source, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height;
      const maxWidth = width;
      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setHeight(maxHeight * ratio);
    });
  };

  return {height, onImageLayout};
};
