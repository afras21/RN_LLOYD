import React from 'react';
import { 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { icons } from '../constants';
import { fonts } from '../theme';
import normalize from 'react-native-normalize';
const ListAccordion = ({ title, content }) => {
    return(
        <TouchableOpacity style={styles.listAccordionButton}>
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
