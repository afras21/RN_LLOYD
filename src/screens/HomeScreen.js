import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated
} from 'react-native';
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { 
    icons, 
    images, 
    strings 
} from '../constants';
import { 
    colors, 
    fonts 
} from '../theme';
import HeaderScreenTextInput from '../components/textInputs/HomeScreenTextInput';
import Slider1 from '../components/homeScreenSlider/Slider1';
import Slider2 from '../components/homeScreenSlider/Slider2';

import { data } from '../mock/slider2'
import Button from '../components/homeScreenSlider/Button';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef } from 'react';

const HEADER_HEIGHT = 150;

const allPages = {
    TREND_TRIVIA: 'trivia',
    HOME: 'home'
}

const Header = ({ user }) => {
    const [viewHeight, setViewHeight] = useState(HEADER_HEIGHT);
    const onLayout=(event)=> {
        const { height } = event.nativeEvent.layout;
        setViewHeight(height);
    }
    return (
        <Animated.View onLayout={onLayout} style={[styles.headerWrapper, {flex: 1}]}>
            <View style={styles.headerTop}>

                {/* headerTopPart1 */}
                <Image
                    source={ user.avatar ? { uri: user.avatar } : icons.USER_ICON}
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
                        />
                        <Text style={styles.walletAmount}>
                            500
                        </Text>
                    </View>
                </View>
            </View>
            {
                viewHeight >= 120 ?
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
                    : <></>
            }
            
        </Animated.View>
    )
}

const AnimatedHeader = ({ animatedValue, user }) => {
    const insets = useSafeAreaInsets();
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [HEADER_HEIGHT + insets.top, insets.top + 70],
        extrapolate: 'clamp'
    });
    return (
        <Animated.View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                height: headerHeight
            }}
        >
            <Header user={user} />   
        </Animated.View>
    )
};
  

const FooterText = ({ text }) => {
    return(
        <Text style={styles.footerText}>
            {text}
        </Text>
    )
}

const HomeScreen = ({ user, navigation }) => {

    const offset = useRef(new Animated.Value(0)).current;

    const [activeIndex, setActiveIndex] = useState(1);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const { text1, text2 } = strings.HOME_SCREEN_BUTTONS[activeButtonIndex]
    const allTriviaHeaderText = `${text1} ${text2}`

    const [pageState, setPageState] = useState(allPages.HOME);
    const [selectedTrivia, setSelectedTrivia] = useState('');

    const onChangeSlider1 = (index) => {
        setActiveIndex(index)
    };

    const renderQuizItem = ({ index, item }) => {
        return (
            <TouchableOpacity
                style={styles.quizWrapper}
                key={index}
                onPress={() => { 
                    navigation.navigate('JoinTriviaScreen',{ trivia: item });
                }}
            >
                <LinearGradient
                    colors={strings.HOME_SCREEN_QUIZ_LINEAR_GRADIENT_COLORS}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.linearGradient}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.quizImage}
                        resizeMode='contain'
                    />
                </LinearGradient>
                <Text
                    style={styles.quizTitle}
                    numberOfLines={2}
                >
                    {item.name}
                </Text>
                <Text  style={styles.quizPlays}>
                    {item.plays} Plays
                </Text>
            </TouchableOpacity>
        )
    }

    const RenderQuizItems = ({ data }) => {
        return(
            <View style={styles.quizListWrapper}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={data}
                    numColumns={strings.NO_OF_COLUMNS_FLATLIST_HOME_SCREEN}
                    contentContainerStyle={styles.quizListWrapperContainer}
                    renderItem={renderQuizItem}
                />
                <TouchableOpacity style={styles.quizViewAll}>
                    <Text style={styles.viewAllText}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const RenderFooter = () => {
        return (
            <>
                <View style={styles.referAndEarnWrapper}>
                    {/* TODO: Image Fit Issue */}
                    <ImageBackground
                        source={images.REFER_AND_EARN}
                        style={styles.referAndEarnImage}
                        // borderRadius={10}
                    />
                    {/* <Image
                        source={images.REFER_AND_EARN}
                        style={}
                        resizeMode='center'
                        borderRadius={10}
                    /> */}
                </View>
                <View style={styles.footerWrapper}>
                    <Image
                        source={icons.FOOTER}
                        style={styles.footerImage}
                    />
                    <View>
                        <FooterText text={strings.HOME_SCREEN_FOOTER_TEXT1} />
                        <FooterText text={strings.HOME_SCREEN_FOOTER_TEXT2} />
                        <View style={styles.knowMoreWrapper}>
                            <FooterText text={strings.HOME_SCREEN_FOOTER_TEXT3} />
                            <TouchableOpacity style={styles.knowMoreButton}>
                                <Text style={styles.knowMoreText}>
                                    {" "}{strings.HOME_SCREEN_KNOW_MORE_TEXT}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    
    const handleTrendTriviaSelection = (item) => {
        // setSelectedTrivia(item)
        // setPageState(allPages.TREND_TRIVIA)
        navigation.navigate('TriviaScreen', {item: item});
    }

    /**
     * on Clicking back button in trivia page
     */
    const handleTriviaClose = () => {
        // setPageState(allPages.HOME)
        // setSelectedTrivia('');
    }

    console.log(offset)

    return (
        <SafeAreaProvider>
            <SafeAreaView  style={styles.container} forceInset={{ top: 'always' }}>
                {/* <StatusBar backgroundColor={colors.bottomTabBgColor} /> */}
                <AnimatedHeader animatedValue={offset} user={user} />
                <ScrollView 
                    nestedScrollEnabled={true} 
                    showsVerticalScrollIndicator={false} 
                    style={styles.scrollContainer}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                      [{ nativeEvent: { contentOffset: { y: offset } } }],
                      { useNativeDriver: false }
                    )}
                >
                    <Header user={user} />

                    <Slider1
                        data={strings.HOME_SLIDER1}
                        activeIndex={activeIndex}
                        changeIndex={onChangeSlider1}
                    />

                    <Slider2 data={data} handleTrendTriviaSelection={handleTrendTriviaSelection} />

                    <TriviaCategory
                        data={strings.HOME_SCREEN_BUTTONS}
                        setActiveButtonIndex={setActiveButtonIndex}
                        activeButtonIndex={activeButtonIndex}
                    />

                    <Text style={styles.allTriviaHeader} >{allTriviaHeaderText}</Text>
                    <RenderQuizItems data={strings.HOME_SLIDER2} />

                    <RenderFooter />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const TriviaCategory = ({data, setActiveButtonIndex, activeButtonIndex}) => {
    const renderItem = ({ item, index }) => (
        <Button
            keyExtractor={item => item.text1}
            src={item.src}
            text1={item.text1}
            text2={item.text2}
            selected={activeButtonIndex === index}
            onPress={() => setActiveButtonIndex(index)}
        />
    )
    return (
        <View style={styles.buttonWrapper}>
            <FlatList
                horizontal
                contentContainerStyle={styles.triviaCategoryContent}
                renderItem={renderItem}
                data={data}
            />
        </View>
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
        borderRadius: normalize(30),
        backgroundColor: colors.white
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
        fontFamily: fonts.type.soraLight
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
    quizListWrapper: {
        width: '100%',
        alignItems: 'center',
        marginLeft: normalize(5)
    },
    quizListWrapperContainer: {
        width: '100%',
        justifyContent: 'space-around'
    },
    quizWrapper: {
        width: '28.33%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: normalize(10),
        alignSelf: 'center',
    },
    linearGradient: {
        width: '100%',
        borderRadius: normalize(18),
        borderWidth: 1,
        borderColor: '#505050',
        height: normalize(110)
    },
    quizImage: {
        width: '100%',
        height: normalize(110),
        borderRadius: normalize(18),
        borderColor: '#505050',
        borderWidth: 1
    },
    quizTitle: {
        width: '100%',
        textAlign: 'center',
        marginTop: normalize(10),
        color: colors.white
    },
    referAndEarnWrapper: {
        width: '94%',
        alignSelf: 'center',
        height: normalize(150),
        alignItems: 'center',
        marginTop: normalize(10),
        borderRadius: 10
    },
    referAndEarnImage: {
        width: '100%',
        height: normalize(120)
    },
    footerWrapper: {
        backgroundColor: colors.footer,
        height: normalize(150),
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    footerImage: {
        
        height: normalize(95),
        width: normalize(95),
        marginRight: normalize(40)
    },
    footerText: {
        fontSize: fonts.size.font12,
        marginTop: normalize(5),
        fontFamily: fonts.type.soraRegular,
        color: colors.white
    },
    knowMoreWrapper: {
        flexDirection: 'row',
        width: '100%'
    },
    knowMoreButton: {
        marginTop: normalize(8),
        marginLeft: normalize(5)
    },
    knowMoreText: {
        color: colors.primary,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    buttonWrapper: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        marginVertical: normalize(10),
        width: '90%',
        alignSelf: 'center'
    },
    allTriviaHeader: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: normalize(10),
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold,
        color: colors.white
    },
    triviaCategoryContent: {
        width: '100%',
        justifyContent: 'space-around'
    },
    quizViewAll: {
        width: '96%',
        alignSelf: 'center',
        marginVertical: normalize(10),
        marginBottom: normalize(15)
    },
    viewAllText: {
        fontSize: fonts.size.font14,
        color: colors.white,
        textAlign: 'center',
        fontFamily: fonts.type.soraMedium
    },
    quizPlays: {
        marginTop: normalize(5),
        fontSize: fonts.size.font10,
        color: '#999999',
        fontFamily: fonts.type.soraMedium
    }
})
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(HomeScreen)
