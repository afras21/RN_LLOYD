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
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { 
    AccessToken,
    GraphRequest, 
    GraphRequestManager, 
    LoginManager 
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { saveUser } from '../store/actions/user.action';

const TEMP_AUTH_TOKEN = 'LSIBFUWLIEUB19287BISFBWIUB29378BISC'; // REMOVABLE LATER

// GoogleSignin.configure({
//     // Mandatory method to call before calling signIn()
//     scopes: strings.LOGIN_WITH_GOOGLE_SCOPES,
//     webClientId: strings.LOGIN_WITH_GOOGLE_WEB_CLIENT_ID,
// });

const LoginScreen = ({ navigation, saveUser }) => {

    const storeUserDataToStore = async(userData) => {
        await AsyncStorage.setItem('token', userData.accessToken);
        saveUser(userData);
        navigation.navigate('BottomTab');
    }

    /**
     * @todo remove later - using to skip google and fb login
     */
    const tempLoginHandler = () => {
        storeUserDataToStore({accessToken: TEMP_AUTH_TOKEN})
    }

    // const googleLoginHandler = async () => {
    //     try{
    //         await GoogleSignin.hasPlayServices();
    //         const data = await GoogleSignin.signIn();
    //         const { user } = data;
    //         const userData = {
    //             id: user.id,
    //             loginProvider: 'Google', // Google or Facebook
    //             name: user.name,
    //             email: user.email,
    //             avatar: user.photo,
    //             accessToken: data.idToken
    //         }
    //         storeUserDataToStore(userData);
    //     }catch(error){  
    //         console.log(error.toString())
    //     }
    // }

    // const facebookLoginHandler = async() => {
    //     try{
    //         const login = await LoginManager.logInWithPermissions(strings.LOGIN_WITH_FACEBOOK_PERMISSIONS);
    //         if (login.isCancelled === true) {
    //             console.log('Login cancelled');
    //             return;
    //         }
    //         const data = await AccessToken.getCurrentAccessToken();
    //         const accessToken = data.accessToken.toString();
    //         const PROFILE_REQUEST_PARAMS = {
    //             fields: {
    //                 string: strings.LOGIN_WITH_FACEBOOK_PROFILE_REQUEST_PARAMS,
    //             }
    //         };
    //         const profileRequest = new GraphRequest(
    //             strings.LOGIN_WITH_FACEBOOK_GRAPH_REQUEST_ROUTE,
    //             { accessToken, parameters: PROFILE_REQUEST_PARAMS },
    //             (error, user) => {
    //                 if (error) {
    //                     console.log('login info has error: ' + error);
    //                 } else {
    //                     const userData = {
    //                         id: user.id,
    //                         loginProvider: 'Facebook', // Google or Facebook
    //                         name: user.name,
    //                         email: user.email,
    //                         avatar: user?.picture?.data?.url,
    //                         accessToken
    //                     }
    //                     storeUserDataToStore(userData);
    //                 }
    //             },
    //         );
    //         new GraphRequestManager().addRequest(profileRequest).start();
            
    //     }catch(error){
    //         console.log('Login fail with error: ' + error);
    //     }
    // }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.swiper}>
                <CustomSwiper />
            </View>
        
            <Text style={styles.loginText}>
                {strings.LOGIN_TEXT}  
            </Text>
        
            <GoogleButton
                onPress={tempLoginHandler}
            />

            <FacebookButton
                onPress={tempLoginHandler}
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
        color: colors.white,
        fontFamily: fonts.type.soraRegular
    },
    servicePolicyView:{
        marginTop: normalize(15)
    },
    servicePolicyText: {
        color: colors.white,
        fontSize: fonts.size.font12,
        textAlign: 'center',
        fontFamily: fonts.type.soraRegular
    },
    servicePolicyLinkText: {
        color: '#FFC533',
        fontSize: fonts.size.font12,
        textDecorationLine: 'underline',
        marginTop: normalize(5),
        fontFamily: fonts.type.soraRegular
    }
})

const mapStateToProps = state => {
    return {
        user: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveUser: (payload) => dispatch(saveUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
