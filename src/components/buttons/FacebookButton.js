import React from 'react'
import { 
    Image,
    StyleSheet,
    Text, 
    TouchableOpacity 
} from 'react-native';
import normalize from 'react-native-normalize';
import { icons, strings } from '../../constants';
import { colors, fonts } from '../../theme';

const FacebookButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Image
                source={icons.FACEBOOK_LOGO}
                style={styles.facebookLogo}
                resizeMode='contain'
            />
            <Text style={styles.buttonText}>
                {strings.LOGIN_WITH_FACEBOOK}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3A589A',
        width: '75%',
        alignItems: 'center',
        padding: normalize(12),
        marginVertical: normalize(10),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    facebookLogo: {
        height: normalize(22),
        width: normalize(22),
        marginRight: normalize(20)
    },
    buttonText: {
        color: colors.white,
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold
    }
});

export default FacebookButton
