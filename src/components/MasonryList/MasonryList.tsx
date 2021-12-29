import React, {ReactElement, useState} from 'react';
import {
  FlatList,
  VirtualizedList,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {ContentsContainer} from './styles';
import _filter from 'lodash/filter';
import _range from 'lodash/range';
import _map from 'lodash/map';
import MasonryItem from './MasonryItem';
import Space from '@components/Space';

interface MasonryList {
  data: any;
  onEndReached: () => void;
  columns: 1 | 2 | 3;
  columnGap?: string;
  handleItemOnClick: (id: any) => void;
}

const MasonryList: React.FC<MasonryList> = ({
  data,
  onEndReached,
  columns = 2,
  columnGap = '10px',
  handleItemOnClick,
}) => {
  const [isEndReached, setIsEndReached] = useState(false);

  const handleOnEndReached = () => {
    setIsEndReached(true);
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    console.log({event, isEndReached});
    isEndReached && onEndReached();
    setIsEndReached(false);
  };

  const getItemCount = (_: any) => 1;

  const getItem = () => ({
    id: Math.random().toString(12).substring(0),
  });

  const renderItem = ({item}: {item: any; index?: number}): ReactElement => {
    return <MasonryItem item={item} handleItemOnClick={handleItemOnClick} />;
  };

  const renderLists = (_: {item: any; index?: number}) => {
    return (
      <ContentsContainer>
        {_map(_range(0, columns), (value, index) => {
          return (
            <>
              <FlatList
                key={value.toString()}
                listKey={value.toString()}
                style={styles.list}
                data={_filter(data, (_, i) => index === Number(i) % columns)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
              />
              {index + 1 < columns && <Space width={columnGap} />}
            </>
          );
        })}
      </ContentsContainer>
    );
  };

  return (
    <VirtualizedList
      style={styles.listContainer}
      listKey="rootList"
      data={[]}
      renderItem={renderLists}
      onEndReached={handleOnEndReached}
      onEndReachedThreshold={1}
      getItemCount={getItemCount}
      getItem={getItem}
      keyExtractor={(item) => item.toString()}
      onMomentumScrollEnd={handleMomentumScrollEnd}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  list: {
    flex: 1,
  },
});

export default MasonryList;
