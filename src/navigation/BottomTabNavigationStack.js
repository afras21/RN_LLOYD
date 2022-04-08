import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Image, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import {
    ActivityScreen,
    LeaderBoardScreen,
    HomeScreen,
    ReferAndEarnScreen,
    NftScreen
} from '../screens/';
import { icons } from '../constants';
import normalize from 'react-native-normalize';
import { colors, fonts } from '../theme';

const BottomTab = createBottomTabNavigator();

const TabBarLabel = ({ focused, label}) => {
    return(
        <Text style={focused === true ? styles.tabBarLabelStyleFocused : styles.tabBarLabelStyleUnFocused}>
            {label}
        </Text>
    )
}

const TabBarIcon = ({ focused, src }) => {
    return(
        <Image
            source={src}
            resizeMode='contain'
            style={focused === true ? styles.tabBarIconStyleFocussed : styles.tabBarIconStyleUnFocussed}
        />
    )
}

const HomeTabBarIcon = ({ focused, src, onPress }) => {
    return (
        <View style={styles.homeButtonWrapper}>
            <View  style={styles.curveBottomTab}/>
            <View style={styles.homeButtonInnerWrapper}>
                <TouchableOpacity
                    style={[styles.homeButton, focused === true ? styles.homeButtonFocused : styles.homeButtonUnFocused]}
                    onPress={onPress}
                >
                    <Image
                        source={src}
                        resizeMode='contain'
                        style={styles.homeButton, focused === true ? [styles.tabBarIconStyleFocussed, styles.tabBarIconStyleFocussedHomeButton] : [styles.tabBarIconStyleUnFocussed, styles.tabBarIconStyleUnFocussedHomeButton]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const BottomTabNavigationStack = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarStyle: styles.tabBarStyle
            }}
            initialRouteName='HomeScreen'
        >
            <BottomTab.Screen
                name='ActivityScreen'
                component={ActivityScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} src={icons.ACTIVITY} />,
                    tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} label={'Activity'} /> ,
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='LeaderBoardScreen'
                component={LeaderBoardScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} src={icons.LEADER_BOARD} />,
                    tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} label={'Leaderboard'} /> ,
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarButton: (props) => <HomeTabBarIcon focused={props.accessibilityState.selected} src={icons.HOME} onPress={props.onPress} />,
                    tabBarLabel: () => <></>,
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='ReferAndEarnScreen'
                component={ReferAndEarnScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} src={icons.REFER_EARN} />,
                    tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} label={'Refer & Earn'} /> ,
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='NFTScreen'
                component={NftScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} src={icons.NFT} />,
                    tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} label={'NFT'} /> ,
                    headerShown: false
                }}
            />
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
    curveBottomTab: {
        height: normalize(70),
        width: normalize(70),
        backgroundColor: colors.bottomTabBgColor,
        transform: [{ rotate: '45deg' }], bottom: 34,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 40,
    },
    tabBarStyle: {
        backgroundColor: colors.bottomTabBgColor,
        borderTopColor: colors.bottomTabBgColor,
        height: normalize(65)
    },
    tabBarIconStyleFocussed: {
        width: normalize(28),
        height: normalize(28),
        tintColor: colors.primary
    },
    tabBarIconStyleUnFocussed: {
        width: normalize(25),
        height: normalize(25),
        tintColor: colors.progressGray
    },
    tabBarLabelStyleFocused: {

        marginBottom: normalize(10),
        fontSize: normalize(12),
        color: colors.primary,
        fontFamily: fonts.type.soraRegular
    },
    tabBarLabelStyleUnFocused: {
        marginBottom: normalize(10),
        fontSize: normalize(12),
        color: colors.progressGray,
        fontFamily: fonts.type.soraRegular
    },
    homeButtonWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeButtonInnerWrapper: {
        position: 'absolute',
        top: -normalize(30),
        zIndex: 1,
        backgroundColor: colors.bottomTabBgColor,
        width: normalize(90),
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        padding: normalize(20)
    },
    homeButton: {
        borderWidth: 8,
        borderRadius: normalize(70),
        width: normalize(70),
        alignItems: 'center',
        height: normalize(70),
        justifyContent: 'center',
        marginTop: -normalize(10),

    },
    homeButtonFocused: {
        backgroundColor: '#F2B01C',
        shadowColor: '#F2B01C',
        borderColor: colors.backgroundColor,
        shadowOpacity: 20,
        elevation: 20
    },
    homeButtonUnFocused: {
        borderColor: colors.progressGray,
        borderWidth: 4
    },
    tabBarIconStyleFocussedHomeButton: {
        tintColor: colors.black,
        width: normalize(30),
        height: normalize(30),
    },
    tabBarIconStyleUnFocussedHomeButton: {
        tintColor: colors.progressGray
    }

})

export default BottomTabNavigationStack