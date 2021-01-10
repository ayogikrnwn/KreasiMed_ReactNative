import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IconKreasi} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../component';
import {Fire} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);

    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setLoading(false);
        setForm('reset');

        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            console.log('data user :', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('Home');
            }
          });
        })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        });
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <IconKreasi width={143} height={49} marginTop={40} />
          <Gap height={30} />

          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={14} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  page: {paddingHorizontal: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
