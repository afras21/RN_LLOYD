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

const LoginScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.swiper}>
                <CustomSwiper />
            </View>
        
            <Text style={styles.loginText}>
                Connect Us / Login  
            </Text>
        
            <GoogleButton
                onPress={() => {}}
            />

            <FacebookButton
                onPress={() => {}}
            />

            <View style={styles.servicePolicyView}>
                <Text style={styles.servicePolicyText}>
                    By joining, You agree to
                </Text>
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <Text style={styles.servicePolicyLinkText}>
                        Terms of Service & Privacy policy
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
