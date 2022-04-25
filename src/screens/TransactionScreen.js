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
        <View
            style={{
                backgroundColor: '#D0FFDB',
                borderRadius: normalize(5),
                padding: normalize(10),
                width: normalize(34),
                height: normalize(34, 'height'),
                alignItems: 'center'
            }}
        >
            <Text 
                style={{
                    fontSize: normalize(34),
                    fontFamily: fonts.type.soraBold,
                    position: 'absolute',
                    zIndex: 1,
                    top: -8,
                    left: normalize(7),
                    color: '#00B92B'
                }}
            >
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
                style={{
                    padding: normalize(10)
                }}
            >
                <Button />
                <View
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <Text>
                        {item.title}
                    </Text>
                    <Text>
                        Closing Bal
                        <Text>{item.totalBalance}</Text>
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <Text>
                        +$5.00
                    </Text>
                    <Text>
                        +$5.00
                    </Text>
                </View>
            </View>
        )
    }

    return(
        <View>
            <FlatList
                data={data}
                renderItem={renderTransaction}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const TransactionScreen = ({ navigation }) => {

    const user = useSelector(state => state.user);
    const [filterSelected, setSelectedFilter] = useState('All');

    const updateFilter = (newFilter) => {
        setSelectedFilter(newFilter)
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
                balance={user.walletAmount}
            />
            {/* TODO: To be done */}
            {/* <FilterList 
                filterSelected={filterSelected}
                updateFilter={updateFilter}
            /> */}

            {/* <TransactionList 
            
                data={transactions}
            /> */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    balanceText: {
        color: colors.white,
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font10
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
