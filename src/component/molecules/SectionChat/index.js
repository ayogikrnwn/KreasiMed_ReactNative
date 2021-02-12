import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILSADM } from '../../../assets'
import { colors, fonts } from '../../../utils'

const SectionChat = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.icon}>
                <ILSADM />
                
            </View>
            <Text style={styles.caption}>Konsultasi Dengan Admin</Text>
        </TouchableOpacity>
    )
}

export default SectionChat;

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
        paddingTop: 12,
        marginBottom: 25
        
      },
      caption: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: "#000000",
        marginLeft: 20,
        paddingTop: 15
        
      }
})
