import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';
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
import PrimaryButton from '../components/buttons/PrimaryButton';
import MainEmptyComponent from '../components/emptyComponent/MainEmptyComponent';
import MainHeader from '../components/header/MainHeader';
import ListAccordion from '../components/ListAccordion';
import { icons, images } from '../constants';
import { myReferral } from '../mock/myReferral';
import { colors, fonts } from '../theme';

const renderItemMyReferrals = ({ index, item }) => {
    return(
       <ListAccordion
            item={item}
            index={index}
            key={item.id || index}
            isFromMyReferralScreen={true}
       />
    )
}

const totalReferralAmount = () => {
    let sum = 0;
    for(let i = 0; i < myReferral.length; i++){
        sum += Number(myReferral[i].earned.substr(1));
    }
    return `$${sum}`
}

const MyReferralScreen = ({ navigation, user }) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.bottomTabBgColor} />
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
                        {totalReferralAmount()}
                    </Text>
                </View>
                <Image
                    source={images.MY_REFERRAL}
                    style={styles.myReferralImage}
                />
            </View>

            <View style={styles.listWrapper}>
                {
                    myReferral.length > 0 &&
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
                }

                <View style={{flex:1}}>
                <FlatList
                    data={myReferral}
                    style={{
                        flex: 1
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItemMyReferrals}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<MainEmptyComponent emptyText={'No Search Results found...'} />}
                    ListFooterComponent={() => <View style={{height: normalize(35, 'height')}} />}
                />
                </View>
            </View>
            <View style={styles.footerWrapper}>
                <PrimaryButton
                    text={'Refer More Friends'}
                    onPress={() => {}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
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
        height: normalize(80),
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
