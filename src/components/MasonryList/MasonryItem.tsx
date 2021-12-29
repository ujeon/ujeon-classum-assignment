import React, {useMemo, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
} from 'react-native';
import {ItemImage, ItemHeader} from './styles';

interface MansonryItemProps {
  item: any;
  handleItemOnClick: (id: any) => void;
}

const MasonryItem: React.FC<MansonryItemProps> = ({
  item,
  handleItemOnClick,
}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const [height, setHeight] = useState(0);

  useEffect(() => {}, [item.imgURL]);

  const handleOnPress = (id: any) => () => {
    handleItemOnClick(id);
  };

  const onImageLayout = (event: LayoutChangeEvent) => {
    let {width} = event.nativeEvent.layout;
    Image.getSize(item.imgURL, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height;
      const maxWidth = width;
      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setHeight(maxHeight * ratio);
    });
  };

  return (
    <Pressable onPress={handleOnPress(item.id)}>
      <View key={item.id} style={styles.itemContainer}>
        <ItemImage
          source={{uri: item.imgURL}}
          randomBool={randomBool}
          resizeMode="cover"
          height={height}
          onLayout={onImageLayout}
        />
        <ItemHeader>
          <Text>{item.text}</Text>
        </ItemHeader>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginTop: 12,
  },
});

export default MasonryItem;
