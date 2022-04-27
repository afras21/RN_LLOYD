import React from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import { useSelector } from 'react-redux';
import MainEmptyComponent from '../components/emptyComponent/MainEmptyComponent';
import TriviaView from '../components/TriviaView';
import { icons, strings } from '../constants';
import { data } from '../mock/basketBallTrivia';
import { colors, fonts } from '../theme';

const TriviaScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const { plays, image, name } = item || {};
    const user = useSelector(state => state.user);

    const walletHandler = () => {
        navigation.navigate('WalletScreen');
    }

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView nestedScrollEnabled={true} style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <LinearGradient
                    style={{
                        flex: 1
                    }}
                    colors={['#383838', '#2F2F2F']}
                >
                    <Header
                        bg={image}
                        user={user}
                        plays={plays}
                        name={name}
                        onClose={() => { navigation.goBack() }}
                        walletHandler={walletHandler}
                    />
                    <ListContainer data={data} navigation={navigation} />
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}

const Header = ({ bg, plays, name, onClose, user, walletHandler }) => {
    const imgSource = { uri: bg }

    return (
        <ImageBackground source={imgSource} resizeMode="cover" style={styles.image}>
            <View style={styles.headerContainer}>
                <View style={styles.backContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={onClose}>
                            <Image source={icons.BACK_BUTTON} style={styles.backButtonIconStyles} />
                        </TouchableOpacity>
                        <Text style={styles.triviNameStyle}>{name}</Text>
                    </View>

                    <Wallet user={user} walletHandler={walletHandler} />
                </View>
                <Text style={styles.playStyles}>{`${plays} Plays`}</Text>
            </View>
        </ImageBackground>
    )
}

const ListContainer = ({ data, navigation }) => {
    return (
        <View style={styles.listContainerStyle}>
            <FlatList
                data={data}
                renderItem={({item}) => <TriviaView item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<MainEmptyComponent emptyText={'No Search Results found...'} />}
            />
        </View>
    )
}

const Wallet = ({ user, walletHandler }) => (
    <TouchableOpacity 
        style={styles.walletWrapper}
        onPress={walletHandler}
    >
        <Image
            source={icons.WALLET}
            style={styles.walletImage}
            resizeMode='contain'
        />
        <Text style={styles.walletAmount}>
            {user.walletAmount}
        </Text>
    </TouchableOpacity>
)

export default TriviaScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.footer
    },
    root: {
        flex: 1,
        backgroundColor: colors.footer
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: '#3B3B3A',
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },  
    headerContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        padding: 20,
        paddingVertical: 40
    },
    backContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButtonIconStyles: {
        height: 20,
        width: 15,
        marginRight: 20
    },
    triviNameStyle: {
        color: colors.white,
        fontSize: fonts.size.font18,
        marginTop: -normalize(10),
        fontFamily: fonts.type.soraSemiBold
    },
    playStyles: {
        color: colors.white,
        fontSize: fonts.size.font12,
        lineHeight: 18,
        opacity: 0.8,
        marginLeft: normalize(35),
        marginTop: normalize(5),
        fontFamily: fonts.type.soraRegular
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
        fontSize: fonts.size.font12,
        color: colors.white,
        fontFamily: fonts.type.soraLight
    },
    listContainerStyle: {
        left: 0,
        right: 0,
        backgroundColor: colors.footer,
        padding: 25,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -20
    },
    triviaCardContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10
    },
    triviaCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        backgroundColor: colors.greenDark,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: 10
    },
    footerElementContainer: { flexDirection: 'row' },
    footerElementImgContainer: {
        borderWidth: 2,
        borderColor: colors.lightGrey,
        borderRadius: 100,
        padding: 3,
        marginRight: 5,
        backgroundColor: colors.lightGreen
    },
    footerElementImg: { height: 12, width: 12 },
    footerElementTxt: { 
        color: colors.white, 
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    gameStatusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 40
    },
    triviaPaymentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    triviaPaymentText: {
        fontSize: fonts.size.font14,
        lineHeight: 23,
        color: colors.greenDark,
        fontFamily: fonts.type.soraSemiBold
    },
    payButton: {
        backgroundColor: colors.yellow,
        padding: 4,
        paddingHorizontal: normalize(26),
        borderRadius: 8,
        width: normalize(82),
        alignItems: 'center'
    },
    payButtonText: {
        color: colors.darkGrey,
        fontSize: normalize(15),
        lineHeight: 19.64,
        fontFamily: fonts.type.soraSemiBold
    },
    triviaCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    entryFee: {
        color: colors.semiGrey,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    triviaName: {
        color: colors.darkGrey,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold
    }
})