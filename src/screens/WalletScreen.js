
import { Actionsheet, Checkbox, CheckIcon, FlatList } from 'native-base';
import React, { useState } from 'react';
import { 
    SafeAreaView, 
    StatusBar,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    ToastAndroid
} from 'react-native';
import { 
    Input, 
    Box,
    Select
 } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import PrimaryButton from '../components/buttons/PrimaryButton';
import MainHeader from '../components/header/MainHeader';
import ListAccordion from '../components/ListAccordion';
import { icons, images, strings } from '../constants';
import { colors, fonts, metrics } from '../theme';
import { useSelector } from 'react-redux';

const WALLETS = [
    {
        icon: icons.STRIPE,
        wallet: 'Stripe',
        id: 'STRIPE'
    },
    {
        icon: icons.META_MASK,
        wallet: 'Metamask',
        id: 'META_MASK'    
    },
    {
        icon: icons.COIN_BASE,
        wallet: 'Coinbase',
        id: 'COIN_BASE'
    },
    {
        icon: icons.PORTIS,
        wallet: 'Portis',
        id: 'PORTIS'
    }
];


const Helper = ({ icon, text, amount, buttonText, buttonColor, onPress }) => {
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
                        onPress={onPress}
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

const ActionSheetChildren = ({ 
    headerIcon,
    title,
    Children,
    onCloseActionSheet,
    SubHeaderActionSheet,
    FooterButton
 }) => {
    return (
        <LinearGradient
            style={styles.linearGradient}
            colors={['#303030', '#303030']}
        >
            <View style={styles.actionSheetWrapper}>
                <View style={styles.actionSheetHeader}>
                    <Image
                        source={headerIcon}
                        style={styles.userRound}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.actionSheetTitle}>
                        {title}
                    </Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onCloseActionSheet}
                    >
                        <Image
                            source={icons.CLOSE}
                            style={[styles.userRound, { width: normalize(25) }]}
                        />
                    </TouchableOpacity>
                </View>
                <SubHeaderActionSheet />
                <Children />
                <FooterButton />
            </View>

        </LinearGradient>
    )
}

const Wallet = ({ walletSelected }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '94%',
                alignSelf: 'center',
                marginTop: normalize(7)
            }}
        >
            <Image
                source={walletSelected.icon}
                style={styles.walletIcon}
                resizeMode={'contain'}
            />
            <Text style={styles.selectedWalletText}>
                By {walletSelected.wallet}
            </Text>
        </View>
    )
}

const RenderDepositMoneyAmount = ({ amount, onPress, selected }) => {
    return (
        <TouchableOpacity
            style={[styles.withDrawMoneyWrapper, { backgroundColor: selected ? '#505050' : 'transparent' }]}
            onPress={onPress}
        >
            <Text style={styles.plusButtonText}>
                +
            </Text>
            <Text style={styles.withDrawMoneyText}>
                {amount}
            </Text>

        </TouchableOpacity>
    )

}

const TermsAndCondition = () => {
    return (
        <View style={styles.footerWrapper}>
            <View style={styles.footerTermsWrapper}>
                <Checkbox
                    backgroundColor={'transparent'}
                    borderColor={colors.white}
                    borderWidth={1}
                />
                <Text style={styles.footerTermsAndConditionText}>
                    I hereby accept the <Text style={{ color: colors.primary }}>Terms and Condition</Text>
                </Text>
            </View>
            <Image
                source={images.CONNECT_WALLET_BANNER1}
                style={styles.footerBanner}
            // resizeMode={'contain'}
            />
        </View>
    )
}


const WalletScreen = ({ navigation }) => {

    const user = useSelector(state => state.user);
    const[wallets, setWallets] = useState(WALLETS);
    const[withDrawAmountSelected, setWithDrawAmountSelected] = useState('$5');
    const[connectWalletIsOpen, setConnectWalletIsOpen] = useState(false);
    const[withDrawIsOpen, setWithDrawIsOpen] = useState(false);
    const[depositIsOpen, setDepositIsOpen] = useState(false);

    const updateWithDrawAmount = (value = '$5') => {
        setWithDrawAmountSelected(value);
    }

    const connectWalletHandler  = (type = 'wallet') => {
        if(type === 'withdraw'){
            setWithDrawIsOpen(preState => !preState);
        }else if(type === 'deposit'){
            setDepositIsOpen(preState => !preState);
        }else {
            setConnectWalletIsOpen(preState => !preState);
        }
        
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

    const renderWallet = ({ item }) => {
        return (
            <View style={styles.connectWrapper}>
                <Image
                    source={item.icon}
                    style={styles.icon}
                    resizeMode={'contain'}
                />
                <Text style={styles.connectTitle}>
                    {item.wallet}
                </Text>
                <TouchableOpacity
                    style={styles.connectButton}
                    onPress={() => connectCrypto(item.wallet, item.icon)}
                >
                    <Text style={styles.connectText}>
                        Connect
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const depositHandler = () => {
        if(!walletSelected.wallet){
            ToastAndroid.show('Please connect to your wallet', ToastAndroid.SHORT)
            return;
        }
        connectWalletHandler('deposit');
    }

    const withdrawerHandler = () => {
        if(!walletSelected.wallet){
            ToastAndroid.show('Please connect to your wallet', ToastAndroid.SHORT)
            return;
        }
        connectWalletHandler('withdraw');    
    }

    const closeActionSheet = () => {
        setWithDrawIsOpen(false);
        setDepositIsOpen(false);
        setConnectWalletIsOpen(false);
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
                    onPress={() => navigation.navigate('TransactionScreen')}
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
                                {user.walletAmount}
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
                        onPress={depositHandler}
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
                        onPress={withdrawerHandler}
                        icon={icons.WALLET_BONUS}
                    />
                    <View
                        style={styles.separate}
                    />
                    <Helper
                        text={'Bonus'}
                        buttonText={'Earn more'}
                        amount={'$32'}
                        onPress={withdrawerHandler}
                        icon={icons.WALLET_EARN_MONEY}
                    />
                </LinearGradient>
                {
                    walletSelected?.walletId === null ? 
                        <PrimaryButton
                            onPress={connectWalletHandler}
                            text={strings.CONNECT_CRYPTO_WALLETS}
                        />
                    :
                        <View style={styles.walletSelectedContainer}>
                            <View style={styles.walletSelectedHeader}>
                                <Text style={styles.myWalletText}>
                                    {strings.MY_WALLET}
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
                isOpen={connectWalletIsOpen || depositIsOpen || withDrawIsOpen}
                onClose={closeActionSheet}
                hideDragIndicator={true}
            >
                {
                    connectWalletIsOpen === true ?
                        <ActionSheetChildren
                            headerIcon={icons.USER_ROUND}
                            title={'My Wallet'}
                            onCloseActionSheet={connectWalletHandler}
                            SubHeaderActionSheet={() =>
                                <Text style={styles.actionSheetTitleText}>
                                    {strings.CRYPTO_WALLETS}
                                </Text>
                            }
                            Children={() =>
                                <>
                                    <View style={styles.connectContainer}>
                                        <FlatList
                                            data={wallets}
                                            keyExtractor={item => item.id}
                                            showsVerticalScrollIndicator={false}
                                            renderItem={renderWallet}
                                        />
                                    </View>
                                </>
                            }
                            FooterButton={() =>
                                <PrimaryButton
                                    disabled={false}
                                    customButtonStyle={styles.connectCryptoButton}
                                    text={strings.CONNECT_CRYPTO_WALLETS}
                                    onPress={() => { }}
                                />
                            }
                        />
                        :
                        depositIsOpen ?
                            <ActionSheetChildren
                                headerIcon={icons.WALLET_DEPOSIT_MONEY}
                                title={'Deposit Money'}
                                onCloseActionSheet={depositHandler}
                                SubHeaderActionSheet={() =>
                                    <Wallet walletSelected={walletSelected} />
                                }
                                Children={() =>
                                    <>
                                        <View style={styles.withDrawWrapper}>
                                            <Box 
                                                alignItems='center'  
                                                style={styles.withDrawMoneySubContainer} 
                                            >
                                                <View style={styles.withDrawMoneyBody1}>
                                                    <Text style={styles.placeHolderText}>
                                                        Amount
                                                    </Text>
                                                    <Input 
                                                        borderRadius={3}
                                                        borderColor={'#3F3F3F'}
                                                        color={colors.white} 
                                                        fontSize={fonts.size.font12}
                                                        fontFamily={fonts.type.soraBold}
                                                        w='100%'  
                                                        defaultValue={withDrawAmountSelected}
                                                        value={withDrawAmountSelected}
                                                    />
                                                </View>
                                                <View style={styles.withDrawMoneyBody1}>
                                                    <Text style={styles.placeHolderText}>
                                                        Currency
                                                    </Text>
                                                    <Select 
                                                        color={colors.white} 
                                                        w='100%' 
                                                        borderRadius={3}
                                                        borderColor={'#3F3F3F'}
                                                        value={'USD'} 
                                                        fontSize={fonts.size.font12}
                                                        fontFamily={fonts.type.soraBold}
                                                        defaultValue={'USD'}
                                                        placeholder='Currency' 
                                                        _selectedItem={{
                                                            bg: 'teal.600',
                                                            endIcon: <CheckIcon size='5' />
                                                        }} 
                                                    >
                                                        <Select.Item label='USD' value='USD' />
                                                    </Select>
                                                </View>
                                                <TouchableOpacity  
                                                    style={styles.applyCouponButton}
                                                >
                                                    <Image 
                                                        style={styles.applyIconImage} 
                                                        source={icons.DISCOUNT} 
                                                        resizeMode={'contain'}
                                                    />
                                                    <Text style={styles.applyCoupon}>
                                                        Apply an offer
                                                    </Text>
                                                </TouchableOpacity>
                                            </Box>
                                        
                                            <View style={styles.amountWrapper}>
                                                <RenderDepositMoneyAmount 
                                                    selected={withDrawAmountSelected === '$5'}
                                                    onPress={() => { updateWithDrawAmount('$5') }}
                                                    amount={'$5'}
                                                />
                                                <RenderDepositMoneyAmount 
                                                    selected={withDrawAmountSelected === '$10'}
                                                    onPress={() => { updateWithDrawAmount('$10') }}
                                                    amount={'$10'}
                                                />
                                                <RenderDepositMoneyAmount 
                                                    selected={withDrawAmountSelected === '$50'}
                                                    onPress={() => { updateWithDrawAmount('$50') }}
                                                    amount={'$50'}
                                                />
                                                <RenderDepositMoneyAmount 
                                                    selected={withDrawAmountSelected === '$100'}
                                                    onPress={() => { updateWithDrawAmount('$100') }}
                                                    amount={'$100'}
                                                />
                                                
                                            </View>
                                            
                                            <TermsAndCondition />
                                        </View>
                                    
                                    </>
                                }
                                FooterButton={() =>
                                    <PrimaryButton
                                        disabled={false}
                                        customButtonStyle={styles.connectCryptoButton}
                                        text={strings.DEPOSIT_MONEY}
                                        onPress={() => { }}
                                    />
                                }
                            />
                            :
                            <ActionSheetChildren
                                headerIcon={icons.WALLET_BONUS}
                                title={'Withdraw Money'}
                                onCloseActionSheet={withdrawerHandler}
                                SubHeaderActionSheet={() =>
                                    <Wallet walletSelected={walletSelected} />
                                }
                                Children={() =>
                                    <>
                                        <View style={styles.withDrawWrapper}>
                                            <Box
                                                alignItems='center'
                                                style={styles.withDrawMoneySubContainer}
                                            >
                                                <View style={styles.withDrawMoneyBody1}>
                                                    <Text style={styles.placeHolderText}>
                                                        Amount
                                                    </Text>
                                                    <Input
                                                        borderRadius={3}
                                                        borderColor={'#3F3F3F'}
                                                        color={colors.white}
                                                        fontSize={fonts.size.font12}
                                                        fontFamily={fonts.type.soraBold}
                                                        w='100%'
                                                        keyboardType={'number-pad'}
                                                        defaultValue={'5'}
                                                    />
                                                </View>
                                                <View style={styles.withDrawMoneyBody1}>
                                                    <Text style={styles.placeHolderText}>
                                                        Currency
                                                    </Text>
                                                    <Select
                                                        color={colors.white}
                                                        w='100%'
                                                        borderRadius={3}
                                                        borderColor={'#3F3F3F'}
                                                        value={'USD'}
                                                        fontSize={fonts.size.font12}
                                                        fontFamily={fonts.type.soraBold}
                                                        defaultValue={'USD'}
                                                        placeholder='Currency'
                                                        _selectedItem={{
                                                            bg: 'teal.600',
                                                            endIcon: <CheckIcon size='5' />
                                                        }}
                                                    >
                                                        <Select.Item label='USD' value='USD' />
                                                    </Select>
                                                </View>
                                            </Box>

                                            <View style={styles.depositMoneyMinMaxWrapper}>
                                                <Text style={styles.minMaxText}>
                                                    Min 
                                                    <Text style={styles.minMaxAmountText}>
                                                        {" "}$5 | {" "}
                                                    </Text>
                                                </Text>
                                                <Text style={styles.minMaxText}>
                                                    Max
                                                    <Text style={styles.minMaxAmountText}>
                                                        {" "}$1000
                                                    </Text>
                                                </Text>
                                            </View>

                                            <TermsAndCondition />
                                        </View>
                                    </>
                                }
                                FooterButton={() =>
                                    <PrimaryButton
                                        disabled={false}
                                        customButtonStyle={styles.connectCryptoButton}
                                        text={strings.WITH_DRAW_MONEY}
                                        onPress={() => {}}
                                    />
                                }
                            />
                }
            </Actionsheet>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    depositMoneyMinMaxWrapper: {
        flexDirection: 'row',
        marginTop: normalize(10),
        width: '98%'
    },
    amountWrapper: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: normalize(20),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    withDrawMoneyBody1: { 
        flex: 1,
        marginHorizontal: normalize(10),
        height: normalize(30, 'height')
    },
    withDrawWrapper: { 
        width: '93%', 
        alignSelf: 'center', 
        marginVertical: normalize(20),
        alignItems: 'center',
        height: '60%'
    },
    minMaxAmountText: {
        color: '#979797'
    },
    minMaxText: {
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font12,
        color: colors.white
    },
    placeHolderText: {
        color: colors.white,
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font8,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#505050',
        top: -normalize(9),
        left: normalize(10)
    },
    withDrawMoneyBody2: { 
        flex: 1,
        height: normalize(30, 'height')
    },
    withDrawMoneySubContainer: { 
        flexDirection:'row', 
        width: '100%', 
        alignSelf: 'center',  
        justifyContent:'space-around',
        alignItems: 'center',
        height: normalize(50),
        borderRadius: normalize(6), 
        backgroundColor: '#505050'
    },
    footerWrapper: {
        width: '100%', 
        position: 'absolute', 
        bottom: 10
    },
    withDrawMoneyWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#505050',
        borderRadius: normalize(4),
        width: normalize(70),
        alignItems: 'center',
        height: 30,
        justifyContent: 'center'
    },
    footerTermsWrapper: {
        flexDirection: 'row',
        marginVertical: normalize(15),
        width: '98%',
        alignSelf: 'center'
    },
    footerTermsAndConditionText: { 
        marginLeft: normalize(10), 
        color: colors.white, 
        fontSize: fonts.size.font12, 
        fontFamily: fonts.type.soraRegular 
    },
    withDrawMoneyText: {
        color: colors.white,
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font14
    },
    footerBanner: {
        width: '100%',
        alignSelf: 'center',
        height: normalize(45, 'height'),
    },
    applyCoupon: {
        color: colors.white,
        fontFamily: fonts.type.soraRegular,
        fontSize: normalize(10, 'height'),
        marginLeft: normalize(2)
    },
    plusButtonText: {
        color: '#51E36E',
        fontFamily: fonts.type.soraMedium,
        fontSize: fonts.size.font24,
        marginTop: -6,
        marginRight: 5
    },
    myWalletText: {
        color: colors.white,
        fontSize: fonts.size.font16,
        fontFamily: fonts.type.soraSemiBold
    },
    selectedWalletText: { 
        fontFamily: fonts.type.soraSemiBold, 
        fontSize: fonts.size.font12,
        color: '#7C7C7C', 
        marginLeft: normalize(-5) 
    },
    iconText: {
        color: '#7C7C7C',
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12
    },
    applyIconImage: {
        height:normalize(17,'height'), 
        width:normalize(15)
    },
    applyCouponButton: {
        flexDirection: 'row',
        borderColor: colors.primary,
        justifyContent: 'space-around',
        borderWidth: 1,
        flex: 1,
        marginHorizontal: normalize(10),
        borderRadius: normalize(5),
        height: normalize(30, 'height'),
        alignItems: 'center'
    },
    changeButton: {

    },
    changeText: {
        color: colors.primary,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font12
    },
    connectCryptoButton: {
        position: 'absolute', 
        zIndex: 1, 
        bottom: normalize(15)
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
        width: normalize(23),
        height: normalize(23, 'height'),
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
    scrollContainer: {
        flex: 1
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
