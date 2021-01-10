import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {JSONCategoryAdmin, JSONCategoryObat} from '../../assets';
import {
  ObatCategory,
  Gap,
  HomeProfile,
  Header,
  AdminCategory,
} from '../../component';
import {Fire} from '../../config';
import {colors, fonts, showError, getData} from '../../utils';

const Home = ({navigation}) => {
  const [categoryObat, setCategoryObat] = useState([]);
  const [categoryAdmin, setCategoryAdmin] = useState([]);

  useEffect(() => {
    getCategoryObat();
    getCategoryAdmin();
    //getTopRatedDoctors();
    //getNews();
    // navigation.addListener('focus', () => {
    //   getUserData();
  });
  const getCategoryObat = () => {
    Fire.database()
      .ref('category_obat/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategoryObat(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getCategoryAdmin = () => {
    Fire.database()
      .ref('category_admin/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategoryAdmin(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };


  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeProfile onPress={() => navigation.navigate('ChooseAdmin')} />

          <View style={styles.wrapperSection}>
            <Text style={styles.welcome}>Cari Obat Berdasarkan Penyakit</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryObat.map((item) => {
                  return (
                    <ObatCategory
                      key={`category-${item.id}`}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.welcome}>Hubungi Admin</Text>
          </View>
          <View style={styles.category}>
            <Gap width={32} />
            {categoryAdmin.map((item) => {
                  return (
                    <AdminCategory
                      key={`category-${item.id}`}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
              );
            })}
            <Gap width={22} />
          </View>

          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 229,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
