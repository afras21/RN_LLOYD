import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import normalize from 'react-native-normalize';
import { ON_BOARDING_IMAGE1 } from '../../constants/images';
import { colors, fonts } from '../../theme';

const Slide = ({ heading, description, src }) => {
    return (
        <View style={styles.slide}>
            <Image
                style={styles.slideImage}
                resizeMode='contain'
                source={src}
            />
            <Text
                style={styles.slideHeaderText}
            >
                {heading}
            </Text>
            <Text
                style={styles.slideDescriptionText}
            >
                {description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
        height: normalize(500),
        width: '100%',
        alignItems: 'center',
        marginVertical: normalize(10)
    },
    slideHeaderText:{
        textAlign: 'center',
        fontSize: fonts.size.font22,
        lineHeight: normalize(33),
        color: colors.white,
        marginVertical: normalize(5),
        fontFamily: fonts.type.soraSemiBold
    },
    slideDescriptionText:{
        textAlign: 'center',
        fontSize: fonts.size.font14,
        lineHeight: normalize(22),
        color: colors.white,
        marginTop: normalize(6),
        width: '80%',
        alignSelf: 'center',
        fontFamily: fonts.type.soraRegular
    },
    slideImage: {
        width: normalize(302),
        height: normalize(201),
        marginBottom: normalize(25)
    },
})

export default Slide
