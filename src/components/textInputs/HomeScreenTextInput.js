import React from 'react'
import { TextInput } from 'react-native'
import normalize from 'react-native-normalize'
import { colors, fonts } from '../../theme'

const HomeScreenTextInput = ({ placeholder, onChangeText, value }) => {
    return (
        <TextInput
            style={{
                width: '100%',
                height: normalize(40),
                padding: normalize(10),
                backgroundColor: colors.white,
                borderRadius: normalize(10),
                color: colors.progressGray,
                paddingLeft: normalize(35),
                fontSize: fonts.size.font12,
                fontFamily: fonts.type.soraRegular
            }}
            placeholder={placeholder}
            onChangeText={onChangeText}
            placeholderTextColor={colors.progressGray}
            maxLength={40}
            value={value}
        />
    )
}

export default HomeScreenTextInput
