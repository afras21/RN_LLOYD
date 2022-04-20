import React, { useState } from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    View,
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar,
    Text
} from 'react-native';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';
import TriviaView from '../components/TriviaView';
import { icons } from '../constants';
import { colors, fonts } from '../theme';
import { completed, live } from '../mock/activity';
import MainHeader from '../components/header/MainHeader';


const ListContainer = ({ data, navigation }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <TriviaView item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
                ListFooterComponent={ () => <View style={{ height: normalize(20) }} />}
            />
        </View>
    )
}

const ActivityScreen = ({ navigation }) => {

    const [selectedActivity, setSelectedActivity] = useState('live')

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor={colors.bottomTabBgColor} />
            <MainHeader title={'Activity'} navigation={navigation} />
            <View style={styles.selectedActivityContainer}>
                <TouchableOpacity
                    style={[
                        styles.activityHeader,
                        selectedActivity === 'live' && { backgroundColor: '#3E4970' }
                    ]}
                    disabled={selectedActivity === 'live'}
                    onPress={() => setSelectedActivity('live')}
                >
                    <Text
                        style={[
                            styles.activityHeaderText,
                            {
                                color: selectedActivity === 'live' ? colors.white : '#7E7E7E'
                            }
                        ]}
                    >
                        Live
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.activityHeader,
                        selectedActivity === 'completed' && { backgroundColor: '#3E4970' }
                    ]}
                    disabled={selectedActivity === 'completed'}
                    onPress={() => setSelectedActivity('completed')}
                >
                    <Text
                        style={[
                            styles.activityHeaderText,
                            {
                                color: selectedActivity === 'completed' ? colors.white : '#7E7E7E'
                            }
                        ]}
                    >
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>
            <ListContainer data={ selectedActivity === 'live' ? live : completed } navigation={navigation} />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    listContainer: {
        width: '92%',
        alignSelf: 'center',
        marginTop: normalize(20),
        flex: 1
    },
    selectedActivityContainer: {
        height: normalize(50),
        backgroundColor: '#8F8F8F33',
        borderRadius: normalize(13),
        padding: normalize(7),
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center'
    },
    activityHeader: {
        height: '100%',
        width: '50%',
        borderRadius: normalize(13),
        justifyContent: 'center'
    },
    activityHeaderText: {
        fontFamily: fonts.type.soraSemiBold,
        fontSize: fonts.size.font14,
        textAlign: 'center'
    }
})

const mapStateToProps = state => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(ActivityScreen)
