import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconChat, ILADMD, ILADMS } from '../../../assets';
import { colors, fonts } from '../../../utils';

const AdminCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Admin 1') {
        return <ILADMS style={styles.illustration} />;
      }
      if (category == 'Admin 2') {
        return <ILADMS style={styles.illustration}/>;
      }
     
      return <ILADMS style={styles.illustration} />
    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
     <Icon />
      
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.label}>24 Jam</Text>

      <TouchableOpacity style={styles.buton}>
      <IconChat/>
      </TouchableOpacity>
      
    </TouchableOpacity>
  );
}

export default AdminCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 25,
    width: 150,
    height: 190,
    
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: -10,
    fontFamily: fonts.primary[900],
    color: colors.text.primary,

  },
  buton: {
        alignItems: 'center'
  },
})
