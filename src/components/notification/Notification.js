import { Toast } from 'native-base';
import React, { useState } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import normalize from 'react-native-normalize';
import { icons } from '../../constants';
import { alertColors } from '../../mock/notifications';
import { colors, fonts } from '../../theme';


const getDescription = (str, isOpen) => {
    if(isOpen === true){
        return str;
    }
    if(str.length >= 32){
        return `${str.substring(0, 32)}...`
    }
    return str;
}

const Button = ({ title, onPress, type }) => {
    return(
        <TouchableOpacity
            onPress={onPress}
            style={type === 'accept' ? styles.acceptButton : styles.denyButton}
        >
            <Text style={type === 'accept' ? styles.acceptText : styles.denyText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const Notification = ({ item, index }) => {

    const [state, setState] = useState({...item, isOpen: false});

    const notificationHandler = () => {
        setState({
            ...state,
            isOpen: true
        });
    }

    const denyHandler = () => {
        setState({
            ...state,
            isNew: false
        });
    }

    const acceptHandler = () => {
        setState({
            ...state,
            isNew: false
        });
    }

    return (
        <TouchableOpacity
            style={styles.notificationWrapper}
            onPress={notificationHandler}
        >
            <View
                style={[
                    styles.alertWrapper,
                    {
                        backgroundColor: alertColors[index % alertColors.length],
                    }
                ]}
            >
                {
                    state.isNew === true && <View style={[styles.alert, styles.alertInNotification]} />
                }

                <Image
                    source={icons.ALERT}
                    style={styles.alertIcon}
                    resizeMode={'center'}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>
                    {state.title}
                </Text>
                <Text style={styles.descriptionText}>
                    {getDescription(state.description, state.isOpen)}
                </Text>
                {
                    state.isNew && state.isOpen && 
                    <View style={styles.buttonWrapper}>
                        <Button
                            title={'Deny'}
                            type={'deny'}
                            onPress={denyHandler}
                        />
                        <Button
                            title={'Accept'}
                            type={'accept'}
                            onPress={acceptHandler}
                        />
                    </View>
                }
                
            </View>
            <Text style={styles.timeText}>
                {state.time}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    descriptionText: {
        fontFamily: fonts.type.soraMedium,
        fontSize: fonts.size.font12,
        color: '#8C8B9C',
        width: normalize(270)
    },
    buttonWrapper:{
        marginTop: normalize(15),
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },  
    denyButton: {
        width: normalize(125),
        height: normalize(30, 'height'),
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: normalize(5),
        justifyContent: 'center'
    },
    denyText: {
        color: colors.white,
        textAlign: 'center',
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14
    },
    acceptText: {
        color: '#131313',
        textAlign: 'center',
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14
    },
    acceptButton: {
        backgroundColor: colors.white,
        width: normalize(125),
        height: normalize(30, 'height'),
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: normalize(5),
        justifyContent: 'center'
    },
    alertInNotification: { 
        position: 'absolute', 
        top: normalize(-2), 
        right: normalize(-5) 
    },
    notificationWrapper: {
        width: '96%',
        alignSelf: 'center',
        borderRadius: normalize(5),
        backgroundColor: '#26262A',
        marginVertical: normalize(8),
        flexDirection: 'row',
        padding: normalize(10)
    },
    alertWrapper: {
        width: normalize(49),
        height: normalize(46, 'height'),
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: normalize(5),
        marginRight: normalize(10)
    },
    alertIcon: {
        flex: .5,
        alignSelf: 'center'
    },
    titleWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    titleText: {
        fontFamily: fonts.type.soraMedium,
        fontSize: fonts.size.font12,
        color: colors.white
    },
    alert: {
        backgroundColor: colors.alertRed,
        width: normalize(15),
        height: normalize(15),
        borderWidth: 2.5,
        borderRadius: normalize(30),
        borderColor: colors.white
    },
    timeText: {
        fontFamily: fonts.type.soraLight,
        fontSize: fonts.size.font10,
        color: '#8C8B9C',
        opacity: .7,
        position: 'absolute',
        top: normalize(5),
        zIndex: 1,
        right: normalize(10)
    },
})

export default Notification
