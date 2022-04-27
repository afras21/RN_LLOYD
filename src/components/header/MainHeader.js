import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector } from 'react-redux';
import { icons, strings } from '../../constants';
import { colors, fonts } from '../../theme';

function MainHeader({ title, navigation, isNotificationVisible = true, isWalletVisible = true, marginBottom = 20, isBottomTabScreen = false  }) {
    
    const user = useSelector(state => state.user)

    const goBackHandler = () => {
        navigation.pop();
    }

    const walletHandler = () => {
        navigation.navigate('WalletScreen');
    }

    const notificationHandler = () => {
        navigation.navigate('NotificationScreen');
    }

    return (
        <View style={[styles.headerContainer, { marginBottom: normalize(marginBottom) }]}>
            <View style={styles.headerInnerContainer}>
                {
                    isBottomTabScreen === false &&
                    <TouchableOpacity
                        style={styles.goBackContainer}
                        onPress={goBackHandler}
                    >
                        <Image
                            source={icons.BACK_BUTTON}
                            style={styles.backButton}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                }
                
                
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={[styles.notificationAndWalletWrapper]}>

                    <TouchableOpacity 
                        disabled={!isNotificationVisible} 
                        style={styles.notificationWrapper}
                        onPress={notificationHandler}
                    >
                        {
                            isNotificationVisible &&
                            <Image
                                source={icons.NOTIFICATION}
                                style={styles.notificationIcon}
                            />
                        }
                    </TouchableOpacity>

                    {
                        isWalletVisible &&
                        <TouchableOpacity 
                            style={[styles.walletWrapper]}
                            onPress={walletHandler}
                        >
                            <Image
                                source={icons.WALLET}
                                style={styles.notificationIcon}
                            />
                            <Text style={styles.walletNumber}>
                                {user.walletAmount}
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: normalize(80),
        backgroundColor: colors.bottomTabBgColor,
        paddingBottom: normalize(20),
        borderBottomLeftRadius: normalize(30),
        borderBottomRightRadius: normalize(30),
        width: '100%',
        justifyContent: 'flex-end'
    },
    headerInnerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '85%',
        alignSelf: 'center'
    },
    goBackContainer: {
        width: normalize(30),
        height: normalize(30),
        // alignItems: 'baseline',
        // flex: .14,
        paddingHorizontal: 20,
        marginTop: normalize(11)
    },
    backButton: {
        width: normalize(20),
        height: normalize(16, 'height'),
        position: 'absolute'
    },
    title: {
        color: colors.white,
        fontSize: fonts.size.font18,
        fontFamily: fonts.type.soraSemiBold,
        flex: .6
    },
    notificationAndWalletWrapper: {
        flexDirection: 'row',
        flex: .4,
        justifyContent: 'flex-end'
    },
    notificationWrapper: {
        marginRight: normalize(20)
    },
    notificationIcon: {
        height: normalize(20),
        width: normalize(20)
        
    },
    walletWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    walletNumber: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular,
        marginLeft: normalize(7),
        marginTop: 2
    },
    scrollContainer: {
        flex: 1
    },
})

export default MainHeader
