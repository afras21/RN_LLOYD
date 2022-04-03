import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    Text 
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../theme';

const HomeScreen = ({ user }) => {
    return (
        <SafeAreaView style={styles.container} >
            <Text>
                Home Screen.
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    }
})
const mapStateToProps = state => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(HomeScreen)