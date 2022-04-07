import React, { useState } from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import { icons, strings } from '../constants';
import { colors, fonts } from '../theme';

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

const TriviaScreen = ({ navigation, route }) => {

    const [selected, setSelected] = useState('details');

    const { trivia } = route.params;
    const NameCard = ({ user, backgroundColor }) => (
        <View style={[styles.nameCard,  { backgroundColor: backgroundColor }]}>
            <Image 
                source={{uri: user.avatar}}
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
                        <Text>
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
                            src={icons.PLAYS}
                            title={data?.badgesData.plays + ' Plays'}
                        />
                    </View>
                </View>
                <View style={styles.separatorLine}/>
                <View style={styles.tabHeaderWrapper}>
                    <View style={styles.tabHeaderButtonWrapper}>
                        <TouchableOpacity
                            style={[styles.tabHeaderButton, {borderBottomWidth: selected === 'details' ? 4 : 0,}]}
                            onPress={() => {
                                setSelected('details');
                            }}
                        >
                            <Text style={[styles.tabHeaderText, {color: selected === 'details' ? 'white' : 'gray'}]}>
                                Details
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabHeaderButton, {borderBottomWidth: selected === 'leaderBoard' ? 4 : 0,}]}
                            onPress={() => {
                                setSelected('leaderBoard');
                            }}
                        >
                            <Text style={[styles.tabHeaderText, {color: selected === 'leaderBoard' ? 'white' : 'gray'}]}>
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
                                        <Text>
                                            1st
                                        </Text>
                                        <Text>
                                            ${data.winnings.firstPlace}
                                        </Text>
                                    </View>
                                    <View style={[styles.prices, { backgroundColor: '#272727' }]}>
                                        <Text>
                                            2nd
                                        </Text>
                                        <Text>
                                            ${data.winnings.secondPlace}
                                        </Text>
                                    </View>
                                    <View style={styles.prices}>
                                        <Text>
                                            3rd
                                        </Text>
                                        <Text>
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
                    <TouchableOpacity style={styles.joinUsButton}>
                        <Text style={styles.joinUsText}>
                            Join Contest ${data.entryFee}
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        color: colors.white
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
        marginTop: normalize(2.4)
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
        color: colors.white
    },
    winningAmountText: {
        fontSize: fonts.size.font14,
        color: colors.white,
        marginTop: normalize(10)
    },
    entryFeeText: {
        fontSize: fonts.size.font10,
        fontWeight: '200',
        color: colors.white,
        textAlign: 'right',
        marginBottom: normalize(10)
    },
    entryAmountWrapper: {
        backgroundColor: colors.primary,
        padding: normalize(5),
        borderRadius: normalize(10),
        width: normalize(80)
    },
    entryAmountText: {
        color: colors.black,
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.bold,
        textAlign: 'center'
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
        fontSize: fonts.size.font16,
        textAlign: 'center'
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
        fontSize: fonts.size.font14,
        marginBottom: normalize(15)
    },
    pricesHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(2),
        marginBottom: normalize(10)
    },
    pricesHeadingText: {
        color: colors.white,
        fontWeight: fonts.weight.low
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
        width: '93%',
        alignSelf: 'center'
    },
    gameRulesText: {
        color: colors.white,
        fontSize: fonts.size.font16,
        fontWeight: '700',
        marginBottom: normalize(10)
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
        width: '92%'
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
        color: colors.white
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
        fontSize: fonts.size.font14
    }
})

export default TriviaScreen
