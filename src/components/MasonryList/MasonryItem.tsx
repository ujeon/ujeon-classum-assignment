import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {ItemHeader} from './styles';
import RoundCornerImage from '@components/RoundCornerImage';

interface MansonryItemProps {
  item: any;
  handleItemOnClick: (id: any) => void;
}

const MasonryItem: React.FC<MansonryItemProps> = ({
  item,
  handleItemOnClick,
}) => {
  const handleOnPress = (id: any) => () => {
    handleItemOnClick(id);
  };

  return (
    <Pressable onPress={handleOnPress(item.id)}>
      <View key={item.id} style={styles.itemContainer}>
        <RoundCornerImage source={item.imgURL} />
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
