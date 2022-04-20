import React from 'react';
import { ScrollView } from 'react-native';
import { 
    SafeAreaView, 
    StatusBar,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import MainHeader from '../components/header/MainHeader';
import ListAccordion from '../components/ListAccordion';
import { icons } from '../constants';
import { colors, fonts } from '../theme';

const Helper = ({ icon, text, amount, buttonText, buttonColor }) => {
    return (
        <View style={styles.helper}>
            <View style={styles.helperInnerWrapper}>
                <Image
                    source={icon}
                    style={styles.icons}
                    resizeMode={'contain'}
                />
                <View style={styles.helperTextWrapper}>
                    <Text style={styles.helperText}>
                        {text}
                    </Text>
                    <Text style={styles.helperAmountText}>
                        {amount}
                    </Text>
                </View>
            </View>
            {
                buttonColor ?
                    <TouchableOpacity
                        style={[styles.helperButton, { backgroundColor: buttonColor } ]}
                    >
                        <Text style={styles.helperButtonText}>
                            {buttonText}
                        </Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity
                        // style={{}}
                    >
                        <Text style={[styles.helperButtonText, {  color: colors.primary, marginRight: 5 }]}>
                            {buttonText}
                        </Text>
                    </TouchableOpacity>
            }
            
        </View>
    )
}

const WalletScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.bottomTabBgColor} />
            <MainHeader 
                navigation={navigation}
                title={'Wallet'}
                marginBottom={0}
                isNotificationVisible={false}
                isWalletVisible={false}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollContainer}
            >
                <TouchableOpacity
                    style={styles.viewTransactionButton}
                // onPress={}
                >
                    <Text style={styles.viewTransactionText}>
                        View Transaction
                    </Text>

                </TouchableOpacity>

                <View
                    style={styles.subHeader}
                >
                    <View style={styles.subHeaderWrapper}>
                        <Image
                            source={icons.WALLET}
                            style={styles.walletIcon}
                            resizeMode={'contain'}
                        />
                        <View style={styles.walletText}>
                            <Text style={styles.balanceText}>
                                Balance
                            </Text>
                            <Text style={styles.amountText}>
                                $500
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.subHeaderText}>
                        Balance : Deposit + Winnings + Bonus = $500
                    </Text>
                </View>
                <LinearGradient
                    colors={['#313131', '#131313']}
                    style={styles.helperContainer}
                >
                    <Helper
                        text={'Deposit Money'}
                        buttonText={'Deposit'}
                        buttonColor={'#51E36E'}
                        amount={'$300'}
                        icon={icons.WALLET_DEPOSIT_MONEY}
                    />
                    <View
                        style={styles.separate}
                    />
                    <Helper
                        text={'Winning Money'}
                        buttonText={'Withdraw'}
                        buttonColor={'#43C8FF'}
                        amount={'$168'}
                        icon={icons.WALLET_EARN_MONEY}
                    />
                    <View
                        style={styles.separate}
                    />
                    <Helper
                        text={'Bonus'}
                        buttonText={'Earn more'}
                        amount={'$32'}
                        icon={icons.WALLET_BONUS}
                    />
                </LinearGradient>

                <TouchableOpacity
                    style={styles.cryptoButton}
                >
                    <Text style={styles.cryptoText}>
                        Connect Crypto Wallet
                    </Text>
                </TouchableOpacity>
                <View style={styles.listAccordion}>
                    <ListAccordion
                        title={'FAQ & Support'}
                    />
                    <ListAccordion
                        title={'How it works'}
                    />
                    <ListAccordion
                        title={'Refer & Earn'}
                    />
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
    listAccordion: {
        width: '93%',
        alignSelf: 'center',
        marginVertical: normalize(15)
    },
    cryptoButton: {
        backgroundColor: colors.primary,
        width: '92%',
        alignSelf: 'center',
        padding: normalize(14),
        borderRadius: normalize(8)
    },  
    scrollContainer: {
        flex: 1
    },
    cryptoText: {
        color: colors.black,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14,
        textAlign: 'center'
    },
    helperInnerWrapper: {
        flexDirection: 'row'
    },
    helperContainer: {
        width: '92%',
        padding: normalize(15),
        alignSelf: 'center',
        borderRadius: normalize(12),
        elevation: 2,
        borderWidth: 1,
        borderColor: '#2B2B2B',
        shadowColor: '#2B2B2B',
        shadowOpacity: 2,
        marginBottom: normalize(20)
    },
    helperTextWrapper: {
        flexDirection: 'column'
    },
    walletText: {
        flexDirection: 'column'
    },  
    helper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        marginVertical: normalize(10)
    },
    helperButton: {
        borderRadius: normalize(7),
        padding: normalize(10),
        width: normalize(116),
        backgroundColor: '#51E36E'
    },
    separate: {
        width: '100%',
        backgroundColor: '#474747',
        height: normalize(3),
        marginTop: normalize(10)
    },
    helperAmountText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font18
    },
    helperButtonText: {
        color: colors.white,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold,
        textAlign: 'center'
    },  
    icons: {
        width: normalize(25),
        height: normalize(25),
        marginRight: normalize(12),
        marginTop: 2
    },  
    walletIcon: {
        width: normalize(40),
        height: normalize(38),
        alignSelf: 'center',
        marginRight: normalize(15)
    },  
    balanceText: {
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraSemiBold
    },
    helperText: {
        color: '#C7C7C7',
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold
    },
    subHeaderText: {
        color: '#C7C7C7',
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular,
        textAlign: 'center',
        marginTop: normalize(10)
    },  
    amountText: {
        color: colors.primary,
        fontSize: fonts.size.font22,
        fontFamily: fonts.type.soraSemiBold
    },  
    viewTransactionButton:{
        borderRadius: normalize(12),
        borderWidth: 1,
        borderColor: colors.white,
        padding: normalize(8),
        alignSelf: 'flex-end',
        marginTop: normalize(15),
        marginRight: normalize(15),
        paddingHorizontal: normalize(12)
    },
    subHeaderWrapper:{
        flexDirection: 'row',
        justifyContent: 'center'
    },  
    subHeader: {
        marginVertical: normalize(15)
    },
    viewTransactionText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font10
    }
})

export default WalletScreen
