import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ILCBatuk, ILCDemam, ILCSkep, ILCStengg } from '../../../assets';
import { colors, fonts } from '../../../utils';

const ObatCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category == 'Demam') {
      return <ILCDemam style={styles.illustration} />;
    }
    if (category == 'Batuk') {
      return <ILCBatuk style={styles.illustration}/>;
    }
    if (category == 'Flu dan Sakit Kepala'){
      return <ILCSkep style={styles.illustration}/>
    }
    return <ILCSkep style={styles.illustration} />
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
     <Icon />
      <Text style={styles.label}>Saya Butuh Obat</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}

export default ObatCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 120,
    height: 160,
    
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    
  }
})
