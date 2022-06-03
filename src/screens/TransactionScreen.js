import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainHeader from '../components/header/MainHeader';
import { icons, strings } from '../constants';
import normalize from 'react-native-normalize';
import { colors, fonts } from '../theme';
import { useSelector } from 'react-redux';
import { transactions } from '../mock/transaction';
import MainEmptyComponent from '../components/emptyComponent/MainEmptyComponent';

const Balance = ({ balance }) => {
    return (
        <LinearGradient
            style={styles.balanceWrapper}
            colors={['#313131', '#131313']}
        >
            <Image
                source={icons.REFER_AND_EARN_WALLET}
                style={{
                    height: normalize(35, 'height'),
                    width: normalize(38)
                }}
                resizeMode={'contain'}
            />
            <View style={styles.balanceTextWrapper}>
                <Text style={styles.balanceText}>
                    Balance
                </Text>
                <Text style={styles.amountText}>
                    ${balance}
                </Text>
            </View>
        </LinearGradient>
    )
}

const FilterList = ({ filterSelected, updateFilter }) => {
    return (
        <View style={styles.chipWrapper}>
            <FlatList
                data={strings.SUGGESTIONS_SEARCH.slice(1)}
                horizontal
                style={styles.chipFlatlist}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { updateFilter(item) }}
                        >
                            <LinearGradient
                                colors={['#5B5B5B', '#232323']}
                                style={[styles.chip, { borderWidth: item === filterSelected ? 1.4 : 0 }]}
                            >
                                <Text style={[styles.chipText, { color: item === filterSelected ? colors.primary : '#C4C4C4' }]}>
                                    {item}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const Button = ({ type }) => {
   
    return(
        <View style={[styles.buttonBackground, { backgroundColor: type === 'added' ?  '#D0FFDB' : '#FFB8B8' }]}>
            <Text style={[styles.buttonText, { color: type === 'added' ? '#00B92B' : '#FF1B1B' }]}>
                +
            </Text>
        </View>
    )
}

const TransactionList = ({ data }) => {

    const renderTransaction = ({ item }) => {
        return(
            <View
                key={item.id}
                style={styles.renderTransactionWrapper}
            >
                <Button
                    type={item.type}
                />
                <View style={styles.renderTransactionTitleWrapper}>
                    <Text style={styles.titleText}>
                        {item.title}
                    </Text>
                    <Text style={styles.closingBalText}>
                        (Closing Bal. {' '}
                        <Text style={styles.totalBalanceText}>
                            ${item.totalBalance}
                        </Text>
                        )
                    </Text>
                </View>
                <View style={styles.amountDateWrapper}>
                    <Text style={[styles.amountAddedText, { color: item.type === 'added' ? '#5BFF7F' : '#FF3C3C' }]}>
                        {item.type === 'added' ? '+' : '-' }${item.amount}
                    </Text>
                    <Text style={styles.dateText}>
                        {item.date}
                    </Text>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.transactionWrapper}>
            <FlatList
                data={data}
                style={styles.transactionFlatlist}
                renderItem={renderTransaction}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                ListEmptyComponent={() => <MainEmptyComponent      emptyText={'No Search Results found...'}/>}
            />
        </View>
    )
}

const TransactionScreen = ({ navigation }) => {

    // const user = useSelector(state => state.user);
    const [filterSelected, setSelectedFilter] = useState('All');
    const [data, setData] = useState(transactions);
    const balance = transactions[0].totalBalance || 0;

    const updateFilter = (newFilter) => {
        setSelectedFilter(newFilter);
        if(newFilter === 'All'){
            setData([...transactions]);
            return;
        }
        setData(transactions.filter(item => item.category === newFilter));
    }

    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                title={'Transaction'}
                navigation={navigation}
                isNotificationVisible={false}
                isWalletVisible={false}
            />
            <Balance
                balance={balance}
            />
            {/* TODO: To be done */}
            <FilterList 
                filterSelected={filterSelected}
                updateFilter={updateFilter}
            /> 

            <TransactionList 
                data={data}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    buttonText: {
        fontSize: normalize(34),
        fontFamily: fonts.type.soraBold,
        position: 'absolute',
        zIndex: 1,
        top: normalize(-3),
        left: normalize(8),
        color: '#00B92B'
    },
    amountAddedText: {
        color: '#5BFF7F',
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraBold
    },
    amountDateWrapper: {
        flexDirection: 'column'
    },
    totalBalanceText: {
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraSemiBold
    },
    transactionWrapper: {
        flex: 1
    },
    titleText: {
        fontSize: fonts.size.font12,
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        marginBottom: normalize(5)
    },
    dateText: {
        color: '#979797',
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular,
        marginTop: normalize(5)
    },
    closingBalText: {
        color: '#979797',
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font10
    },
    renderTransactionTitleWrapper: {
        flexDirection: 'column',
        marginLeft: normalize(10),
        alignSelf: 'flex-end',
        flex: 1
    },
    renderTransactionWrapper: {
        flexDirection: 'row',
        marginVertical: normalize(15),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    balanceText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font10
    },
    buttonBackground: {
        backgroundColor: '#D0FFDB',
        borderRadius: normalize(5),
        width: normalize(35),
        height: normalize(35),
        alignItems: 'center'
    },
    transactionFlatlist: {
        width: '90%',
        flex:1,
        alignSelf: 'center'
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
        width: '96%',
        backgroundColor: colors.backgroundColor,
        height: normalize(45),
        alignSelf: 'center',
        marginVertical: normalize(20)
    },
    searchIcon: {
        width: 13,
        height: 13,
        tintColor: colors.bottomTabBgColor,
        alignSelf: 'center',
    },
    chipText: {
        fontSize: fonts.size.font10,
        padding: normalize(6),
        paddingHorizontal: normalize(10),
        fontFamily: fonts.type.soraMedium,
        color: '#C4C4C4'
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
    amountText: {
        color: colors.primary,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font22
    },
    balanceWrapper: {
        borderRadius: normalize(12),
        width: '91%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: normalize(92, 'height'),
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#3C3C3C',
        shadowColor: '#3C3C3C',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,
        elevation: 8
    },
    balanceTextWrapper: {
        flexDirection: 'column',
        marginLeft: normalize(10)
    }
})

export default TransactionScreen
