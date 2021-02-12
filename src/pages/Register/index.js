import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../component';
import {Fire} from '../../config';
import {colors, getData, storeData, useForm} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [proffesion, setProffesion] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    city: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);

    setLoading(true);

    if (form.fullName && form.city) {
      Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
          setLoading(false);
          setForm('reset');

          const data = {
            fullName: form.fullName,
            city: form.city,
            email: form.email,
            uid: success.user.uid,
          };
          Fire.database()
            .ref('users/' + success.user.uid + '/')
            .set(data);

          storeData('user', data);
          navigation.navigate('Home', data);
          console.log('register success :', success);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoading(false);
          showMessage({
            message: errorMessage,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        });
    } else {
      setLoading(false);
      showMessage({
        message: 'Nama/Kota Asal cannot be empty',
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white,
      });
    }
  };

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Kota Asal"
              value={form.city}
              onChangeText={(value) => setForm('city', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry={true}
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {padding: 40, paddingTop: 0},
  page: {backgroundColor: colors.white, flex: 1},
});
