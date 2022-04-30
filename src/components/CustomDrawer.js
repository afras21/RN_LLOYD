import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { useSelector } from 'react-redux';
import { icons, strings } from '../constants';
import { colors, fonts } from '../theme';

const CustomDrawer = (props) => {
    const { navigation } = props;
        
    const logoutHandler = async () => {
        await AsyncStorage.clear();
        navigation.replace('LoginScreen');
    }

    const closeDrawerNavigation = () => {
        navigation.toggleDrawer();
    }

    const user = useSelector(state => state.user);

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
                bounces={false}
                contentContainerStyle={styles.contentContainerStyle}
            >
                <View style={styles.headerContainer}>
                    <View style={styles.topHeaderContainer}>
                        <TouchableOpacity
                            onPress={closeDrawerNavigation}
                            style={styles.closeDrawerButton}
                        >
                            <Image
                                source={icons.BACK}
                                style={styles.backButton}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeDrawerButton}
                            onPress={() => {}}
                        >
                            <Text style={styles.viewProfileText}>
                                View Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerInnerContainer}>
                        <Image
                            source={user.avatar}
                            style={styles.userIcon}
                            resizeMode={'contain'}
                        />
                        <Text style={styles.welcomeText}>
                            Welcome
                        </Text>
                        <Text style={styles.titleText}>
                            {user.name}
                        </Text>
                    </View>
                </View>
                
                <View>
                    <View style={styles.separatorLine}/>
                    <View style={styles.walletContainer}>
                        <Image
                            source={icons.REFER_AND_EARN_WALLET}
                            style={styles.walletIcon}
                        />
                        <Text style={styles.walletText}>
                            Wallet Balance $ {user.walletAmount}
                        </Text>
                    </View>
                    <View style={styles.separatorLine}/>
                </View>
                <View style={styles.itemList}>
                    <DrawerItemList
                        {...props}
                    />
                    <TouchableOpacity 
                        style={styles.logoutWrapper}
                        onPress={logoutHandler}
                    > 
                        <Text style={styles.logoutText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.versionAndLogoWrapper}>
                    <Image
                        source={icons.LOGO}
                        style={styles.logo}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.versionText}>
                        {strings.VERSION}
                    </Text>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.drawerHeaderColor,
        borderBottomRightRadius: normalize(30),
        borderTopRightRadius: normalize(30),
        borderTopLeftRadius: normalize(30)
    },
    topHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: normalize(13)
    },
    versionAndLogoWrapper: {
        height: normalize(100, 'height')
    },
    versionText: {
        color: colors.drawerText,
        fontFamily: fonts.type.soraMedium,
        fontSize: fonts.size.font14,
        textAlign: 'center'
    },  
    viewProfileText: {
        color: colors.drawerText,
        fontFamily: fonts.type.soraMedium,
        fontSize: fonts.size.font10
    },
    logoutWrapper: {
        width: '88%',
        alignSelf: 'center',
        marginTop: normalize(10)
    },
    logo: {
        width: '50%',
        height: normalize(60),
        alignSelf: 'center'
    },
    closeDrawerButton: {
        padding: normalize(5)
    },
    headerInnerContainer: {
        flex: 1,
        width: '100%'
    },
    logoutText: {
        color: colors.drawerText,
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold
    },  
    backButton: {
        width: normalize(14),
        height: normalize(14),
        tintColor: colors.drawerText
    },
    walletIcon: {
        height: normalize(26),
        width: normalize(26)
    },
    headerContainer: {
        height: normalize(130, 'height'),
        backgroundColor: colors.drawerHeaderColor,
        borderBottomRightRadius: normalize(30),
        borderBottomLeftRadius: normalize(30),
        borderTopRightRadius: normalize(30),
        borderTopLeftRadius: normalize(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-18%'
    },  
    walletContainer: {
        width: '90%',
        alignSelf: 'center',
        padding: normalize(10),
        borderRadius: normalize(12),
        backgroundColor: colors.white,
        height: normalize(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    separatorLine: {
        backgroundColor: '#5B5B5B',
        height: normalize(3, 'height'),
        marginVertical: normalize(12, 'height')
    },
    walletText: {
        fontFamily: fonts.type.soraBold,
        color: colors.drawerText,
        fontSize: fonts.size.font16
    },
    itemList: {
        flex: 1,
        backgroundColor: colors.drawerBackgroundColor
    },
    userIcon: {
        height: normalize(60),
        width: normalize(60),
        alignSelf: 'center'
    },
    contentContainerStyle: {
        flex: 1,
        backgroundColor: colors.drawerBackgroundColor,
        borderBottomEndRadius: normalize(30),
        borderTopRightRadius: normalize(30),
        borderTopLeftRadius: normalize(30)
    },
    welcomeText: {
        textAlign: 'center',
        color: '#FF5E7A',
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14,
        marginVertical: normalize(5)
    },
    titleText: {
        color: colors.black,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12,
        textAlign: 'center'
    }
})

export default CustomDrawer;
