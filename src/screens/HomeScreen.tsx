import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import ImageListItem from '../components/ImageListItem';
import { useCallback, useEffect } from 'react';
import pixabay, { PixabayImage } from '../lib/Pixabay';
import { appendImages, resetImages, selectAllImages, selectImagesPage, selectImagesQuery } from '../lib/imagesSlice';
import Searchbar from '../components/Searchbar';

const renderItem: ListRenderItem<PixabayImage> = ({ item }) => <ImageListItem item={item} />;

const keyExtractor = (item: { id: number }) => `${item.id}`;

const HomeScreen = () => {
  const items = useSelector(selectAllImages);
  const query = useSelector(selectImagesQuery);
  const page = useSelector(selectImagesPage);
  const dispatch = useDispatch();

  useEffect(() => {
    pixabay.images(query).then(result => {
      dispatch(resetImages(result));
    });
  }, [dispatch, query]);

  const fetchMoreData = useCallback(() => {
    pixabay.images(query, page + 1).then(result => {
      dispatch(appendImages(result));
    });
  }, [dispatch, page, query]);

  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.4}
      onEndReached={fetchMoreData}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={Searchbar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
