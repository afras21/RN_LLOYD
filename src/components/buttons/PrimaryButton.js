import colors from 'native-base/lib/typescript/theme/base/colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { 
    TouchableOpacity,
    Text
} from 'react-native';
import normalize from 'react-native-normalize';
import { fonts } from '../../theme';

const PrimaryButton = ({ 
    text, 
    onPress, 
    disabled = false, 
    customButtonStyle = {}, 
    customTextStyle={} 
}) => {
    return (
        <TouchableOpacity
            style={[styles.buttonWrapper, customButtonStyle]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, customTextStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper:{
        backgroundColor: colors.primary,
        width: '92%',
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
