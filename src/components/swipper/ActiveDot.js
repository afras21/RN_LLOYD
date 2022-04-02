import React from 'react';
import { 
    View,
    StyleSheet
} from 'react-native';
import { colors } from '../../theme';

function ActiveDot() {
    return (
        <View style={styles.activeDot} />
    )
}

const styles = StyleSheet.create({
    activeDot:{
        backgroundColor: colors.white, 
        width: 50, 
        height: 8, 
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3
    }
})

export default ActiveDot
