import { Accordion, Container, Content, Icon } from 'native-base';
import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    Text,
    TouchableOpacity,
    Image,
    View,
    ImageBackground,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';
import MainHeader from '../components/header/MainHeader';
import { icons, images, strings } from '../constants';
import { leaderBoard } from '../mock/leaderboard';
import { colors, fonts } from '../theme';

const ShareButton = ({ icon }) => {
    return(
        <TouchableOpacity 
            style={styles.shareButton}
            onPress={()=>{}}
        >
            <Image
                source={icon}
                style={styles.shareIconImage}
            />
        </TouchableOpacity>
    )
}

const Points = ({ iconNumber, icon, title, primaryText }) => {
    return (
        <View style={styles.points}>
            <Image
                source={iconNumber}
                style={styles.pointsNumber}
                resizeMode={'contain'}
            />
            <View style={styles.pointsImageWrapper}>
                <Image
                    source={icon}
                    style={styles.pointsImage}
                    resizeMode={'contain'}
                />
            </View>
            <View style={styles.pointsTextWrapper}>
                <Text 
                    style={styles.pointsText}
                    numberOfLines={1}
                >
                    {title}
                </Text>
                <Text 
                    style={styles.pointsPrimaryText}
                    numberOfLines={1}    
                >
                    {primaryText}
                </Text>
            </View>
        </View>
    )
}

const LeaderBoardWinnerPosition = ({ position, color }) => {
    return(
        <View
            style={{
                width: normalize(25),
                height: normalize(25),
                backgroundColor: color,
                borderRadius: normalize(40),
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: -normalize(16),
                alignItems: 'center'
            }}
        >
        <Text
            style={{
                color: colors.white,
                fontFamily: fonts.type.soraSemiBold,
                fontSize: fonts.size.font10,
                alignSelf: 'center',
                marginTop: 3
            }}
        >
            {position}
        </Text>
        </View>
    )
}


const ListAccordion = ({ item }) => {
    return(
        <TouchableOpacity style={styles.listAccordionButton}>
            <Text style={styles.listAccordionText}>
                {item}
            </Text>
            <Image
                source={icons.RIGHT_ARROW}
                style={styles.rightArrowIcon}
                resizeMode={'contain'}
            />  
        </TouchableOpacity>
    )
}

const ReferAndEarnScreen = ({ navigation, user }) => {
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                navigation={navigation}
                title={'Refer & Earn'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollContainer}
            >

                <View style={styles.header}>

                    <ImageBackground
                        source={images.REFER_FRIEND_BG}
                        style={styles.referFriendImageBg}
                        resizeMode={'contain'}
                    >
                        <Image
                            source={images.REFER_FRIEND}
                            style={styles.referFriendImage}
                            resizeMode={'contain'}
                        />
                    </ImageBackground>

                    <Text style={styles.title}>
                        More Than You Expect
                    </Text>

                    <Text style={styles.subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor congue porttitor morbi sagittis. Sit duis sem a pulvinar est curabitur.
                    </Text>
                </View>

                <View style={styles.copyCodeContainer}>
                    <Text style={styles.referEarnText}>
                        Your Referral Code
                    </Text>
                    <View style={styles.copyCodeWrapper}>
                        <Text style={styles.yourReferralText}>{strings.YOUR_REFERRAL}</Text>
                        <TouchableOpacity style={styles.copyCodeButton}>
                            <Text style={styles.copyCodeText}>
                                Copy your code
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.shareText}>
                            Share Your Link
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.shareButtonWrapper}>
                        <ShareButton
                            icon={icons.FACEBOOK_BUTTON}
                        />
                        <ShareButton
                            icon={icons.TWITTER}
                        />
                        <ShareButton
                            icon={icons.MESSANGER}
                        />
                        <ShareButton
                            icon={icons.GOOGLE_PLUS}
                        />
                        <ShareButton
                            icon={icons.WHATSAPP}
                        />
                    </View>
                </View>
                <View style={styles.pointsWrapper}>
                    <Points 
                        iconNumber={icons.REFER_AND_EARN_ONE} 
                        icon={icons.REFER_AND_EARN_DOWNLOAD} 
                        title={'Friend install & Register'}
                        primaryText={'Both You & friend earn'}
                    />
                    <Points 
                        iconNumber={icons.REFER_AND_EARN_TWO} 
                        icon={icons.REFER_AND_EARN_WALLET} 
                        title={'Friend first adds cash'}
                        primaryText={'You get bonus'}
                    />
                    <Points 
                        iconNumber={icons.REFER_AND_EARN_THREE} 
                        icon={icons.REFER_AND_EARN_GAME} 
                        title={'Friend plays 10 cash games'}
                        primaryText={'You get bonus'}
                    />
                </View>

                <LinearGradient
                    colors={['#121212', '#0D0D0D', '#000000']}
                    style={styles.linearGradient}
                />

                <Text style={styles.referFriendTitle}>
                    Lorem Ipsum
                </Text>
                <Text style={styles.referFriendSubTitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor congue porttitor morbi sagittis. Sit duis sem a pulvinar est curabitur.
                </Text>
                
                <View style={styles.topThreeWrapper}>
                    <View>
                        <Image
                            source={{ uri: leaderBoard[1].avatar }}
                            style={styles.topThreeSecondPlace}
                            resizeMode={'center'}
                        />
                        <LeaderBoardWinnerPosition position={2} color={colors.secondPlace} />
                        <Text style={styles.leaderBoardName}>
                            {leaderBoard[1].name}
                        </Text>
                    </View>
                    <View style={styles.topThreeFirstWrapper}>
                        <Image
                            source={{ uri: leaderBoard[0].avatar }}
                            style={styles.topThreeFirstPlace}
                            resizeMode={'center'}
                        />
                        <LeaderBoardWinnerPosition position={1} color={colors.firstPlace} />
                        <Text style={[styles.leaderBoardName, { marginLeft: normalize(5) }]}>
                            {leaderBoard[0].name}
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: leaderBoard[2].avatar }}
                            style={styles.topThreeThirdPlace}
                            resizeMode={'center'}
                        />
                        <LeaderBoardWinnerPosition position={3} color={colors.thirdPlace} />
                        <Text style={[styles.leaderBoardName, { marginLeft: normalize(5) }]}>
                            {leaderBoard[2].name}
                        </Text>
                    </View>
                </View>
                <Image
                    source={images.LEADER_BOARD_3D}
                    style={styles.leaderBoardImage3D}
                    resizeMode={'contain'}
                />
                <Image
                    source={images.LEADER_BOARD}
                    style={styles.leaderBoardImage}
                    resizeMode={'contain'}
                />

                <LinearGradient
                    style={styles.viewFullLeaderBoardButton}
                    colors={['#F2B01C', '#EBCE2C']}
                >
                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <Text style={styles.viewFullLeaderBoardText}>
                            View Full Leaderboard
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.myReferralsButton}
                >
                    <Text style={styles.myReferralsText}>
                        My Referrals
                    </Text>
                </TouchableOpacity>

                <ListAccordion item={'How it works'} />
                <ListAccordion item={'FAQ & Support'} />
                <View style={{height: normalize(50)}} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    linearGradient: {
        width: '100%',
        height: normalize(10)
    },
    leaderBoardImage3D: {
        width: '70%',
        alignSelf: 'center',
        marginBottom: -142
    },
    leaderBoardImage: {
        height: normalize(150),
        width: '70%',
        alignSelf: 'center',
        marginBottom: normalize(10)
    },
    leaderBoardName: {
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraMedium,
        textAlign: 'center',
        marginLeft: -10,
        marginTop: normalize(8)
    },
    topThreeThirdPlace: {
        height: normalize(45),
        width: normalize(45),
        borderRadius: normalize(85),
        borderWidth: 3,
        borderColor: colors.thirdPlace
    },
    topThreeFirstPlace: {
        height: normalize(55),
        width: normalize(55),
        borderRadius: normalize(95),
        borderWidth: 3,
        borderColor: colors.firstPlace
    },
    topThreeFirstWrapper: {
        marginTop: -normalize(30)
    },
    topThreeSecondPlace: {
        height: normalize(45),
        width: normalize(45),
        borderRadius: normalize(65),
        borderWidth: 3,
        marginLeft: 5,
        borderColor: colors.secondPlace
    },
    topThreeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: normalize(55),
        marginBottom: normalize(-85)
    },
    listAccordionButton: {
        flexDirection: 'row',
        marginVertical: normalize(10),
        width: '99%',
        alignSelf: 'center',
        height: normalize(55),
        paddingHorizontal: normalize(15),
        borderRadius: normalize(15),
        backgroundColor: '#434D54',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  
    rightArrowIcon: {
        width: normalize(15),
        height: normalize(15)
    },
    listAccordionText: {
        color: '#C4C4C4',
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold
    },
    myReferralsButton: {
        marginVertical: normalize(20)
    }, 
    myReferralsText: {
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12,
        color: colors.primary,
        textAlign: 'center'
    },
    viewFullLeaderBoardButton: {
        backgroundColor: colors.primary,
        borderRadius: normalize(5),
        padding: normalize(12),
        marginVertical: normalize(15)
    },  
    viewFullLeaderBoardText: {
        color: colors.black,
        fontFamily: fonts.type.soraBold,
        fontSize: fonts.size.font12,
        textAlign: 'center'
    },
    referFriendTitle: {
        color: colors.white,
        fontSize: fonts.size.font16,
        fontFamily: fonts.type.soraSemiBold,
        marginVertical: normalize(15)
    },
    referFriendSubTitle: {
        color: '#C7C7C7',
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font12,
        width: '94%'
    },
    scrollContainer: {
        padding: normalize(15),
        flex: 1
    },
    pointsText: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold
    },
    pointsTextWrapper: {
        marginLeft: normalize(20)
    },  
    pointsPrimaryText:{
        color: colors.primary,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraSemiBold,
        marginTop: normalize(4)
    },  
    pointsNumber: {
        width: normalize(20),
        height: normalize(30),
        position: 'absolute',
        zIndex: 1,
        top: normalize(-5)
    },
    points: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginVertical: normalize(20)
    },
    pointsWrapper: {
        width: '97%',
        alignSelf: 'center'
    },
    shareButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: normalize(15),
        marginTop: normalize(5)
    },  
    shareButton: {
        width: normalize(40),
        height: normalize(40)
    },  
    pointsImage: {
        width: normalize(30),
        height: normalize(30),
        backgroundColor: colors.bottomTabBgColor
    },
    pointsImageWrapper: {
        backgroundColor: colors.bottomTabBgColor,
        padding: 10,
        width: normalize(55),
        height: normalize(55),
        borderRadius: normalize(60),
        alignItems: 'center'
    },  
    shareText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12,
        textAlign: 'center',
        marginTop: normalize(7),
        marginBottom: normalize(20)
    },  
    shareIconImage: {
        flex: 1,
        width: '100%'
    },
    referEarnText: {
        color: colors.primary,
        textAlign: 'center',
        marginVertical: normalize(10),
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14
    },
    copyCodeContainer: {
        width: '100%',
        alignSelf: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: colors.white,
        borderRadius: normalize(6.12),
        marginVertical: normalize(20)
    },  
    copyCodeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3F3F3F',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        borderRadius: normalize(20),
        paddingBottom: 3,
        marginVertical: normalize(7)
    },  
    yourReferralText: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold,
        marginLeft: normalize(20)
    },  
    copyCodeButton: {
        backgroundColor: colors.primary,
        padding: normalize(10),
        borderRadius: normalize(20)
    },  
    copyCodeText: {
        color: colors.black,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraBold
    },
    header: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    referFriendImageBg: {
        height: normalize(175),
        width: '90%',
        alignSelf: 'center'
    },
    referFriendImage: {
        height: normalize(160),
        width: '100%',
        alignSelf: 'center'
    },
    title: {
        color: colors.white,
        fontSize: fonts.size.font16,
        fontFamily: fonts.type.soraSemiBold,
        textAlign: 'center',
        width: '100%',
        marginTop: normalize(10)
    },
    subTitle: {
        marginTop: normalize(10),
        color: '#C7C7C7',
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular,
        textAlign: 'center',
        width: '100%'
    }
})
const mapStateToProps = state => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(ReferAndEarnScreen)
