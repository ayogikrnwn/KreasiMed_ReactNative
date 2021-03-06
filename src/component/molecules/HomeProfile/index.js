import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconLC} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';
import {Gap} from '../../atoms';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    city: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      console.log('data user: ', res);
      const data = res;
      setProfile(res);
    });
  }, []);

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={styles.name}>{profile.fullName}</Text>
          <Text style={styles.profesion}>{profile.city}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <IconLC />
      </TouchableOpacity>

      <Gap height={24} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
  container: {flexDirection: 'row'},
  icon: {
    marginLeft: 165,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textTransform: 'capitalize',
  },
  profesion: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.white,
    textTransform: 'capitalize',
  },
});
