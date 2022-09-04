import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { ScreenProp } from '../types/navigation';
import { useSelector } from 'react-redux';
import { selectImageById } from '../lib/imagesSlice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ViewImageScreen = ({
  route: {
    params: { id },
  },
}: ScreenProp<'ViewImage'>) => {
  const insets = useSafeAreaInsets();
  const item = useSelector(selectImageById(id));

  if (!item) {
    return <Text>Photo not found!</Text>;
  }

  return (
    <ScrollView style={[styles.container, { paddingLeft: insets.left, paddingRight: insets.right }]}>
      <Image
        style={styles.image}
        source={{
          uri: item.webformatURL,
        }}
      />
      <View style={styles.infoBlock}>
        <View style={styles.userInfo}>
          {item.userImageURL && (
            <Image
              style={styles.avatar}
              source={{
                uri: item.userImageURL,
              }}
            />
          )}
          <Text style={styles.username}>{item.user}</Text>
        </View>
        <Text style={styles.infoText}>tags: {item.tags}</Text>
        <Text style={styles.infoText}>
          resolution: {item.imageWidth}x{item.imageHeight}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 6,
    marginRight: 6,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  username: { fontSize: 16, fontWeight: '600' },
  infoText: { fontSize: 15, marginBottom: 2 },
  infoBlock: { flex: 1, marginTop: 24, padding: 16 },
});

export default ViewImageScreen;
