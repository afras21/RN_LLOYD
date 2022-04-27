import React from 'react';
import { TouchableOpacity } from 'react-native';
import { 
    SafeAreaView, 
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native';
import normalize from 'react-native-normalize';
import MainEmptyComponent from '../components/emptyComponent/MainEmptyComponent';
import MainHeader from '../components/header/MainHeader';
import Notification from '../components/notification/Notification';
import { icons } from '../constants';
import { alertColors, notifications } from '../mock/notifications';
import { fonts, metrics } from '../theme';
import colors from '../theme/colors';

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
            <Notification 
                item={item}
                index={index}
            />
        )
    }

    return(
        <FlatList
            data={data}
            style={styles.flatList}
            renderItem={renderNotification}
            ListEmptyComponent={<MainEmptyComponent emptyText={'No Search Results found...'} />}
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
    separator: {
        height: normalize(15, 'height'),
        backgroundColor: colors.black,
        width: '100%'
    },
    flatList: {
        backgroundColor: '#131313'
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
    flatListWrapper: {
        flex: 1
    }
})

export default NotificationScreen
