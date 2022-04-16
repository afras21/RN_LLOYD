import React, { useState } from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    View,
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar,
    Text
} from 'react-native';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';
import TriviaView from '../components/TriviaView';
import { icons } from '../constants';
import { colors, fonts } from '../theme';
import { data } from '../mock/basketBallTrivia';
import { completed, live } from '../mock/activity';

const Header = ({ title, navigation }) => {
    const goBackHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerInnerContainer}>
                <TouchableOpacity
                    style={styles.goBackContainer}
                    // onPress={goBackHandler}
                >
                    <Image
                        source={icons.BACK_BUTTON}
                        style={styles.backButton}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={styles.notificationAndWalletWrapper}>
                    <TouchableOpacity style={styles.notificationWrapper}>
                        <Image
                            source={icons.NOTIFICATION}
                            style={styles.notificationIcon}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.walletWrapper}>
                        <Image
                            source={icons.WALLET}
                            style={styles.notificationIcon}
                        />
                        <Text style={styles.walletNumber}>
                            500
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const ListContainer = ({ data, navigation }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <TriviaView item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
                ListFooterComponent={ () => <View style={{ height: normalize(20) }} />}
            />
        </View>
    )
}

const ActivityScreen = ({ navigation }) => {

    const [selectedActivity, setSelectedActivity] = useState('live')

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor={colors.bottomTabBgColor} />
            <Header title={'Activity'} navigation={navigation} />
            <View style={styles.selectedActivityContainer}>
                <TouchableOpacity
                    style={[
                        styles.activityHeader,
                        selectedActivity === 'live' && { backgroundColor: '#3E4970' }
                    ]}
                    disabled={selectedActivity === 'live'}
                    onPress={() => setSelectedActivity('live')}
                >
                    <Text
                        style={[
                            styles.activityHeaderText,
                            {
                                color: selectedActivity === 'live' ? colors.white : '#7E7E7E'
                            }
                        ]}
                    >
                        Live
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.activityHeader,
                        selectedActivity === 'completed' && { backgroundColor: '#3E4970' }
                    ]}
                    disabled={selectedActivity === 'completed'}
                    onPress={() => setSelectedActivity('completed')}
                >
                    <Text
                        style={[
                            styles.activityHeaderText,
                            {
                                color: selectedActivity === 'completed' ? colors.white : '#7E7E7E'
                            }
                        ]}
                    >
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>
            <ListContainer data={ selectedActivity === 'live' ? live : completed } navigation={navigation} />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    headerContainer: {
        height: normalize(90),
        marginBottom: normalize(20),
        backgroundColor: colors.bottomTabBgColor,
        paddingBottom: normalize(20),
        borderBottomLeftRadius: normalize(30),
        borderBottomRightRadius: normalize(30),
        width: '100%',
        justifyContent: 'flex-end'
    },
    headerInnerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '98%',
        alignSelf: 'center'
    },
    goBackContainer: {
        width: normalize(30),
        height: normalize(30),
        alignItems: 'center',
        flex: .14,
        alignSelf: 'center',
        marginTop: normalize(11)
    },
    backButton: {
        width: normalize(20),
        height: normalize(21),
        padding: normalize(10),
    },
    title: {
        color: colors.white,
        fontSize: fonts.size.font20,
        fontFamily: fonts.type.soraSemiBold,
        flex: .6
    },
    notificationAndWalletWrapper: {
        flexDirection: 'row',
        flex: .5,
        justifyContent: 'space-evenly'
    },
    notificationWrapper: {
        marginRight: normalize(10)
    },
    notificationIcon: {
        height: 20,
        width: 20
    },
    walletWrapper: {
        flexDirection: 'row'
    },
    walletNumber: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular,
        marginLeft: normalize(7)
    },
    listContainer: {
        width: '92%',
        alignSelf: 'center',
        marginTop: normalize(20),
        flex: 1
    },
    selectedActivityContainer: {
        height: normalize(50),
        backgroundColor: '#8F8F8F33',
        borderRadius: normalize(13),
        padding: normalize(7),
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center'
    },
    activityHeader: {
        height: '100%',
        width: '50%',
        borderRadius: normalize(13),
        justifyContent: 'center'
    },
    activityHeaderText: {
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14,
        textAlign: 'center'
    }
})

const mapStateToProps = state => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(ActivityScreen)
