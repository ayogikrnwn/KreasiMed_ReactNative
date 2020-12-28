import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {JSONCategoryAdmin, JSONCategoryObat} from '../../assets';
import {
  ObatCategory,
  Gap,
  HomeProfile,
  Header,
  AdminCategory,
} from '../../component';
import {colors, fonts} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeProfile />

          <View style={styles.wrapperSection}>
            <Text style={styles.welcome}>Cari Obat Berdasarkan Penyakit</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryObat.data.map((item) => {
                  return (
                    <ObatCategory
                      key={item.id}
                      category={item.category}
                      //onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.welcome}>Cari Obat Berdasarkan Penyakit</Text>
          </View>
          <View style={styles.category}>
            <Gap width={32} />
            {JSONCategoryAdmin.data.map((item) => {
              return (
                <AdminCategory
                  key={item.id}
                  category={item.category}
                  //onPress={() => navigation.navigate('ChooseDoctor')}
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
