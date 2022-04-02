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

const GoogleButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Image
                source={icons.GOOGLE_LOGO}
                style={styles.googleLogo}
                resizeMode='contain'
            />
            <Text
                style={styles.buttonText}
            >
                {strings.LOGIN_WITH_GOOGLE}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E9544F',
        width: '75%',
        alignItems: 'center',
        padding: normalize(12),
        marginVertical: normalize(10),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    googleLogo: {
        height: normalize(22),
        width: normalize(22),
        marginRight: normalize(20)
    },
    buttonText: {
        color: colors.white,
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.semi
    }
});

export default GoogleButton
