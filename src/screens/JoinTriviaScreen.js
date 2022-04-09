import { Actionsheet } from 'native-base';
import React, { useState } from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import { icons } from '../constants';
import { colors, fonts, metrics } from '../theme';

const data = {
    users: [
        {
            name: 'Riyaz mohammed',
            avatar: 'https://media.istockphoto.com/photos/you-are-the-creator-of-your-own-success-picture-id495827884?k=20&m=495827884&s=170667a&w=0&h=a5jcN3resGfCvjWGAYm95S9alIpnallzcC1FZm21xUg=',
        },
        {
            name: 'Joolie',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfWNbmgNiSRt45YT8FwqxuyLJHamCH8Javq87Fw3dG2exzy1fQE01Q5mVULblShnHxGQ&usqp=CAU',
        },
        {
            name: 'Soumya123',
            avatar: 'https://tv-fanatic-res.cloudinary.com/iu/s--Sd2L92Wd--/c_scale,f_auto,h_1127,q_auto,w_696/v1371239934/young-carrie-bradshaw-pic',
        },
        {
            name: 'SomeshNanda',
            avatar: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
        }
    ],
    gameRules: [
        'Egestas risus condimentum volutpat at. Eu dui at porttitor amet pharetra nibh',
        'Sed ut perspiciatis unde omotam rem aperiam, eaque ipsa quae ab illo inventore',
        'Ut enim ad minima vetionem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
        'Nor again is there anyone who loves orbtain pain of itself, because it is pain, but because occasionally circumstances',
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo'
    ],
    badgesData: {
        players: 5,
        winners: 3,
        plays: 240
    },
    entryFee: 5,
    winnings: {
        total: 25,
        firstPlace: 10,
        secondPlace: 8,
        thirdPlace: 7
    }
}

const JoinTriviaScreen = ({ navigation, route }) => {

    const [selected, setSelected] = useState('details');

    const { trivia } = route.params;
    const NameCard = ({ user, backgroundColor }) => (
        <View style={[styles.nameCard, { backgroundColor: backgroundColor }]}>
            <Image
                source={{ uri: user.avatar }}
                style={styles.userIcon}
            />
            <Text style={styles.nameCardName}> {user?.name}</Text>
        </View>
    )

    const Badge = ({ title, src }) => {
        return (
            <View style={styles.badgeWrapper}>
                <Image
                    source={src}
                    style={styles.badgeIcon}
                    resizeMode={'contain'}
                />
                <Text style={styles.badgeTitle}>
                    {title}
                </Text>
            </View>
        )
    }

    const [actionSheet, setActionSheet] = useState({
        isOpen: false,
    });

    const [coupon, setCoupon] = useState({
        value: '',
        isApplied: false
    });

    const joinContestHandler = () => {
        setActionSheet({
            isOpen: true
        })
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.backgroundColor} />
            <View style={styles.navigationHeaderWrapper}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image
                        source={icons.BACK}
                        style={styles.backButtonIcon}
                        resizeMode={'center'}
                    />
                </TouchableOpacity>
                <View style={styles.navigationHeaderRightWrapper}>
                    <Image
                        source={icons.NOTIFICATION}
                        style={styles.notificationIcon}
                        resizeMode={'contain'}
                    />
                    <View style={styles.walletWrapper}>
                        <Image
                            source={icons.WALLET}
                            style={styles.walletIcon}
                            resizeMode={'contain'}
                        />
                        <Text style={styles.text}>
                            500
                        </Text>
                    </View>
                </View>
            </View>

            <LinearGradient
                colors={['#2A2A2A', '#1C1C1C']}
                style={styles.linearGradientWrapper}
            >
                <View>
                    <View style={styles.headerWrapper}>

                        <View>
                            <Text
                                style={styles.winningAmountTitle}
                            >
                                {trivia.name}
                            </Text>
                            <Text style={styles.winningAmountText}>
                                Winnings ${data.winnings.total || 20}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.entryFeeText}>
                                Entry Fee
                            </Text>
                            <TouchableOpacity
                                style={styles.entryAmountWrapper}
                                disabled={true}
                            >
                                <Text style={styles.entryAmountText}>
                                    ${data?.entryFee || 10}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.badgesWrapper}>
                        <Badge
                            src={icons.PLAYERS}
                            title={data?.badgesData.players + ' Players'}
                        />
                        <Badge
                            src={icons.WINNERS}
                            title={data?.badgesData.winners + ' Winners'}
                        />
                        <Badge
                            src={icons.PLAYS1}
                            title={data?.badgesData.plays + ' Plays'}
                        />
                    </View>
                </View>
                <View style={styles.separatorLine} />
                <View style={styles.tabHeaderWrapper}>
                    <View style={styles.tabHeaderButtonWrapper}>
                        <TouchableOpacity
                            style={[styles.tabHeaderButton, { borderBottomWidth: selected === 'details' ? 4 : 0, }]}
                            onPress={() => {
                                setSelected('details');
                            }}
                        >
                            <Text style={[styles.tabHeaderText, { color: selected === 'details' ? 'white' : 'gray' }]}>
                                Details
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabHeaderButton, { borderBottomWidth: selected === 'leaderBoard' ? 4 : 0, }]}
                            onPress={() => {
                                setSelected('leaderBoard');
                            }}
                        >
                            <Text style={[styles.tabHeaderText, { color: selected === 'leaderBoard' ? 'white' : 'gray' }]}>
                                Leaderboard
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        selected === 'details' ?
                            <ScrollView
                                style={styles.pricesWrapper}
                                showsVerticalScrollIndicator={false}
                            >
                                <View style={styles.pricesInnerWrapper}>
                                    <Text style={styles.pricesHeadingTitle}>
                                        Prizing
                                    </Text>
                                    <View style={styles.pricesHeading}>
                                        <Text style={styles.pricesHeadingText}>
                                            Rank
                                        </Text>
                                        <Text style={styles.pricesHeadingText}>
                                            Winnings
                                        </Text>
                                    </View>
                                    <View style={styles.prices}>
                                        <Text style={styles.text}>
                                            1st
                                        </Text>
                                        <Text style={styles.text}>
                                            ${data.winnings.firstPlace}
                                        </Text>
                                    </View>
                                    <View style={[styles.prices, { backgroundColor: '#272727' }]}>
                                        <Text style={styles.text}>
                                            2nd
                                        </Text>
                                        <Text style={styles.text}>
                                            ${data.winnings.secondPlace}
                                        </Text>
                                    </View>
                                    <View style={styles.prices}>
                                        <Text style={styles.text}>
                                            3rd
                                        </Text>
                                        <Text style={styles.text}>
                                            ${data.winnings.thirdPlace}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.bulletPointWrapper}>
                                    <Text style={styles.gameRulesText}>
                                        Game Rules
                                    </Text>
                                    {
                                        data?.gameRules.map(item =>
                                            <View style={styles.bulletPoint}>
                                                <Image
                                                    source={icons.BULLET_POINT}
                                                    style={styles.bulletPointIcon}
                                                />
                                                <Text style={styles.bulletPointText}>
                                                    {item}
                                                </Text>
                                            </View>
                                        )

                                    }

                                </View>
                            </ScrollView>
                            :
                            <View style={styles.leaderBoardTabWrapper}>
                                <View style={styles.leaderBoardTab}>
                                    <Text style={styles.leaderBoardTabText}>
                                        You have to join the contest to see rank, score and prices of the players
                                    </Text>
                                </View>

                                <View style={styles.nameCardWrapper}>

                                    {data?.users?.map((item, index) => <NameCard backgroundColor={index % 2 === 0 ? '#1C1C1C' : '#272727'} user={item} />)}
                                </View>

                                <View style={styles.footerWrapper}>
                                    <Image
                                        resizeMode='contain'
                                        style={styles.footerImage}
                                        source={icons.SECURE}
                                    />
                                </View>
                            </View>
                    }
                </View>
                <View style={styles.joinUsButtonWrapper}>
                    <TouchableOpacity
                        style={styles.joinUsButton}
                        onPress={joinContestHandler}
                    >
                        <Text style={styles.joinUsText}>
                            Join Contest ${data.entryFee}
                        </Text>
                    </TouchableOpacity>
                </View>

                <Actionsheet
                    isOpen={actionSheet.isOpen}
                    onClose={() => {
                        setActionSheet({
                            isOpen: false
                        });
                        setCoupon({
                            isApplied: false
                        })
                    }}
                    hideDragIndicator={true}
                >
                    <Actionsheet.Content style={styles.actionSheetWrapper}>
                        <View style={styles.actionSheetInnerWrapper}>
                            <View style={styles.actionSheetHeaderWrapper}> 
                                <Text style={styles.actionSheetHeaderConfirmation}>
                                    Confirmation
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        setActionSheet({
                                            isOpen: false
                                        })
                                        setCoupon({
                                            isApplied: false
                                        })
                                    }}
                                >
                                <Image
                                    source={icons.CLOSE}
                                    style={styles.closeIcon}
                                />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.subHeadingText}>
                                Balance : Deposit + Winnings = $75
                            </Text>
                            <View style={styles.subHeadingWrapper}>
                                <Text style={styles.subHeaderText}>
                                    Entry
                                </Text>
                                <Text style={styles.toPayText}>
                                    ${data.entryFee}
                                </Text>
                            </View>
                            <View style={styles.subHeadingWrapper}>
                                <Text style={styles.subHeaderText}>
                                    Useable cash bonus
                                </Text>
                                <Text style={styles.toPayText}>
                                    -$1
                                </Text>
                            </View>
                            <Text style={styles.applyCouponTitle}>
                                Apply an offer
                            </Text>
                            <View style={styles.applyCouponTextInputWrapper}>
                                <TextInput
                                    style={styles.textInput}
                                />
                                <TouchableOpacity
                                    style={styles.checkButton}
                                    onPress={()=>{
                                        setCoupon({
                                            isApplied: true
                                        })
                                    }}
                                    disabled={coupon.isApplied}
                                >
                                    {coupon.isApplied ?
                                        <Image
                                            source={icons.CHECKED}
                                            style={[styles.closeIcon, {alignSelf: 'center'}]}
                                        />
                                        :
                                        <Text style={styles.checkButtonText}>
                                            CHECK
                                        </Text>
                                    }
                                </TouchableOpacity>
                            </View>
                            {
                                coupon.isApplied === true ?
                                    <Text style={styles.offerAppliedText}>
                                        Offer applied
                                    </Text>
                                :
                                    <></>
                            }
                            
                            <View
                                style={{
                                    height: coupon.isApplied ? normalize(10) : normalize(30),
                                    width: '100%'
                                }}
                            />
                            {
                                coupon.isApplied === true ?
                                    <View style={styles.subHeadingWrapper}>
                                        <Text style={styles.subHeaderText}>
                                            Applied offer
                                        </Text>
                                        <Text style={styles.toPayAmount}>
                                            -$0.5
                                        </Text>
                                    </View>
                                    :
                                    <></>
                            }
                            
                            <View style={styles.separatorLineActionSheet}/>
                            <View style={styles.toPayWrapper}>
                                <Text style={styles.toPayText}>
                                    To Pay
                                </Text>
                                <Text style={styles.toPayAmount}>
                                    {coupon.isApplied ? `$3.5` :`$4` }
                                </Text>
                            </View>
                            <Text style={styles.helperText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue vitae dignissim quis nibh fermentum urna.
                            </Text>

                            <TouchableOpacity style={styles.joinNowWrapper}>
                                <Text style={styles.joinNowText}>
                                    Join Now
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </Actionsheet.Content>
                </Actionsheet>

            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.type.soraRegular,
        color: colors.white
    },
    closeIcon: {
        height: normalize(28),
        width: normalize(28)
    },
    subHeadingText: {
        marginVertical: normalize(1),
        width: '92%',
        alignSelf: 'center',
        color: colors.white,
        fontSize: fonts.size.font12,
        fontWeight: '200',
        fontFamily: fonts.type.soraLight
    },
    applyCouponTitle: {
        marginTop: normalize(5),
        color: colors.primary,
        width: '92%',
        alignSelf: 'center',
        fontWeight: 'bolder',
        fontFamily: fonts.type.soraRegular
    },
    applyCouponTextInputWrapper: {
        flexDirection: 'row',
        width: '91%',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
        marginTop: normalize(10),
        borderRadius: normalize(3)
    },
    textInput: {
        backgroundColor: '#303030',
        width: '83%',
        padding: normalize(10),
        fontFamily: fonts.type.soraRegular
    },
    checkButton: {
        flex: 1
    },
    checkButtonText: {
        color: colors.primary,
        textAlign: 'center',
        fontSize: fonts.size.font10,
        marginRight: normalize(10),
        fontFamily: fonts.type.soraRegular
    },
    separatorLineActionSheet: {
        height: normalize(3),
        backgroundColor: '#C4C4C4',
        width: '94%',
        alignSelf: 'center'
    },
    offerAppliedText: {
        width: '92%',
        alignSelf: 'center',
        textAlign: 'right',
        marginTop: normalize(10),
        fontFamily: fonts.type.soraRegular,
        color: colors.white,
        fontSize: fonts.size.font10
    },
    subHeadingWrapper: {
        marginVertical: normalize(8.5),
        width: '92%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subHeaderText: {
        color: colors.white,
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold
    },
    toPayWrapper: {
        marginVertical: normalize(10),
        width: '92%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    toPayText: {
        color: colors.primary,
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold
    },
    toPayAmount: {
        color: colors.white,
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold
    },
    helperText: {
        color: '#C7C7C7',
        fontSize: normalize(12),
        width: '93%',
        alignSelf: 'center',
        fontFamily: fonts.type.soraRegular
    },
    joinNowWrapper: {
        backgroundColor: colors.primary,
        width: '92%',
        alignSelf: 'center',
        padding: normalize(13),
        borderRadius: normalize(7),
        position: 'absolute',
        bottom: normalize(15)
    },
    joinNowText: {
        color: colors.black,
        textAlign: 'center',
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraRegular
    },
    actionSheetHeaderConfirmation: {
        color: colors.white,
        fontSize: fonts.size.font20,
        fontFamily: fonts.type.soraBold
    },
    actionSheetHeaderWrapper: {
        flexDirection: 'row',
        width: '96%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: normalize(10),
        alignSelf: 'center',
        marginVertical: normalize(10)
    },
    actionSheetInnerWrapper: { 
        borderColor: '#4D4D4D',
        padding: 1,
        borderWidth: 1,
        height: '97%',
        width: '99%',
        borderStyle: 'dashed',
        borderTopStartRadius: normalize(30),
        borderTopRightRadius: normalize(30)
    },
    actionSheetWrapper: {
        height: metrics.screenHeight / 1.6,
        backgroundColor: '#303030'
    },
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    nameCard: {
        width: '98%',
        alignSelf: 'center',
        marginVertical: normalize(4),
        padding: normalize(10),
        borderRadius: normalize(10),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameCardName: {
        marginLeft: normalize(15),
        color: colors.white,
        fontFamily: fonts.type.soraRegular
    },
    userIcon: {
        width: normalize(32),
        height: normalize(32),
        backgroundColor: colors.gray,
        borderRadius: normalize(20)
    },
    badgeWrapper: {
        flexDirection: 'row'
    },
    badgeTitle: {
        color: '#E5BEC7',
        marginLeft: normalize(2),
        fontSize: fonts.size.font10,
        marginTop: normalize(2.4),
        fontFamily: fonts.type.soraRegular
    },
    badgeIcon: {
        height: 22,
        width: 22,
        marginRight: normalize(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigationHeaderWrapper: {
        height: normalize(75),
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    backButton: {
        flexDirection: 'row',
        padding: normalize(10)
    },
    backButtonIcon: {
        width: normalize(20),
        height: normalize(22)
    },
    navigationHeaderRightWrapper: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: normalize(30)
    },
    notificationIcon: {
        width: normalize(20),
        height: normalize(22)
    },
    walletWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    walletIcon: {
        width: normalize(24),
        height: normalize(25),
        marginRight: 10
    },
    linearGradientWrapper: {
        flex: 1,
        borderTopRightRadius: normalize(30),
        borderTopLeftRadius: normalize(30)
    },
    headerWrapper: {
        marginTop: normalize(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '93%',
        alignSelf: 'center',
        padding: normalize(10),
        alignItems: 'center'
    },
    winningAmountTitle: {
        fontSize: fonts.size.font18,
        color: colors.white,
        fontFamily: fonts.type.soraRegular
    },
    winningAmountText: {
        fontSize: fonts.size.font14,
        color: colors.white,
        marginTop: normalize(10),
        fontFamily: fonts.type.soraLight
    },
    entryFeeText: {
        fontSize: fonts.size.font10,
        color: colors.white,
        textAlign: 'right',
        marginBottom: normalize(10),
        fontFamily: fonts.type.soraLight
    },
    entryAmountWrapper: {
        backgroundColor: colors.primary,
        padding: normalize(5),
        borderRadius: normalize(10),
        width: normalize(80)
    },
    entryAmountText: {
        color: colors.black,
        fontSize: fonts.size.font12,
        textAlign: 'center',
        fontFamily: fonts.type.soraRegular
    },
    badgesWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '87%',
        alignSelf: 'center',
        marginTop: normalize(10),
        marginRight: normalize(8)
    },
    separatorLine: {
        backgroundColor: '#636363',
        width: '100%',
        height: normalize(2.1),
        marginVertical: normalize(20)
    },
    tabHeaderWrapper: {
        flex: 1
    },
    tabHeaderButtonWrapper: {
        width: '100%',
        flexDirection: 'row',
        height: normalize(40)
    },
    tabHeaderButton: {
        flex: 1,
        borderBottomColor: '#FA5075'
    },
    tabHeaderText: {
        fontSize: fonts.size.font14,
        textAlign: 'center',
        fontFamily: fonts.type.soraRegular
    },
    pricesWrapper: {
        flex: 1
    },
    pricesInnerWrapper: {
        padding: normalize(12),
        width: '94%',
        alignSelf: 'center',
        backgroundColor: '#4F5255',
        borderRadius: normalize(12),
        marginVertical: normalize(20)
    },
    pricesHeadingTitle: {
        color: colors.white,
        fontSize: fonts.size.font16,
        marginBottom: normalize(15),
        fontFamily: fonts.type.soraMedium
    },
    pricesHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(2),
        marginBottom: normalize(10)
    },
    pricesHeadingText: {
        color: colors.white,
        fontFamily: fonts.type.soraMedium
    },
    prices: {
        backgroundColor: '#1C1C1C',
        flexDirection: 'row',
        borderRadius: normalize(8),
        justifyContent: 'space-between',
        height: normalize(44),
        alignItems: 'center',
        paddingHorizontal: normalize(10),
        marginVertical: normalize(4)
    },
    bulletPointWrapper: {
        width: '92%',
        alignSelf: 'center'
    },
    gameRulesText: {
        color: colors.white,
        fontSize: fonts.size.font16,
        marginBottom: normalize(10),
        fontFamily: fonts.type.soraMedium
    },
    bulletPoint: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: normalize(5)
    },
    bulletPointIcon: {
        width: 10,
        height: 10,
        marginTop: normalize(10),
        marginRight: normalize(10)
    },
    bulletPointText: {
        color: colors.white,
        fontSize: fonts.size.font14,
        lineHeight: normalize(22.4),
        width: '92%',
        fontFamily: fonts.type.soraRegular
    },
    leaderBoardTabWrapper: {
        marginTop: normalize(15)
    },
    leaderBoardTab: {
        width: '93%',
        alignSelf: 'center'
    },
    leaderBoardTabText: {
        fontSize: fonts.size.font12,
        color: colors.white,
        fontFamily: fonts.type.soraRegular
    },
    nameCardWrapper: {
        width: '93%',
        alignSelf: 'center',
        marginVertical: normalize(20),
        backgroundColor: '#4F5255',
        padding: normalize(5),
        borderRadius: normalize(10)
    },
    footerWrapper: {
        marginTop: normalize(100),
        width: '90%',
        alignSelf: 'center'
    },
    footerImage: {
        height: 50,
        width: '100%'
    },
    joinUsButtonWrapper: {
        backgroundColor: '#272B30',
        padding: normalize(12),
        height: 80
    },
    joinUsButton: {
        padding: normalize(10),
        alignSelf: 'center',
        width: '88%',
        backgroundColor: colors.primary,
        borderRadius: normalize(10),
        height: normalize(53),
        alignItems: 'center',
        justifyContent: 'center'
    },
    joinUsText: {
        color: colors.black,
        textAlign: 'center',
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraRegular
    }
})

export default JoinTriviaScreen