import React from 'react'
import { 
    Image,
    Text, 
    TouchableOpacity 
} from 'react-native';
import normalize from 'react-native-normalize';
import { GOOGLE_LOGO } from '../../constants/icons';
import { colors, fonts } from '../../theme';

function GoogleButton({
    onPress
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#E9544F',
                width: '75%',
                alignItems: 'center',
                padding: normalize(12),
                marginVertical: normalize(10),
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
            <Image
                source={GOOGLE_LOGO}
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
                Login with Google
            </Text>
        </TouchableOpacity>
    )
}

export default GoogleButton
