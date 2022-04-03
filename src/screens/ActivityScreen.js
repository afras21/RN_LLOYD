import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    Text 
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../theme';

const ActivityScreen = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 10
                }}
            >
                Activity Screen.
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
export default connect(mapStateToProps)(ActivityScreen)