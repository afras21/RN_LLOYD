import React, { useState } from 'react';
import { 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import { icons } from '../constants';
import { colors, fonts } from '../theme';
import normalize from 'react-native-normalize';
import { Animated } from 'react-native';


const ListAccordion = ({ 
    title, 
    content, 
    isFromMyReferralScreen = false, 
    item,
    index
}) => {

    const toggleListAccordion = () => {
        if(content || isFromMyReferralScreen === true){
            setIsOpen(preIsOpen => !preIsOpen);
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    if(isFromMyReferralScreen === true){
        return(
            <View style={[styles.listAccordionMyReferralContainer,{ backgroundColor: index % 2 === 0 ? '#1C1C1C' : '#272727' }]}>
                <View style={[styles.myReferralWrapper]}>
                    <Image
                        source={{ uri: item.avatar }}
                        style={styles.avatar}
                    />
                    <Text numberOfLines={1} style={styles.nameText}>
                        {item.name}
                    </Text>
                    <View style={styles.taskWrapper}>
                        <Text style={[styles.taskText, { backgroundColor: item.task >= 1 ? colors.activeGreen : colors.disabledGreen, color: item.task >= 1 ? colors.activeGreenText : colors.disabledGreenText }]}>
                            $1
                        </Text>
                        <Text style={[{ color: item.task >= 1 ? colors.activeGreen : colors.disabledGreen }]}>- - -</Text>
                        <Text style={[styles.taskText, { backgroundColor: item.task >= 2 ? colors.activeGreen : colors.disabledGreen, color: item.task >= 2 ? colors.activeGreenText : colors.disabledGreenText }]}>
                            $2
                        </Text>
                        <Text style={[{ color: item.task >= 3 ? colors.activeGreen : colors.disabledGreen }]}>- - -</Text>
                        <Text style={[styles.taskText, { backgroundColor: item.task >= 3 ? colors.activeGreen : colors.disabledGreen, color: item.task >= 3 ? colors.activeGreenText : colors.disabledGreenText }]}>
                            $3
                        </Text>
                    </View>
                    <Text style={styles.earnedText}>
                        {item.earned}
                    </Text>
                    <TouchableOpacity
                        style={styles.bottomArrowButton}
                        onPress={toggleListAccordion}
                    >
                        {
                            isOpen === true ?
                                <Image
                                    style={styles.bottomArrow}
                                    source={icons.TOP_ARROW}
                                    resizeMode={'contain'}
                                />
                            :
                                <Image
                                    style={styles.bottomArrow}
                                    source={icons.BOTTOM_ARROW}
                                    resizeMode={'contain'}
                                />
                        }
                       
                    </TouchableOpacity>

                </View>
                {
                    isOpen === true ?
                        <Animated.View style={styles.helperContainer}>
                            <View style={styles.helperWrapper}>
                                <Text style={[styles.taskText, { backgroundColor: item.task >= 1 ? colors.activeGreen : colors.disabledGreen, color: item.task >= 1 ? colors.activeGreenText : colors.disabledGreenText }]}>
                                    $1
                                </Text>
                                <Text style={styles.helperText}>
                                    Instal & Register
                                </Text>
                            </View>
                            <View style={[styles.helperLine, {backgroundColor: item.task >= 1 ? colors.activeGreen : colors.disabledGreen }]}/>
                            <View style={styles.helperWrapper}>
                                <Text style={[styles.taskText, { backgroundColor: item.task >= 2 ? colors.activeGreen : colors.disabledGreen, color: item.task >= 2 ? colors.activeGreenText : colors.disabledGreenText }]}>
                                    $2
                                </Text>
                                <Text style={styles.helperText}>
                                    First added cash
                                </Text>
                            </View>
                            <View style={[styles.helperLine, {backgroundColor: item.task >= 3 ? colors.activeGreen : colors.disabledGreen }]}/>
                            <View style={styles.helperWrapper}>
                                <Text style={[styles.taskText, { backgroundColor: item.task >= 3 ? colors.activeGreen : colors.disabledGreen, color: item.task >= 3 ? colors.activeGreenText : colors.disabledGreenText }]}>
                                    $3
                                </Text>
                                <Text style={styles.helperText}>
                                    Played 7 cash games
                                </Text>
                            </View>
                        </Animated.View>
                        :
                        <></>
                }
            </View>
        )
    }

    return(
        <TouchableOpacity 
            style={styles.listAccordionButton}
            onPress={toggleListAccordion}
        >
            <Text style={styles.listAccordionText}>
                {title}
            </Text>
            <Image
                source={icons.RIGHT_ARROW}
                style={styles.rightArrowIcon}
                resizeMode={'contain'}
            />  
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    listAccordionMyReferralContainer: {
        padding: normalize(10),
        width: '97%',
        alignSelf: 'center',
        borderRadius: normalize(7),
        marginVertical: normalize(5)
    },  
    myReferralWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center'
    },
    taskWrapper: {
        flexDirection: 'row',
        marginHorizontal: normalize(20)
    },
    helperLine: { 
        marginLeft: normalize(10), 
        borderWidth: 1, 
        borderStyle: 'dashed', 
        height: normalize(17, 'height'), 
        width: 1
    },
    helperText: {
        marginLeft: normalize(15),
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular
    },
    helperContainer: { 
        paddingHorizontal: normalize(6), 
        paddingVertical: normalize(15) 
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
    helperWrapper: {
        flexDirection: 'row'
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
    avatar: {
        width: normalize(30),
        height: normalize(25, 'height'),
        borderRadius: normalize(40),
        borderWidth: 3,
        borderColor: colors.white,
        marginRight: normalize(5)
    },
    nameText: {
        color: colors.white,
        fontSize: fonts.size.font10,
        fontFamily: fonts.type.soraRegular,
        marginLeft: normalize(10),
        flex: 1
    }, 
    bottomArrowButton: {
        padding: normalize(8),
        marginLeft: normalize(10)
    },
    bottomArrow: {
        height: normalize(15, 'height'),
        width: normalize(15, 'width')
    },
    
    listAccordionButton: {
        flexDirection: 'row',
        marginVertical: normalize(10),
        width: '99%',
        alignSelf: 'center',
        height: normalize(55),
        paddingHorizontal: normalize(15),
        borderRadius: normalize(15),
        backgroundColor: '#434D54',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  
    rightArrowIcon: {
        width: normalize(15),
        height: normalize(15)
    },
    listAccordionText: {
        color: '#C4C4C4',
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraSemiBold
    },
})

export default ListAccordion
