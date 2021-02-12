import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILSADM, KUES } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Kuesioner = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.icon}>
                <KUES />
                
            </View>
            <View style={styles.content}>
            <Text style={styles.caption}>Yuk Isi Kuesioner Disini</Text>
            <Text style={styles.desc}>Untuk perkembangan aplikasi KreasiMed</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Kuesioner;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 10,
        width: 330,
        height: 95,
        
      },
      content:{
        marginLeft: 20,
      },
      caption: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: "#000000",

        paddingTop: 15
        
      },
      desc: {
      fontSize: 12,
      fontFamily: fonts.primary[400],
      color: colors.secondary,
      textTransform: 'capitalize',
      }
})
