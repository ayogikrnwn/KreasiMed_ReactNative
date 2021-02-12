import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor} from '../../assets';
import {Button, Gap, Header, Profile, ProfileItem} from '../../component';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const obat = route.params;
  return (
    <View style={styles.page}>
      <ScrollView>
      <Header title="Profile Obat" onPress={() => navigation.goBack()} />
      <Profile
        name={obat.nama_obat}
        desc={obat.age}
        photo={{uri: obat.photo}}
      />
      <Gap height={10} />
      <ProfileItem label="Kandungan Obat" value={obat.kandungan_obat} />
      <ProfileItem label="Golongan Obat" value={obat.golongan_obat} />
      <ProfileItem label="Produsen Obat" value={obat.produsen_obat} />
      <Gap height={23} />
      <View style={styles.action}>
        {/* <Button
          title="Beli Via Live Chat"
          onPress={() => navigation.navigate('Chat')}
        /> */}
      </View>
      </ScrollView>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
