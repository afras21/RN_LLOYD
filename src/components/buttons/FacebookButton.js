import React from 'react'
import { 
    Image,
    Text, 
    TouchableOpacity 
} from 'react-native';
import normalize from 'react-native-normalize';
import { FACEBOOK_LOGO } from '../../constants/icons';
import { colors, fonts } from '../../theme';

function FacebookButton({
    onPress
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#3A589A',
                width: '75%',
                alignItems: 'center',
                padding: normalize(12),
                marginVertical: normalize(10),
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
            <Image
                source={FACEBOOK_LOGO}
                style={{
                    height: normalize(22),
                    width: normalize(22),
                    marginRight: normalize(20)
                }}
                resizeMode='contain'
            />
            <Text
                style={{
                    color: colors.white,
                    fontSize: fonts.size.font14,
                    fontWeight: fonts.weight.full
                }}
            >
                Login with Facebook
            </Text>
        </TouchableOpacity>
    )
}

export default FacebookButton
