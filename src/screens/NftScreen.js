import React, { useState } from 'react';
import {
    StatusBar,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Animated,
    View,
    Text,
    Image
} from 'react-native';
import HeaderScreenTextInput from '../components/textInputs/HomeScreenTextInput';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';
import Slider1 from '../components/homeScreenSlider/Slider1';
import NftList from '../components/nftScreen/NftList';
import { icons, strings } from '../constants';
import { nftList } from '../mock/nft';
import { colors, fonts } from '../theme';
import { TouchableOpacity } from 'react-native';

const Header = ({ user, walletHandler, notificationHandler, value, changeText }) => {
    return (
        <Animated.View style={[styles.headerWrapper]}>
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
                    <TouchableOpacity
                        onPress={notificationHandler}
                    >
                        <Image
                            source={icons.NOTIFICATION}
                            style={styles.notificationImage}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.walletWrapper}
                        onPress={walletHandler}
                    >
                        <Image
                            source={icons.WALLET}
                            style={styles.walletImage}
                        />
                        <Text style={styles.walletAmount}>
                            {user.walletAmount}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.headerBottom}>
                <Image
                    source={icons.SEARCH}
                    style={styles.searchImage}
                    resizeMode='contain'
                />
                <HeaderScreenTextInput
                    placeholder={'Search Nfts'}
                    onChangeText={changeText}
                    value={value}

                />
            </View>
        </Animated.View>
    )
}


const NftScreen = ({ navigation, user }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [value, setValue] = useState('');
    const [nfts, setNfts] = useState(nftList);

    const changeText = (text) => {
        setValue(text);
        if (text.length === 0) {
            setNfts(nftList)
        } else {
            setNfts([])
        }
    }

    const onChangeSlider1 = (index) => {
        setActiveIndex(index);
    }

    const walletHandler = () => {
        navigation.navigate('WalletScreen');
    }
    const notificationHandler = () => {
        navigation.navigate('NotificationScreen');
    }

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <StatusBar backgroundColor={colors.bottomTabBgColor} barStyle={strings.STATUS_BAR_STYLE} />
            {/* <MainHeader
                title={"All Nft's"}
                navigation={navigation}
            /> */}
            <Header
                notificationHandler={notificationHandler}
                user={user}
                walletHandler={walletHandler}
                changeText={changeText}
                value={value}
            />

            <ScrollView
                style={styles.scrollContainer}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >
                {
                    nfts.length > 0 &&
                    <>
                        <Slider1
                            data={strings.HOME_SLIDER1}
                            activeIndex={activeIndex}
                            changeIndex={onChangeSlider1}
                        />
                        <Text style={styles.nftTitle}>
                            All Nfts
                        </Text>
                        <Text style={styles.nftSubTitle}>
                            You can purchase our NFTs on NFT.lootmogul.com
                        </Text>
                    </>
                }

                <NftList data={nfts} />
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
    nftSubTitle: {
        color: '#C7C7C7',
        fontSize: fonts.size.font12,
        marginBottom: normalize(22),
        marginTop: normalize(7),
        width: '90%',
        fontFamily: fonts.type.soraRegular,
        alignSelf: 'center'
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    headerUserAvatar: {
        height: normalize(35),
        width: normalize(35)
    },
    headerDashBoardIcon: {
        width: 15,
        height: 15,
        position: 'absolute',
        left: 22,
        top: 20,
        zIndex: 1
    },
    headerTopPart2: {
        flex: 1
    },
    nftTitle: {
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold,
        width: '90%',
        alignSelf: 'center',
        color: colors.white,
        marginTop: normalize(15)
    },
    logoImage: {
        width: normalize(110),
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
        height: normalize(23),
        backgroundColor: colors.bottomTabBgColor
    },
    walletAmount: {
        marginLeft: normalize(10),
        fontSize: fonts.size.font12,
        color: colors.white,
        fontFamily: fonts.type.soraRegular,
        marginTop: normalize(3)
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
    },
})
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(NftScreen)
