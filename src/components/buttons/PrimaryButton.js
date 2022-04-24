import React from 'react';
import { StyleSheet } from 'react-native';
import { 
    TouchableOpacity,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import { colors, fonts } from '../../theme';

const PrimaryButton = ({ 
    text, 
    onPress, 
    disabled = false, 
    customButtonStyle = {}, 
    customTextStyle={} 
}) => {
    return (
        <LinearGradient
                style={[styles.linearGradient, customButtonStyle]}
                colors={['#F2B01C', '#EBCE2C']}
        >
            <TouchableOpacity
                style={[ styles.buttonWrapper ]}
                onPress={onPress}
                disabled={disabled}
            >
                
                <Text style={[styles.buttonText, customTextStyle]}>
                    {text}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        width: '92%',
        alignSelf: 'center',
        borderRadius: normalize(8)
    },
    buttonWrapper:{
        width: '100%',
        alignSelf: 'center',
        padding: normalize(14),
        borderRadius: normalize(8)
    },
    buttonText: {
        color: colors.black,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14,
        textAlign: 'center'
    }
})

export default PrimaryButton
