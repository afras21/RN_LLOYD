import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { 
    colors, 
    fonts 
} from '../theme';
import normalize from 'react-native-normalize';
import CustomSwiper from '../components/swipper/index'
import FacebookButton from '../components/buttons/FacebookButton';
import GoogleButton from '../components/buttons/GoogleButton';
import { strings } from '../constants';

const LoginScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.swiper}>
                <CustomSwiper />
            </View>
        
            <Text style={styles.loginText}>
                {strings.LOGIN_TEXT}  
            </Text>
        
            <GoogleButton
                onPress={() => {}}
            />

            <FacebookButton
                onPress={() => {}}
            />

            <View style={styles.servicePolicyView}>
                <Text style={styles.servicePolicyText}>
                    {strings.SERVICE_POLICY_TEXT}
                </Text>
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <Text style={styles.servicePolicyLinkText}>
                        {strings.SERVICE_POLICY_LINK}
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    swiper:{
        height: '60%'
    },
    loginText:{
        marginVertical: normalize(10),
        fontSize: fonts.size.font16,
        lineHeight: normalize(20),
        color: colors.white
    },
    servicePolicyView:{
        marginTop: normalize(15)
    },
    servicePolicyText: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontWeight: fonts.weight.full,
        textAlign: 'center'
    },
    servicePolicyLinkText: {
        color: '#FFC533',
        fontSize: fonts.size.font12,
        fontWeight: fonts.weight.full,
        textDecorationLine: 'underline',
        marginTop: normalize(5)
    }
})

export default LoginScreen
