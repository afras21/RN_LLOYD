import React, { useEffect } from 'react';
import { 
    Image, 
    LogBox, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import { colors, fonts } from '../theme';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { icons, strings } from '../constants'
const SplashScreen = ({ navigation }) => {


    const initialHelperFunction = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token === null) {
            navigation.navigate('LoginScreen');
        } else {
            navigation.navigate('BottomTab');
        }
    };

    useEffect(() => {
        setTimeout(async () => {
            initialHelperFunction();
        }, 2000);
        
    }, []);

    LogBox.ignoreAllLogs();

    return (
        <SafeAreaView style={styles.container} >

            <StatusBar 
                barStyle={strings.STATUS_BAR_STYLE} 
                backgroundColor={colors.black} 
            />

            <View style={styles.logoHeaderSpace} />
            
            <Image
                style={styles.logo}
                source={icons.LOGO}
                resizeMode='contain'
            />
            
            <Text style={styles.tagline} >
                {strings.TAGLINE}
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
