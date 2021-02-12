import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor} from '../../assets';
import {Header, ListAdmin} from '../../component';
import {colors} from '../../utils';
import {Fire} from '../../config';

const ChooseObat = ({navigation, route}) => {
  const [listObat, setListObat] = useState([]);
  const itemCategory = route.params;
  useEffect(() => {
    callObatByCategory(itemCategory.category);
  }, []);

  const callObatByCategory = (category) => {
    Fire.database()
      .ref('dataobat/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        console.log('data list doctor:', res.val());
        if (res.val()) {
          setListObat(res.val());
        }
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        <Header
          type="dark"
          title={`Pilih Obat ${itemCategory.category}`}
          onPress={() => navigation.goBack()}
        />
        {listObat?.map((obat) => {
          return (
            <ListAdmin
              key={`category-${obat.id}`}
              type="next"
              profile={{uri: obat.photo}}
              name={obat.nama_obat}
              desc={obat.age}
              onPress={() => navigation.navigate('ProfileObat', obat)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChooseObat;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
