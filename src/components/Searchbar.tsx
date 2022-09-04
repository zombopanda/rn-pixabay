import { StyleSheet, TextInput, View } from 'react-native';
import { selectImagesQuery, setQuery } from '../lib/imagesSlice';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const query = useSelector(selectImagesQuery);
  const dispatch = useDispatch();
  const onChangeText = (queryText: string) => dispatch(setQuery(queryText));

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={onChangeText}
          placeholder="Search"
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff90',
    paddingTop: 8,
    paddingBottom: 8,
  },
  inputWrapper: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 14,
  },
  input: { backgroundColor: '#fff', paddingHorizontal: 12 },
});

export default SearchBar;
