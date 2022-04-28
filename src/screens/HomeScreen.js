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
import MainEmptyComponent from '../components/emptyComponent/MainEmptyComponent';

const HEADER_HEIGHT = strings.HEADER_HEIGHT;

const allPages = {
    TREND_TRIVIA: 'trivia',
    HOME: 'home'
}

const Header = ({ user, onLayout, walletHandler, notificationHandler, onChangeText, value }) => {
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
                    placeholder={'Search Games'}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>

        </Animated.View>
    )
}

const StickyHeader = ({ onLayout, user, walletHandler, notificationHandler }) => {
    const [selectSuggestion, setSelectSuggestion] = useState('All');
    return (
        <Animated.View onLayout={onLayout} style={[styles.stickyHeaderWrapper]}>
            <View style={styles.stickHeaderInnerWrapper}>
                <View style={styles.stickyHeaderInnerWrapperTop}>
                    <View style={styles.headerTop}>

                        {/* headerTopPart1 */}
                        <Image
                            source={user.avatar ? { uri: user.avatar } : icons.USER_ICON}
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
                </View>
                <View style={styles.chipWrapper}>
                    <FlatList
                        data={strings.SUGGESTIONS_SEARCH}
                        horizontal
                        style={styles.chipFlatlist}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            if (item.length === 0) {
                                return (
                                    <View style={styles.searchChipWrapper}>
                                        <Image
                                            source={icons.SEARCH}
                                            style={styles.searchIcon}
                                        />
                                    </View>
                                )
                            }
                            return (
                                <TouchableOpacity
                                    onPress={() => {setSelectSuggestion(item)}}
                                >
                                    <LinearGradient
                                        colors={['#5B5B5B', '#232323']}
                                        style={[styles.chip, { borderWidth: item === selectSuggestion ? 2 : 0 }]}
                                    >
                                        <Text style={[styles.chipText, { color: item === selectSuggestion ? colors.primary : colors.white }]}>
                                            {item}
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    <View style={styles.emptyHeight} />
                </View>
            </View>
        </Animated.View>
    )
}

const AnimatedHeader = ({ animatedValue, user, walletHandler, notificationHandler, onChangeText, inputValue }) => {
    const insets = useSafeAreaInsets();
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [HEADER_HEIGHT + insets.top, insets.top + 70],
        extrapolate: 'clamp'
    });
    const [viewHeight, setViewHeight] = useState(HEADER_HEIGHT);
    const onLayout=(event)=> {
        const { height } = event.nativeEvent.layout;
        setViewHeight(height);
    }
    return (
        <Animated.View
            style={[styles.animatedHeader, { height: headerHeight }]}
        >
            {
                viewHeight >= 120 ? 
                    <Header 
                        onLayout={onLayout} 
                        walletHandler={walletHandler} 
                        viewHeight={viewHeight} 
                        user={user} 
                        notificationHandler={notificationHandler} 
                         
                        onChangeText={onChangeText}
                        value={inputValue}
                    />   
                :
                    <StickyHeader 
                        onLayout={onLayout} 
                        walletHandler={walletHandler} 
                        user={user} 
                        notificationHandler={notificationHandler}
                    />

            } 
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
    const [inputValue, setInputValue] = useState('');

    const onChangeSlider1 = (index) => {
        setActiveIndex(index)
    };

    const walletHandler = () => {
        navigation.navigate('WalletScreen');
    }
    
    const notificationHandler = () => {
        navigation.navigate('NotificationScreen');
    }

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

    const inputValueHandler = (text) => {
        if(text.length === 0){

        }else{

        }
        setInputValue(text);
    }


    return (
        <SafeAreaView  style={styles.container} forceInset={{ top: 'always' }}>
            <SafeAreaProvider>
                <StatusBar backgroundColor={colors.bottomTabBgColor} barStyle={strings.STATUS_BAR_STYLE} />
                <AnimatedHeader 
                    notificationHandler={notificationHandler} 
                    walletHandler={walletHandler} 
                    animatedValue={offset} 
                    user={user} 
                    onChangeText={inputValueHandler}
                    inputValue={inputValue}
                />
                <ScrollView 
                    // To disable pull to refresh kind of gesture.
                    bounces={false}
                    nestedScrollEnabled={true} 
                    showsVerticalScrollIndicator={false} 
                    style={styles.scrollContainer}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                      [{ nativeEvent: { contentOffset: { y: offset } } }],
                      { useNativeDriver: false }
                    )}
                >
                    {
                        inputValue.length === 0 ?
                            <>
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
                            </>
                            :
                            <View style={styles.emptyContentWrapper}>
                                <MainEmptyComponent
                                    emptyText={'No Search Results found...'}
                                />
                            </View>
                    }
                    
                </ScrollView>
            </SafeAreaProvider>
        </SafeAreaView>
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
    chipText: {
        fontSize: fonts.size.font10,
        padding: normalize(6),
        paddingHorizontal: normalize(10),
        fontFamily: fonts.type.soraMedium
    },
    emptyContentWrapper: {
        marginTop: normalize(150)
    },
    searchChipWrapper: {
        padding: 5,
        backgroundColor: colors.white,
        borderRadius: normalize(60),
        justifyContent: 'center',
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginRight: normalize(15)
    },
    emptyHeight: { 
        height: 10, 
        width: '10%' 
    },
    chip: {
        padding: normalize(4),
        alignSelf: 'center',
        marginHorizontal: normalize(6),
        borderColor: colors.primary,
        borderRadius: normalize(20)
    },
    chipFlatlist: {
        width: '95%',
        alignSelf: 'center'
    },
    chipWrapper: {
        width: '100%',
        backgroundColor: colors.backgroundColor,
        height: normalize(45),
        borderBottomWidth: 3,
        borderColor: colors.bottomTabBgColor,
        marginTop: 10
    },
    searchIcon: {
        width: 13,
        height: 13,
        tintColor: colors.bottomTabBgColor,
        alignSelf: 'center',
    },
    stickyHeaderWrapper: { 
        flex: 1, 
        height: 130, 
        width: '100%' 
    },
    stickyHeaderInnerWrapperTop: { 
        height: normalize(60), 
        borderBottomLeftRadius: 30, 
        borderBottomRightRadius: 30,
        width: '100%', 
        backgroundColor: colors.bottomTabBgColor, 
        paddingHorizontal: normalize(20), 
        justifyContent: 'center' 
    },
    stickHeaderInnerWrapper: {
        backgroundColor: colors.backgroundColor,
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
        height: normalize(35),
        width: normalize(35),
        // borderRadius: normalize(30),
        // backgroundColor: colors.white
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
        width: normalize(20),
        height: normalize(20)
    },
    walletWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    walletImage: {
        width: normalize(20),
        height: normalize(20),
        backgroundColor: colors.bottomTabBgColor
    },
    walletAmount: {
        marginLeft: normalize(10),
        fontSize: fonts.size.font12,
        color: colors.white,
        fontFamily: fonts.type.soraRegular,
        marginTop: normalize(2)
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
    },
    animatedHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
    }
})
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(HomeScreen)
