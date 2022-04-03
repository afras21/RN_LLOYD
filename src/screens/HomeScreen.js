import React from 'react';
import { 
    Image,
    SafeAreaView, 
    ScrollView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput, 
    View
} from 'react-native';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';
import { icons } from '../constants';
import { colors } from '../theme';
import HeaderScreenTextInput from '../components/textInputs/HomeScreenTextInput';

const Header = ({ user }) => {
    return(
        <View style={styles.headerWrapper}>
            <View style={styles.headerTop}>

                {/* headerTopPart1 */}
                <Image
                    source={{ uri: user.avatar }}
                    style={styles.headerUserAvatar}
                    resizeMode={'contain'}
                />
                <Image
                    source={icons.DASHBOARD}
                    style={styles.headerDashBoardIcon}
                />
                {/* headerTopPart2 */}

                <View style={styles.headerTopPart2}>
                    <Image
                        source={icons.LOGO}
                        style={styles.logoImage}
                        resizeMode='contain'
                    />
                </View>
                {/* headerTopPart3 */}

                <View style={styles.headerTopPart3}>
                    <Image
                        source={icons.NOTIFICATION}
                        style={styles.notificationImage}
                        resizeMode='contain'
                    />
                    <View style={styles.walletWrapper}>
                        <Image
                            source={icons.WALLET}
                            style={styles.walletImage}
                            resizeMode='contain'
                        />
                        <Text style={styles.walletAmount}>
                            500
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.headerBottom}>
                <Image
                    source={icons.SEARCH}
                    style={styles.searchImage}
                    resizeMode='contain'
                />
                <HeaderScreenTextInput
                    placeholder={'Search Games'}
                    onChangeText={() => { }}
                />
            </View>
        </View>
    )
}

const HomeScreen = ({ user }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.bottomTabBgColor} />
            <ScrollView style={styles.scrollContainer}>
                <Header user={user} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    scrollContainer: {
        flex: 1
    },
    headerWrapper: {
        height: normalize(145),
        backgroundColor: colors.bottomTabBgColor,
        borderBottomLeftRadius: normalize(30),
        borderBottomRightRadius: normalize(30),
        padding: normalize(20),
        alignItems: 'center'
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    headerUserAvatar: {
        height: normalize(30),
        width: normalize(30),
        borderRadius: normalize(30)
    },
    headerDashBoardIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 15,
        top: 15,
        zIndex: 1
    },
    headerTopPart2: {
        flex: 1
    },
    logoImage: {
        width:  normalize(110),
        height: normalize(25),
        marginHorizontal: normalize(20)
    },
    headerTopPart3: {
        flexDirection: 'row',
        flex: .5,
        justifyContent: 'space-between'
    },
    notificationImage: {
        width: normalize(23),
        height: normalize(23)
    },
    walletWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    walletImage: {
        width: normalize(23),
        height: normalize(23)
    },
    walletAmount: {
        marginLeft: normalize(10),
        fontSize: normalize(15),
        color: colors.white
    },
    headerBottom: {
        width: '100%',
        marginVertical: normalize(25)
    },
    searchImage: {
        width: normalize(20),
        height: normalize(20),
        position: 'absolute',
        zIndex: 1,
        top: normalize(11),
        left: 10
    }
})
const mapStateToProps = state => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(HomeScreen)
