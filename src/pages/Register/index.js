import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    // <>
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            // value={form.fullName}
            // onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Kota Asal"
            // value={form.proffesion}
            // onChangeText={(value) => setForm('proffesion', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            // value={form.email}
            // onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            // value={form.password}
            // onChangeText={(value) => setForm('password', value)}
            // secureTextEntry={true}
          />
          <Gap height={40} />
          <Button title="Continue" />
        </ScrollView>
      </View>
    </View>

    // </>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {padding: 40, paddingTop: 0},
  page: {backgroundColor: colors.white, flex: 1},
});
