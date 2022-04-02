import React from 'react';
import { 
    View,
    StyleSheet
} from 'react-native';

function Dot() {
    return (
        <View style={styles.dot} />
    )
}

const styles = StyleSheet.create({
    dot:{
        backgroundColor: '#727272', 
        width: 50, 
        height: 8, 
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3
    }
})

export default Dot
