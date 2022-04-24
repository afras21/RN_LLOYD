import React, { useState } from 'react';
import { 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import { icons, strings } from '../constants';
import { colors, fonts } from '../theme';
import normalize from 'react-native-normalize';
import { Animated } from 'react-native';
import { FlatList } from 'react-native';


const getTaskColor = (currTask, totalTaskCompleted, type) => {
    if(currTask <= totalTaskCompleted){
        return type === 'text' ? colors.activeGreenText : colors.activeGreen;
    }
    return type === 'text' ? colors.disabledGreenText : colors.disabledGreen;
}

const renderTaskHorizontal = (item, totalTaskCompleted) => {
    return(
        <Text style={[styles.taskText, { backgroundColor: getTaskColor(item.id, totalTaskCompleted, 'bg'), color: getTaskColor(item.id, totalTaskCompleted, 'text') }]}>
                {item.task}
        </Text>
    )
}

const MyReferralTaskWrapper = ({ isOpen, totalTaskCompleted }) => {
    if(isOpen === true)
        return <></>;
    return (
        <View style={styles.taskWrapper}>
             <FlatList
                style={styles.taskWrapper}
                data={strings.MY_REFERRAL_TASKS}
                keyExtractor={item => item.task}
                horizontal={true}
                ItemSeparatorComponent={({leadingItem}) => <Text style={[{ marginTop: 2, color: getTaskColor(leadingItem.id - 1, totalTaskCompleted - 2, 'bg') }]}>- - -</Text>}
                renderItem={({ item }) => renderTaskHorizontal(item, totalTaskCompleted)}
            />
        </View>
    )
}

const ArrowButton = ({ isOpen }) => {
    if (isOpen === true) {
        return (
            <Image
                style={styles.bottomArrow}
                source={icons.TOP_ARROW}
                resizeMode={'contain'}
            />
        )
    }
    return (
        <Image
            style={styles.bottomArrow}
            source={icons.BOTTOM_ARROW}
            resizeMode={'contain'}
        />
    )
}

const renderTaskVertical = (item, totalTaskCompleted) => {
    return(
        <View style={styles.helperWrapper}>
            <Text style={[styles.taskText, { backgroundColor: getTaskColor(item.id, totalTaskCompleted, 'bg'), color: getTaskColor(item.id, totalTaskCompleted, 'text') }]}>
                {item.task}
            </Text>
            <Text style={styles.helperText}>
                {item.title}
            </Text>
        </View>
    )
}
 
const AccordionContent = ({ isOpen, totalTaskCompleted }) => {
    if(isOpen === false){
        return <></>
    }
    return(
        <Animated.View style={styles.helperContainer}>
            <FlatList
                style={styles.helperContainer}
                data={strings.MY_REFERRAL_TASKS}
                keyExtractor={item => item.task}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={({leadingItem}) => <View style={[styles.helperLine, {backgroundColor: getTaskColor(leadingItem.id - 1, totalTaskCompleted - 2, 'bg') }]} />}
                renderItem={({ item }) => renderTaskVertical(item, totalTaskCompleted)}
            />
            

        </Animated.View>
    )
}

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
                    <MyReferralTaskWrapper 
                        isOpen={isOpen}
                        totalTaskCompleted={item.task}
                    />
                    
                    <Text style={styles.earnedText}>
                        {item.earned}
                    </Text>
                    <TouchableOpacity
                        style={styles.bottomArrowButton}
                        onPress={toggleListAccordion}
                    >
                        <ArrowButton isOpen={isOpen} />
                    </TouchableOpacity>

                </View>

                <AccordionContent 
                    isOpen={isOpen} 
                    totalTaskCompleted={item.task}
                />
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
        // flexDirection: 'row',
        width: normalize(110),
        marginHorizontal: normalize(10)
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
        paddingVertical: normalize(10),
        alignSelf: 'flex-start'
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
