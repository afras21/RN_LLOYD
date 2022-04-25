import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native';
import normalize from 'react-native-normalize';
import MainHeader from '../components/header/MainHeader';
import { icons } from '../constants';
import { alertColors, notifications } from '../mock/notifications';
import { fonts, metrics } from '../theme';
import colors from '../theme/colors';

const getDescription = (str) => {
    if(str.length >= 32){
        return `${str.substring(0, 32)}...`
    }
    return str;
}

const ifNewNotificationIsAvailable = (data) => {
    for(let i = 0; i < data.length; i++){
        if(data[i].isNew === true){
            return true;
        }
    }
    return false
}

const Notifications = ({ data }) => {

    const renderNotification = ({ item, index }) => {
        return(
            <View style={styles.notificationWrapper}>
                <View
                    style={[
                        styles.alertWrapper,
                        {
                            backgroundColor: alertColors[index % alertColors.length],
                        }
                    ]}
                >
                    {
                        item.isNew === true && <View style={[styles.alert, styles.alertInNotification]} />
                    }
                    
                    <Image
                        source={icons.ALERT}
                        style={styles.alertIcon}
                        resizeMode={'center'}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>
                        {item.title}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {getDescription(item.description)}
                    </Text>
                </View>
                <Text style={styles.timeText}>
                    {item.time}
                </Text>
            </View>
        )
    }

    return(
        <FlatList
            data={data}
            style={styles.flatList}
            renderItem={renderNotification}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<View style={styles.flatListSeparator} />}
            ListFooterComponent={<View style={styles.flatListSeparator} />}
        />

    )
}

const UnReadNotification = ({ isNewNotificationExist }) => {

    return (
        <View
            style={{
                backgroundColor: '#131313',
                width: '100%',
                height: normalize(34),
                marginBottom: normalize(15),
                justifyContent: 'center'
            }}
        >
            {
                isNewNotificationExist === true
                    ?
                    <View style={styles.unReadWrapper}>
                        <View style={styles.alert} />
                        <Text style={styles.unReadText}>
                            You have unread notifications.
                        </Text>
                    </View>
                    :
                    <></>
            }
        </View>
    )
}   

const NotificationScreen = ({ navigation }) => {

    const isNewNotificationExist = ifNewNotificationIsAvailable(notifications);
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader
                title={'Notification'}
                navigation={navigation}
                isNotificationVisible={false}
                isWalletVisible={false}
                marginBottom={0}
            />
                <UnReadNotification 
                    isNewNotificationExist={isNewNotificationExist}
                />
                <View style={styles.separator}  />
                <View style={styles.flatListWrapper}> 
                    <Notifications
                        data={notifications}
                    />
                </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313'
    },
    flatListSeparator: { 
        height: normalize(10) 
    },
    alertInNotification: { 
        position: 'absolute', 
        top: normalize(-2), 
        right: normalize(-5) 
    },
    separator: {
        height: normalize(15, 'height'),
        backgroundColor: colors.black,
        width: '100%'
    },
    flatList: {
        backgroundColor: '#131313'
    },
    descriptionText: {
        fontFamily: fonts.type.soraMedium,
        fontSize: fonts.size.font12,
        color: '#8C8B9C'
    },
    alert: {
        backgroundColor: colors.alertRed,
        width: normalize(15),
        height: normalize(15),
        borderWidth: 2.5,
        borderRadius: normalize(30),
        borderColor: colors.white
    },
    unReadText: {
        color: colors.white,
        marginLeft: normalize(10),
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular
    },
    unReadWrapper: {
        flexDirection: 'row',
        width: '93%',
        alignSelf: 'center',
        marginTop: normalize(8),
        alignItems: 'center'
    },
    timeText: {
        fontFamily: fonts.type.soraLight,
        fontSize: fonts.size.font10,
        color: '#8C8B9C',
        opacity: .6
    },
    flatListWrapper: {
        flex: 1
    },
    titleText: {
        fontFamily: fonts.type.soraMedium,
        fontSize: fonts.size.font12,
        color: colors.white
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
    titleWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
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
    }
})

export default NotificationScreen
