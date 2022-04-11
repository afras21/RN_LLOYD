import React from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import normalize from 'react-native-normalize';
import { icons } from '../../constants';
import { colors, fonts } from '../../theme';

function Button({ selected, src, text1, text2, onPress }) {
    
    return (
        selected === true ?
            <TouchableOpacity  
                style={styles.wrapper}
                onPress={onPress}
            >
                <ImageBackground 
                    source={icons.ELLIPSE} 
                    style={[styles.buttonWrapper, {marginLeft: 2}]} 
                >
                    <Image 
                        source={src} 
                        style={[styles.icon, { tintColor: colors.primary }]}
                    />
                </ImageBackground>
                <Text numberOfLines={1} style={[styles.text, { color: colors.primary }]}>
                    {text1}
                </Text>
                <Text numberOfLines={1} style={[styles.text, { color: colors.primary }]}>
                    {text2}
                </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity  
                style={styles.wrapper}
                onPress={onPress}
            >
                <ImageBackground 
                    source={icons.ELLIPSE_DEFAULT} 
                    style={[styles.buttonWrapper, {marginLeft: 2}]} 
                >
                    <Image 
                        source={src} 
                        style={[styles.icon, { tintColor: 'gray' }]}
                    />
                </ImageBackground>
                <Text numberOfLines={1} style={styles.text}>
                    {text1}
                </Text>
                <Text numberOfLines={1} style={styles.text}>
                    {text2}
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: { 
        height: normalize(50), 
        width: normalize(50), 
        justifyContent: "center", 
        alignItems: 'center',
        marginBottom: normalize(5),
        alignSelf: 'center'
    },
    icon: {
        height: normalize(24),
        width: normalize(24),
        alignSelf: 'center'
    },
    text: { 
        color: colors.white, 
        fontSize: fonts.size.font10, 
        textAlign: 'center',
        fontFamily: fonts.type.soraRegular,
        width: 80,
        marginHorizontal: 2
    },
    wrapper: {
    }
})

export default Button
