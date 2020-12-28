import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { IconLC } from '../../../assets';
import {colors, fonts} from '../../../utils';
import { Gap } from '../../atoms';

const HomeProfile = ({onPress}) => {
  //   const [profile, setProfile] = useState({
  //     photo: ILNullPhoto,
  //     fullName: '',
  //     proffesion: '',
  //   });

  //   useEffect(() => {
  //     getData('user').then((res) => {
  //       console.log('data user: ', res);
  //       const data = res;
  //       data.photo = {uri: res.photo};
  //       setProfile(res);
  //     });
  //   }, []);
  return (
    <View style={styles.header}>
      
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <Text style={styles.name}>Ayogi Kurniawan</Text>
          <Text style={styles.profesion}>Kota Bandung</Text>
        </View>
      
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>

      <IconLC  />
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
    flex: 1
  },
  container: {flexDirection: 'row'},
  icon: {
    marginLeft: 165
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
