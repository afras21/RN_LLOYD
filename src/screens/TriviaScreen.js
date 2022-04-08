import React from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import normalize from 'react-native-normalize';
import { icons } from '../constants';
import { data } from '../mock/basketBallTrivia';
import { colors, fonts } from '../theme';

const TriviaScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const { plays, image, name } = item || {};
    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <SafeAreaView nestedScrollEnabled={true} styles={styles.root}>
                <Header bg={image} plays={plays} name={name} onClose={()=>{navigation.goBack()}}/>
                <ListContainer data={data} />
            </SafeAreaView>
        </ScrollView>
    )
}

const Header = ({ bg, plays, name, onClose }) => {
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

                    <Wallet />
                </View>
                <Text style={styles.playStyles}>{`${plays} Plays`}</Text>
            </View>
        </ImageBackground>
    )
}

const ListContainer = ({ data }) => {
    return (
        <View style={styles.listContainerStyle}>
            <FlatList
                data={data}
                renderItem={renderTriviaCard}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
const renderTriviaCard = ({ item }) => (
    <View style={styles.triviaCardContainer}>
        <View style={styles.triviaCardHeader}>
            <Text style={styles.triviaName}>{item.name}</Text>
            <Text style={styles.entryFee}>Entry Fee</Text>
        </View>
        <View style={[styles.triviaPaymentContainer, item.isExpired && { marginBottom: 40 }]}>
            <Text style={[styles.triviaPaymentText, item.isExpired && { color: colors.blue }]}>{item.winningAmount}</Text>
            <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>{item.entryFee}</Text>
            </TouchableOpacity>
        </View>
        {
            !(item.isExpired) &&
            <View style={styles.gameStatusContainer}>
                <Text style={styles.text}>{item.joined}</Text>
                <Text style={styles.text}>{item.timeRemaining}</Text>
                <Text style={styles.text}>{item.slotsLeft}</Text>
            </View>
        }
        <View
            style={
                [styles.triviaCardFooter, item.isExpired && { backgroundColor: colors.blue }]
            }>
            <FooterElement icon={icons.SWORD} text={item.maxPlayers} isExpired={item.isExpired} />
            <FooterElement icon={icons.TROPHY} text={item.totalWinner} isExpired={item.isExpired} />
            <FooterElement icon={icons.PLAYS} text={item.plays} isExpired={item.isExpired} />
        </View>
    </View>
)

const FooterElement = ({ icon, text, isExpired }) => (
    <View style={styles.footerElementContainer}>
        <View style={[styles.footerElementImgContainer, isExpired && { backgroundColor: colors.darkBlue }]}>
            <Image source={icon} style={styles.footerElementImg} />
        </View>
        <Text style={styles.footerElementTxt}>{text}</Text>
    </View>
)


const Wallet = () => (
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
)

export default TriviaScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: colors.progressGray,
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
        fontFamily: fonts.type.soraMedium
    },
    playStyles: {
        color: colors.white,
        fontWeight: '400',
        fontSize: fonts.size.font10,
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
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
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
        fontSize: fonts.size.font16,
        lineHeight: 23,
        color: colors.greenDark,
        fontFamily: fonts.type.soraRegular
    },
    payButton: {
        backgroundColor: colors.yellow,
        padding: 5,
        paddingHorizontal: normalize(30),
        borderRadius: 10
    },
    payButtonText: {
        color: colors.darkGrey,
        fontSize: fonts.size.font12,
        lineHeight: 19.64,
        fontFamily: fonts.type.soraRegular
    },
    triviaCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    entryFee: {
        color: colors.semiGrey,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraLight
    },
    triviaName: {
        color: colors.darkGrey,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular
    }
})