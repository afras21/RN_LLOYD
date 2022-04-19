import React from 'react';
import { TouchableOpacity } from 'react-native';
import { 
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Text,
    Image
} from 'react-native';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';
import MainHeader from '../components/header/MainHeader';
import { icons, images } from '../constants';
import { myReferral } from '../mock/myReferral';
import { colors, fonts } from '../theme';

const renderItemMyReferrals = ({ index, item }) => {
    return(
        <View style={[styles.myReferralWrapper]}>
            <Image
                source={{uri: item.avatar}}
                style={styles.avatar}
            />
            <Text numberOfLines={1} style={styles.nameText}>
                {item.name}
            </Text>
            <View style={styles.taskWrapper}>
                <Text style={[styles.taskText, {backgroundColor: item.task >= 1 ? '#A4D6A3' : '#374137', color: item.task >= 1 ? '#136111' : '#1B2A1A' }]}>
                    $1
                </Text>
                <Text style={[{ color: item.task >= 1 ? '#A5D6A3' : '#374137'}]}>- - -</Text>
                <Text style={[styles.taskText, {backgroundColor: item.task >= 2 ? '#A4D6A3' : '#374137', color: item.task >= 2 ? '#136111' : '#1B2A1A' }]}>
                    $2
                </Text>
                <Text style={[{color: item.task >= 3 ? '#A5D6A3' : '#374137'}]}>- - -</Text>
                <Text style={[styles.taskText, {backgroundColor: item.task >= 3 ? '#A4D6A3' : '#374137', color: item.task >= 3 ? '#136111' : '#1B2A1A' }]}>
                    $3
                </Text>
            </View>
            <Text style={styles.earnedText}>
                {item.earned}
            </Text>
            <TouchableOpacity
                style={styles.bottomArrowButotn}
            >
                <Image
                    style={styles.bottomArrow}
                    source={icons.BOTTOM_ARROW}
                />
            </TouchableOpacity>
        </View>
    )
}

const MyReferralScreen = ({ navigation, user }) => {
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                navigation={navigation}
                title={'My Referrals'}
                isNotificationVisible={false}
                isWalletVisible={false}
            />

            <View style={styles.subHeader}>
                <View>
                    <Text style={styles.referralText}>
                        Total referral amount  ⓘ
                    </Text>
                    <Text style={styles.referralAmount}>
                        $32
                    </Text>
                </View>
                <Image
                    source={images.MY_REFERRAL}
                    style={styles.myReferralImage}
                />
            </View>

            <View style={styles.listWrapper}>
                <View style={styles.listHeadingWrapper}>
                    <Text style={styles.listHeading}>
                        Invited to
                    </Text>
                    <Text style={[styles.listHeading, { marginLeft: 30 }]}>
                        Task
                    </Text>
                    <Text style={styles.listHeading}>
                        Earned
                    </Text>
                </View>
                <View style={{flex:1}}>
                <FlatList
                    data={myReferral}
                    style={{
                        flex: 1
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItemMyReferrals}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => <View style={{height: normalize(70)}} />}
                />
                </View>
            </View>
            <View style={styles.footerWrapper}>
                <TouchableOpacity 
                    style={styles.referMoreButton}
                >
                    <Text style={styles.referMoreText}>
                        Refer More Friends
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    bottomArrowButotn: {
        padding: normalize(8),
        marginLeft: normalize(10)
    },
    bottomArrow: {
        height: 10,
        width: 15
    },
    footerWrapper: {
        // borderTopWidth: 1,
        shadowColor: '#DADADA',
        elevation: 2,
        shadowOpacity: 2,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        bottom: 0,
        backgroundColor: colors.bottomTabBgColor,
        height: normalize(85),
        alignItems: 'center',
        justifyContent: 'center'
    },
    referMoreButton: {
        backgroundColor: colors.primary,
        width: '90%',
        alignSelf: 'center',
        borderRadius: normalize(5),
        height: normalize(50),
        justifyContent: 'center'
    },
    referMoreText: {
        color: colors.black,
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold,
        textAlign: 'center'
    },
    taskText: {
        borderRadius: normalize(50),
        fontFamily: fonts.type.soraBold,
        fontSize: fonts.size.font10,
        color: '#136111',
        width: normalize(20),
        height: normalize(20),
        textAlign: 'center',
        alignSelf: 'center'
    },  
    earnedText:{
        color: colors.white,
        fontFamily: fonts.type.soraBold,
        fontSize: fonts.size.font10,
        backgroundColor: '#136111',
        width: normalize(40),
        textAlign: 'center',
        padding: normalize(5),
        borderRadius: normalize(20)
    },
    nameText: {
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular,
        marginLeft: normalize(10),
        flex: 1
    },  
    taskWrapper: {
        flexDirection: 'row',
        marginHorizontal: normalize(20)
    },
    avatar: {
        width: normalize(30),
        height: normalize(30),
        borderRadius: normalize(40),
        borderWidth: 3,
        borderColor: colors.white,
        marginRight: normalize(5)
    },
    listHeadingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: normalize(5),
        width: '92%',
        alignSelf: 'center'
    },
    listHeading: {
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraBold
    },  
    listWrapper: {
        backgroundColor: '#4F5255',
        padding: normalize(7),
        borderRadius: normalize(7),
        width: '96%',
        alignSelf: 'center',
        height: '70%'
    },  
    myReferralWrapper: {
        backgroundColor: '#1C1C1C',
        padding: normalize(10),
        marginVertical: normalize(5),
        width: '97%',
        alignSelf: 'center',
        borderRadius: normalize(7),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginBottom: normalize(15)
    },  
    myReferralImage: {
        width: normalize(90),
        height: normalize(80)
    },
    referralText: {
        color: '#E1D9FF',
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular
    },  
    referralAmount: {
        fontSize: fonts.size.font20,
        fontFamily: fonts.type.soraBold,
        color: colors.primary,
        marginTop: normalize(10)
    }
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(MyReferralScreen);
