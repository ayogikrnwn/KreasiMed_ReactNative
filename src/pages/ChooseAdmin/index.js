import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor} from '../../assets';
import {Header, ListAdmin} from '../../component';
import {colors} from '../../utils';

const ChooseAdmin = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <ListAdmin
        type="next"
        profile={DummyDoctor}
        name="Alexander Janie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chat')}
      />
      <ListAdmin
        type="next"
        profile={DummyDoctor}
        name="Alexander Janie"
        desc="Wanita"
      />
    </View>
  );
}

export default ChooseAdmin;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
})
