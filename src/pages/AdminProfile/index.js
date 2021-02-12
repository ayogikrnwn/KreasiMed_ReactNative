import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../component';
import {colors} from '../../utils';

const AdminProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title=" Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={dataDoctor.data.fullName}
        
        photo={{uri: dataDoctor.data.photo}}
      />
      <Gap height={10} />
      <ProfileItem label="Total melayani pasien" value={dataDoctor.data.university} />
      <ProfileItem
        label="Asal Kota"
        value={dataDoctor.data.hospital_address}
      />
     
      <Gap height={23} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chat', dataDoctor)}
        />
      </View>
    </View>
  );
};

export default AdminProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
