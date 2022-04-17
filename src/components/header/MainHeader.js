import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import normalize from 'react-native-normalize';
import { icons } from '../../constants';
import { colors, fonts } from '../../theme';

function MainHeader({ title, navigation, isNotificationVisible = true, isWalletVisible = true, marginBottom = 20  }) {
    const goBackHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={[styles.headerContainer, { marginBottom: normalize(marginBottom) }]}>
            <View style={styles.headerInnerContainer}>
                <TouchableOpacity
                    style={styles.goBackContainer}
                    // onPress={goBackHandler}
                >
                    <Image
                        source={icons.BACK_BUTTON}
                        style={styles.backButton}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={[styles.notificationAndWalletWrapper]}>

                    <TouchableOpacity disabled={!isNotificationVisible} style={styles.notificationWrapper}>
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
                        <TouchableOpacity style={[styles.walletWrapper]}>
                            <Image
                                source={icons.WALLET}
                                style={styles.notificationIcon}
                            />
                            <Text style={styles.walletNumber}>
                                500
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
        height: normalize(90),
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
        width: '98%',
        alignSelf: 'center'
    },
    goBackContainer: {
        width: normalize(30),
        height: normalize(30),
        alignItems: 'center',
        flex: .14,
        alignSelf: 'center',
        marginTop: normalize(11)
    },
    backButton: {
        width: normalize(20),
        height: normalize(21),
        padding: normalize(10),
    },
    title: {
        color: colors.white,
        fontSize: fonts.size.font20,
        fontFamily: fonts.type.soraSemiBold,
        flex: .6
    },
    notificationAndWalletWrapper: {
        flexDirection: 'row',
        flex: .5,
        justifyContent: 'space-evenly'
    },
    notificationWrapper: {
        marginRight: normalize(10)
    },
    notificationIcon: {
        height: 22,
        width: 22
    },
    walletWrapper: {
        flexDirection: 'row'
    },
    walletNumber: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular,
        marginLeft: normalize(7)
    },
    scrollContainer: {
        flex: 1
    },
})

export default MainHeader
