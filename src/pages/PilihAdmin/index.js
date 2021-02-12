import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fire} from '../../config';
import {colors, fonts, showError} from '../../utils';
import {AdminCategory, Gap, Header} from '../../component';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PilihAdmin = ({navigation}) => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getTopRatedDoctors();
  });
  const getTopRatedDoctors = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDoctors(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Admin"
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.container}>
        {doctors.map((doctor) => {
          return (
            <AdminCategory
              key={doctor.id}
              name={doctor.data.fullName}
             
              avatar={{uri: doctor.data.photo}}
              onPress={() => navigation.navigate('AdminProfile', doctor)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PilihAdmin;

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
  container: {
    
    padding: 16,
    

    alignItems: 'center',
 
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
