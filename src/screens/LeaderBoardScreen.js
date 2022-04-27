import { CheckIcon, Select } from 'native-base';
import React, { useState } from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    Text,
    View,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';
import MainHeader from '../components/header/MainHeader';
import Slider1 from '../components/homeScreenSlider/Slider1';
import { icons, strings } from '../constants';
import { DROP_DOWN_PLACE_HOLDER, LEADER_BOARD_TITLE } from '../constants/stringsScreens/leaderBoardScreen';
import { leaderBoard, leaderBoardDropDown } from '../mock/leaderboard';
import { colors, fonts } from '../theme';


const WinnerPosition = ({ index }) => {
    if (index === 0) {
        return (
            <Image
                source={icons.GOLD_MEDAL}
                style={styles.medal}
            />
        )
    }
    if (index === 1) {
        return (
            <Image
                source={icons.SILVER_MEDAL}
                style={styles.medal}
            />
        )
    }
    if (index === 2) {
        return (
            <Image
                source={icons.BRONZE_MEDAL}
                style={styles.medal}
            />
        )
    }
    return <></> ;
} 

const LeaderBoardWinnerPosition = ({ position, color }) => {
    return(
        <View style={[styles.leaderBoardWinnerContainer, { backgroundColor: color }]}>
            <Text style={styles.leaderBoardWinnerText}>
                {position}
            </Text>
        </View>
    )
}

const renderItemLeaderBoard = ({index, item}) => {
    return(
        <View
            style={[
                styles.listItemWrapper,
                {
                    backgroundColor: index % 2 === 0 ? '#1C1C1C' : '#272727',
                    marginTop: index === 0 ? normalize(7) : normalize(4),
                    marginBottom: index === leaderBoard.length - 1 ? normalize(7): normalize(4)
                }
            ]}
        >
            <Text numberOfLines={1} style={styles.index}>
                {index + 1}.
            </Text>
            <View style={styles.userInfoWrapper}>
                <WinnerPosition index={index} />
                <Image
                    source={{ uri: item.avatar }}
                    style={styles.avatar}
                />
                <Text
                    style={styles.name}
                    numberOfLines={1}
                >
                    {item.name}
                </Text>
            </View>
            <View style={styles.amountWonWrapper}>
                <Text style={styles.amountWonText}>
                    {item.amountWon}
                </Text>
            </View>
            <Text style={styles.ptsText}>
                {item.pts} PTS
            </Text>
        </View>
    )
}

const LeaderBoardScreen = ({ navigation }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    
    const onChangeSlider1 = (index) => {
        setActiveIndex(index)
    };

    return (
        <SafeAreaView style={styles.container} >
            <MainHeader 
                title={LEADER_BOARD_TITLE} 
                navigation={navigation} 
                isNotificationVisible={false} 
                isWalletVisible={true} 
                marginBottom={1}
                isBottomTabScreen={true}
            />
             <ScrollView 
                    nestedScrollEnabled={true} 
                    showsVerticalScrollIndicator={false} 
                    style={styles.scrollContainer}
           >

            <Slider1
                data={strings.HOME_SLIDER1}
                activeIndex={activeIndex}
                changeIndex={onChangeSlider1}
            />
                <View style={styles.dropDownWrapper}>
                    <Text style={styles.dropDownHeading}>
                        {LEADER_BOARD_TITLE}
                    </Text>
                    <Select 
                        selectedValue={'Overall'}
                        minWidth="200"
                        borderRadius={5}
                        accessibilityLabel={DROP_DOWN_PLACE_HOLDER} 
                        placeholder={DROP_DOWN_PLACE_HOLDER} 
                        _selectedItem={{
                            bg: colors.white,
                            endIcon: <CheckIcon size="5" />
                        }} 
                        color={colors.white} 
                        fontFamily={fonts.type.soraRegular} 
                        fontSize={fonts.size.font12} 
                    >
                        { leaderBoardDropDown.map(item =>  <Select.Item key={item}  label={item} value={item} />)}
                    </Select>
                    
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
                    <View style={styles.listWrapper}>
                        <FlatList
                            data={leaderBoard}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItemLeaderBoard}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                    <View style={styles.bottomSpace} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    leaderBoardWinnerPositionText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14,
        alignSelf: 'center',
        marginTop: 3
    },
    leaderBoardWinnerPositionWrapper: {
        width: normalize(33),
        height: normalize(33),
        borderRadius: normalize(40),
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: -normalize(22),
        alignItems: 'center'
    },
    index: {
        color: colors.white,
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font12,
        width: 30
    },
    leaderBoardWinnerText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font10,
        alignSelf: 'center',
        marginTop: 3
    },
    leaderBoardWinnerContainer: {
        width: normalize(28),
        height: normalize(28),
        borderRadius: normalize(40),
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: -normalize(22),
        alignItems: 'center'
    },
    medal: {
        height: normalize(17),
        width: normalize(17),
        position: 'absolute',
        top: 0,
        left: normalize(12),
        zIndex: 1
    },
    listItemWrapper: {
        flexDirection: 'row',
        padding: normalize(10),
        borderRadius: normalize(7),
        width: '97%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userInfoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    avatar: {
        height: normalize(35),
        width: normalize(35),
        borderRadius: normalize(40),
        borderWidth: 2,
        borderColor: colors.white,
        marginLeft: normalize(15)
    },
    listWrapper: {
        flex: 1,
        backgroundColor: '#4F5255',
        borderRadius: normalize(8),
        marginTop: normalize(20)
    },
    topThreeThirdPlace: {
        height: normalize(65),
        width: normalize(65),
        borderRadius: normalize(85),
        borderWidth: 3,
        borderColor: colors.thirdPlace
    },
    topThreeFirstPlace: {
        height: normalize(75),
        width: normalize(75),
        borderRadius: normalize(95),
        borderWidth: 3,
        borderColor: colors.firstPlace
    },
    topThreeFirstWrapper: {
        marginTop: -normalize(30)
    },
    topThreeSecondPlace: {
        height: normalize(65),
        width: normalize(65),
        borderRadius: normalize(65),
        borderWidth: 3,
        borderColor: colors.secondPlace
    },
    topThreeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: normalize(45)
    },
    dropDownHeading: {
        backgroundColor: '#141414',
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font12,
        paddingHorizontal: normalize(10),
        position: 'absolute',
        zIndex: 1,
        left: normalize(20),
        color: colors.white
    },
    dropDownWrapper: {
        padding: normalize(10)
    },
    leaderBoardName: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraMedium,
        textAlign: 'center',
        marginLeft: -5,
        marginTop: normalize(8)
    },
    name: {
        color: colors.white,
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font12,
        width: '65%',
        marginLeft: normalize(10)
    },
    amountWonWrapper: {
        backgroundColor: '#FFF6C6',
        paddingHorizontal: normalize(15),
        borderRadius: normalize(20),
        padding: normalize(5)
    },
    amountWonText: {
        color: colors.black,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraSemiBold
    },
    ptsText: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold,
        width: normalize(70),
        textAlign: 'center'
    },
    bottomSpace: { 
        height: normalize(50) 
    }
})
const mapStateToProps = state => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(LeaderBoardScreen)
