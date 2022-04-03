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
import { colors } from '../theme';

const BottomTab = createBottomTabNavigator();

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
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={icons.ACTIVITY}
                            resizeMode='contain'
                            style={focused === true ? styles.tabBarIconStyleFocussed : styles.tabBarIconStyleUnFocussed}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (

                        <Text style={focused === true ? styles.tabBarLabelStyleFocused : styles.tabBarLabelStyleUnFocused}>
                            Activity
                        </Text>
                    ),
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='LeaderBoardScreen'
                component={LeaderBoardScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.LEADER_BOARD}
                            resizeMode='contain'
                            style={focused === true ? styles.tabBarIconStyleFocussed : styles.tabBarIconStyleUnFocussed}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={focused === true ? styles.tabBarLabelStyleFocused : styles.tabBarLabelStyleUnFocused}>
                            Leaderboard
                        </Text>
                    ),
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarButton: (props) => (
                        <View style={styles.homeButtonWrapper}>
                            <View style={styles.homeButtonInnerWrapper}>
                                <TouchableOpacity
                                    style={[styles.homeButton, props.accessibilityState.selected === true ? styles.homeButtonFocused : styles.homeButtonUnFocused]}
                                    onPress={props.onPress}
                                >
                                    <Image
                                        source={icons.HOME}
                                        resizeMode='contain'
                                        style={styles.homeButton, props.accessibilityState.selected === true ? [styles.tabBarIconStyleFocussed, styles.tabBarIconStyleFocussedHomeButton] : [styles.tabBarIconStyleUnFocussed, styles.tabBarIconStyleUnFocussedHomeButton]}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ),
                    tabBarLabel: () => (
                        <></>
                    ),
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='ReferAndEarnScreen'
                component={ReferAndEarnScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.REFER_EARN}
                            resizeMode='contain'
                            style={focused === true ? styles.tabBarIconStyleFocussed : styles.tabBarIconStyleUnFocussed}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={focused === true ? styles.tabBarLabelStyleFocused : styles.tabBarLabelStyleUnFocused}>
                            Refer & Earn
                        </Text>
                    ),
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name='NFTScreen'
                component={NftScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.NFT}
                            resizeMode='contain'
                            style={focused === true ? styles.tabBarIconStyleFocussed : styles.tabBarIconStyleUnFocussed}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={focused === true ? styles.tabBarLabelStyleFocused : styles.tabBarLabelStyleUnFocused}>
                            NFT
                        </Text>
                    ),
                    headerShown: false
                }}
            />
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
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
        color: colors.primary
    },
    tabBarLabelStyleUnFocused: {
        marginBottom: normalize(10),
        fontSize: normalize(12),
        color: colors.progressGray
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