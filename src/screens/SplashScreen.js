import React, { useEffect } from 'react';
import { 
    Image, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import { LOGO } from '../constants/icons';
import { colors, fonts } from '../theme';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen({ navigation }) {

    const tagline = 'TAGLINE';

    const initialHelperFunction = async() => {
        const token = await AsyncStorage.getItem('token');
        if(token === null){
            setTimeout
            navigation.navigate('LoginScreen');
        }else{

        }
    };

    useEffect(() => {
        setTimeout(async() => {
            initialHelperFunction();
        }, 2000);
        
    }, []);

    return (
        <SafeAreaView
            style={styles.container}
        >

            <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />

            <View 
                style={styles.logoHeaderSpace}
            />
            <Image
                style={styles.logo}
                source={LOGO}
                resizeMode='contain'
            />
            <Text
                style={styles.tagline}
            >
                {tagline}
            </Text>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center'
    },
    logoHeaderSpace:{
        height: normalize(234),
        width: '100%'
    },  
    logo: {
        height: 35,
        width: 165
    },
    tagline: {
        color: colors.white,
        fontSize: fonts.size.font12,
        lineHeight: normalize(15.2),
        marginTop: normalize(18),
        fontWeight: fonts.weight.semi
    }
    
})

export default SplashScreen
