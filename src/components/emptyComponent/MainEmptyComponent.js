import React from 'react';
import { 
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import normalize from 'react-native-normalize';
import { images } from '../../constants';
import { colors, fonts } from '../../theme';

const MainEmptyComponent = ({ emptyText }) => {
    return (
        <View>
            <Image
                source={images.NO_RESULT_FOUND}
                style={styles.noResultFound}
                resizeMode={'contain'}
            />
            <Text style={styles.emptyText}>
                {emptyText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    noResultFound: {
        width: '90%',
        alignSelf: 'center',
        height: normalize(150, 'height'),
        marginVertical: normalize(20)
    },
    emptyText: {
        color: colors.white,
        fontSize: fonts.size.font20,
        fontFamily: fonts.type.soraBold,
        textAlign: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: normalize(10)
    }
})

export default MainEmptyComponent
