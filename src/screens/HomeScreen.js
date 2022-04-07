import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    LogBox,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
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

const Header = ({ user }) => {
    return (
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

const FooterText = ({ text }) => {
    return(
        <Text style={styles.footerText}>
            {text}
        </Text>
    )
}

const HomeScreen = ({ user, navigation }) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const onChangeSlider1 = (index) => {
        setActiveIndex(index)
    };

    const renderQuizItem = ({ index, item }) => {
        return (
            <TouchableOpacity
                style={styles.quizWrapper}
                key={index}
                onPress={() => { 
                    navigation.navigate('TriviaScreen',{ trivia: item });
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


    return (
        <SafeAreaView  nestedScrollEnabled={true} style={styles.container}>
            <StatusBar backgroundColor={colors.bottomTabBgColor} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <Header user={user} />
                
                <Slider1
                    data={strings.HOME_SLIDER1}
                    activeIndex={activeIndex}
                    changeIndex={onChangeSlider1}
                />

                <Slider2 data={data} />

                <View style={styles.buttonWrapper}>
                    <FlatList
                        horizontal
                        contentContainerStyle={{
                            width: '100%',
                            justifyContent: 'space-around'
                        }}
                        renderItem={({ index, item }) => {
                            return (
                                <Button
                                    keyExtractor={item => item.text1}
                                    src={item.src}
                                    text1={item.text1}
                                    text2={item.text2}
                                    selected={activeButtonIndex === index}
                                    onPress={() => setActiveButtonIndex(index)}
                                />
                            )
                        }}
                        data={strings.HOME_SCREEN_BUTTONS}
                    />
                </View>

                <Text
                    style={{
                        width: '90%',
                        alignSelf: 'center',
                        marginVertical: normalize(10),
                        fontSize: fonts.size.font14,
                        color: colors.white
                    }}
                >
                    {`${strings.HOME_SCREEN_BUTTONS[activeButtonIndex].text1} ${strings.HOME_SCREEN_BUTTONS[activeButtonIndex].text2}`}
                </Text>
                <RenderQuizItems data={strings.HOME_SLIDER2} />
                
                <RenderFooter />

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
        marginTop: normalize(5)
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
        fontSize: fonts.size.font10
    },
    buttonWrapper: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        marginVertical: normalize(10),
        width: '90%',
        alignSelf: 'center'
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
        fontWeight: fonts.weight.bold,
        textAlign: 'center'
    },
    quizPlays: {
        marginTop: normalize(5),
        fontWeight: fonts.weight.semi,
        fontSize: fonts.size.font10,
        color: '#999999'
    }
})
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(HomeScreen)
