import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconKreasi} from '../../assets';
import { colors, fonts } from '../../utils';
// import {Fire} from '../../config';  

const Splash = ({navigation}) => {
  useEffect(()=> {
    setTimeout(() => {
    //   Fire.auth().onAuthStateChanged((user) => {
    //     if(user){
    //       //user sedang login
    //       navigation.replace('MainApp');
    //     } else {
    //       //user logout
    //       navigation.replace('GetStarted')
    //     }

    //   }); 
     
    }, 3000) 
 
  }, [navigation]);
  return (
    <View style={styles.page}>
      <IconKreasi />
     
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
