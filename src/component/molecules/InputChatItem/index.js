import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChatItem = ({value, onChangeText, onButtonPress, targetChat}) => {
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Tulis Pesan untuk Dokter"
      value={value}
      onChangeText={onChangeText}
    />
    <Button
      disable={value.length < 1}
      type="btn-icon-send"
      onPress={onButtonPress}
    />
  </View>
  );
};

export default InputChatItem;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', backgroundColor: colors.white},
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
