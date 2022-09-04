import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../types/navigation';
import { PixabayImage } from '../lib/Pixabay';

const ImageListItem = ({ item }: { item: PixabayImage }) => {
  const navigation = useNavigation<NavigationProps>();
  const onPressPhoto = () => navigation.navigate('ViewImage', { id: item.id });

  return (
    <TouchableOpacity onPress={onPressPhoto} style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: item.webformatURL,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000010',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 12,
  },
});

export default ImageListItem;
