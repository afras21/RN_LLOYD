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
                    style={styles.buttonWrapper} 
                >
                    <Image 
                        source={src} 
                        style={[styles.icon, { tintColor: colors.primary }]}
                    />
                </ImageBackground>
                <Text numberOfLines={1} style={styles.text}>
                    {text1}
                </Text>
                <Text numberOfLines={1} style={styles.text}>
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
                    style={styles.buttonWrapper} 
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
        height: normalize(55), 
        width: normalize(55), 
        display: 'flex', 
        justifyContent: "center", 
        alignItems: 'center',
        marginBottom: normalize(5)
    },
    icon: {
        height: normalize(20),
        width: normalize(20)
    },
    text: { 
        color: colors.white, 
        fontSize: fonts.size.font10, 
        // width: normalize(50),
        textAlign: 'center'
    },
    wrapper: {
    }
})

export default Button
