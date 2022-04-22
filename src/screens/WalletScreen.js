
import { Actionsheet } from 'native-base';
import React, { useState } from 'react';
import { 
    SafeAreaView, 
    StatusBar,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import MainHeader from '../components/header/MainHeader';
import ListAccordion from '../components/ListAccordion';
import { icons } from '../constants';
import { colors, fonts, metrics } from '../theme';

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

    const[connectWalletIsOpen, setConnectWalletIsOpen] = useState(false);

    const connectWalletHandler  = () => {
        setConnectWalletIsOpen(preState => !preState);
    }

    const [walletSelected, setWalletSelected] = useState({
        icon: '',
        walletId: null,
        wallet: ''
    });

    const connectCrypto = (wallet, icon) => {
        setWalletSelected({
            icon,
            wallet,
            walletId: 'userId123456789'
        });
        connectWalletHandler();
    }


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
                        icon={icons.WALLET_BONUS}
                    />
                    <View
                        style={styles.separate}
                    />
                    <Helper
                        text={'Bonus'}
                        buttonText={'Earn more'}
                        amount={'$32'}
                        icon={icons.WALLET_EARN_MONEY}
                    />
                </LinearGradient>
                {
                    walletSelected?.walletId === null ? 
                        <TouchableOpacity
                            style={styles.cryptoButton}
                            onPress={connectWalletHandler}
                        >
                            <Text style={styles.cryptoText}>
                                Connect Crypto Wallet
                            </Text>
                        </TouchableOpacity>
                    :
                        <View style={styles.walletSelectedContainer}>
                            <View style={styles.walletSelectedHeader}>
                                <Text style={styles.myWalletText}>
                                    My Wallet
                                </Text>
                                <TouchableOpacity 
                                    style={styles.changeButton}
                                    onPress={connectWalletHandler}
                                >
                                    <Text style={styles.changeText}>
                                        Change
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.walletSelected}>
                                <Image
                                    source={walletSelected.icon}
                                    style={styles.walletIcon}
                                    resizeMode={'contain'}
                                />
                                <View>
                                    <Text style={styles.iconText}>
                                        {walletSelected.wallet}
                                    </Text>

                                    <Text style={styles.iconText}>
                                        {walletSelected.walletId}
                                    </Text>
                                </View>
                            </View>
                        </View>
                }
                
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
            <Actionsheet
                isOpen={connectWalletIsOpen}
                onClose={connectWalletHandler}
                hideDragIndicator={true}
            >
                <LinearGradient
                    style={styles.linearGradient}
                    colors={['#303030', '#303030']}
                >
                    <View style={styles.actionSheetWrapper}>
                        <View style={styles.actionSheetHeader}>
                            <Image
                                source={icons.USER_ROUND}
                                style={styles.userRound}
                                resizeMode={'contain'}
                            />
                            <Text style={styles.actionSheetTitle}>
                                My Wallet
                            </Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={connectWalletHandler}
                            >
                                <Image
                                    source={icons.CLOSE}
                                    style={styles.userRound}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.actionSheetTitleText}>
                            Crypto Wallets
                        </Text>
                        <View style={styles.connectContainer}>
                            <View style={styles.connectWrapper}>
                                <Image
                                    source={icons.STRIPE}
                                    style={styles.icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.connectTitle}>
                                    Stripe
                                </Text>
                                <TouchableOpacity
                                    style={styles.connectButton}
                                    onPress={() => connectCrypto('Stripe', icons.STRIPE)}
                                >
                                    <Text style={styles.connectText}>
                                        Connect
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.connectWrapper}>
                                <Image
                                    source={icons.META_MASK}
                                    style={styles.icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.connectTitle}>
                                    Metamask
                                </Text>
                                <TouchableOpacity
                                    style={styles.connectButton}
                                    onPress={() => connectCrypto('Metamask', icons.META_MASK)}
                                >
                                    <Text style={styles.connectText}>
                                        Connect
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.connectWrapper}>
                                <Image
                                    source={icons.COIN_BASE}
                                    style={styles.icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.connectTitle}>
                                    Coinbase Wallet
                                </Text>
                                <TouchableOpacity
                                    style={styles.connectButton}
                                    onPress={() => connectCrypto('Coinbase', icons.COIN_BASE)}
                                >
                                    <Text style={styles.connectText}>
                                        Connect
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.connectWrapper}>
                                <Image
                                    source={icons.PORTIS}
                                    style={styles.icon}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.connectTitle}>
                                    Portis
                                </Text>
                                <TouchableOpacity
                                    style={styles.connectButton}
                                    onPress={() => connectCrypto('Portis', icons.PORTIS)}
                                >
                                    <Text style={styles.connectText}>
                                        Connect
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={[styles.cryptoButton, { position: 'absolute', zIndex: 1, bottom: normalize(15) }]}
                            onPress={connectWalletHandler}
                        >
                            <Text style={styles.cryptoText}>
                                Connect Crypto Wallet
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                </LinearGradient>
            </Actionsheet>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    myWalletText: {
        color: colors.white,
        fontSize: fonts.size.font16,
        fontFamily: fonts.type.soraSemiBold
    },
    iconText: {
        color: '#7C7C7C',
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12
    },
    changeButton: {

    },
    changeText: {
        color: colors.primary,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12
    },
    connectContainer: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: normalize(20),
        borderWidth: 1,
        borderRadius: normalize(6),
        borderColor: '#515151'
    },
    walletSelected: {
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center'
    },
    walletSelectedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '92%',
        alignSelf: 'center',
        marginVertical: normalize(15)
    },
    connectButton: {
        padding: normalize(7),
        paddingHorizontal: normalize(15),
        marginRight: normalize(12),
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: normalize(8)
    },
    connectTitle: {
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraSemiBold,
        color: '#7C7C7C',
        marginLeft: normalize(15),
        flex: 1
    },
    connectWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#515151',
        borderBottomWidth: 1,
        padding: 5
    },
    connectText: {
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    actionSheetTitleText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12,
        marginTop: normalize(14),
        width: '89%',
        alignSelf: 'center'
    },
    icon: {
        width: normalize(32),
        height: normalize(32, 'height')
    },  
    linearGradient: {
        borderTopLeftRadius : normalize(27),
        borderTopRightRadius : normalize(27),
        height: metrics.screenHeight / 1.6,
        width: '100%',
        padding: normalize(12)
    },
    userRound: {
        width: normalize(30),
        height: normalize(25, 'height'),
        marginTop: 1
    },
    closeButton: {
        alignSelf: 'flex-end'
    },
    actionSheetWrapper: {
        borderTopLeftRadius : normalize(27),
        borderTopRightRadius : normalize(27),
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#616161',
        height: '100%'
    },
    actionSheetHeader: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: normalize(15)
    },
    actionSheetTitle: {
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font18,
        color: colors.white,
        marginLeft: normalize(12),
        flex: 1
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
