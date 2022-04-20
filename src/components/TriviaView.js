import React from 'react';
import { StyleSheet } from 'react-native';
import { 
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import normalize from 'react-native-normalize';
import { icons } from '../constants';
import { colors, fonts } from '../theme';

const FooterElement = ({ icon, text, isExpired, isCompleted }) => (
    <View style={styles.footerElementContainer}>
        <View style={[styles.footerElementImgContainer, isCompleted ? { backgroundColor: '#6B6B6B' } : isExpired && { backgroundColor: colors.darkBlue }]}>
            <Image source={icon} style={styles.footerElementImg} />
        </View>
        <Text style={styles.footerElementTxt}>{text}</Text>
    </View>
)


function TriviaView({ item, navigation }) {
    return (
        <TouchableOpacity style={styles.triviaCardContainer}>
            <View style={styles.triviaCardHeader}>
                <Text style={styles.triviaName}>{item.name}</Text>
                <Text style={styles.entryFee}>Entry Fee <Text style={{ fontFamily: fonts.type.soraMedium, color: colors.black }}>{item.isCompleted === true && ` ${item.entryFee || 10}` }</Text></Text>
            </View>
            <View style={[styles.triviaPaymentContainer, item.isExpired && { marginBottom: 40 }]}>
                <Text style={[styles.triviaPaymentText, item.isExpired && { color: colors.blue }]}>{item.winningAmount}</Text>
                {item.isCompleted ? 
                    <Text style={styles.youWonText}>You won <Text style={{ fontFamily: fonts.type.soraMedium, fontSize: fonts.size.font12, color: colors.black }}>{item.isCompleted === true && ` ${item.youWon || 10}`}</Text></Text> 
                    :
                    <TouchableOpacity style={styles.payButton}>
                        <Text style={styles.payButtonText}>{item.entryFee}</Text>
                    </TouchableOpacity>
                }
            </View>
            {
                !(item.isExpired) &&
                <View style={styles.gameStatusContainer}>
                    <Text style={styles.text}>{item.joined}</Text>
                    <Text style={styles.text}>{item.timeRemaining}</Text>
                    <Text style={styles.text}>{item.slotsLeft}</Text>
                </View>
            }
            <View
                style={
                    [styles.triviaCardFooter, item.isCompleted ? { backgroundColor: '#747474' } : item.isExpired && { backgroundColor: colors.blue }]
                }>
                <FooterElement icon={icons.SWORD} text={item.maxPlayers} isExpired={item.isExpired} isCompleted={item.isCompleted} />
                <FooterElement icon={icons.TROPHY} text={item.totalWinner} isExpired={item.isExpired} isCompleted={item.isCompleted} />
                <FooterElement icon={icons.PLAYS} text={item.plays} isExpired={item.isExpired} isCompleted={item.isCompleted} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    triviaCardContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10
    },
    triviaCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        backgroundColor: colors.greenDark,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: 10
    },
    gameStatusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 40
    },
    triviaPaymentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    triviaPaymentText: {
        fontSize: fonts.size.font14,
        lineHeight: 23,
        color: colors.greenDark,
        fontFamily: fonts.type.soraSemiBold
    },
    payButton: {
        backgroundColor: colors.yellow,
        padding: 4,
        paddingHorizontal: normalize(26),
        borderRadius: 8,
        width: normalize(82),
        alignItems: 'center'
    },
    payButtonText: {
        color: colors.darkGrey,
        fontSize: normalize(15),
        lineHeight: 19.64,
        fontFamily: fonts.type.soraSemiBold
    },
    triviaCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    entryFee: {
        color: colors.semiGrey,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    triviaName: {
        color: colors.darkGrey,
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold
    },
    footerElementContainer: { flexDirection: 'row' },
    footerElementImgContainer: {
        borderWidth: 2,
        borderColor: colors.lightGrey,
        borderRadius: 100,
        padding: 3,
        marginRight: 5,
        backgroundColor: colors.lightGreen
    },
    footerElementImg: { height: 12, width: 12 },
    footerElementTxt: { 
        color: colors.white, 
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    text: {
        color: '#3B3B3A',
        fntSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    youWonText: {
        color: '#384369',
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraLight
    }
})

export default TriviaView
