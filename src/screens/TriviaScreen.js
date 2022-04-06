import { useNavigation } from '@react-navigation/core'
import React from 'react-native'
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'

const TriviaScreen = (props) => {
    // const navigation = useNavigation();
    const { item } = props.route.params;
    return (
        <SafeAreaView nestedScrollEnabled={true} styles={styles.root}>
            <Header navigation={props.navigation}/>
        </SafeAreaView>
    )
}

const Header = ({navigation}) => {

    return (
        <Text>Header</Text>
    )
}

export default TriviaScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})