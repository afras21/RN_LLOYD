import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import normalize from 'react-native-normalize';
import { rgbaColor } from 'react-native-reanimated/src/reanimated2/Colors';
import { strings } from '../../constants';
import { colors, fonts, metrics } from '../../theme';

const Slider2 = ({ data, navigation }) => {
    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity
                key={item.id}
                style={styles.renderItemWrapper}
                onPress={() => handleSelection(item, navigation)}
            >
                    <Image 
                        style={{ flex:1 }} 
                        borderRadius={15}
                        blurRadius={6}
                        source={{ uri: item.image }} 
                        resizeMode={'cover'} 
                    />
                    <View style={styles.absolute}>
                        <View style={styles.innerWrapper}>
                            <Text style={styles.title}>{item?.name}</Text>
                            <Text style={styles.plays}>{item?.plays} Plays</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>
                    {strings.SLIDER2_HEADING}
                </Text>
                <TouchableOpacity>
                    <Text style={styles.viewMoreText}>{strings.SLIDER2_VIEW_MORE}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            />
        </View>
    )
}



const handleSelection = (item, navigation) => {
    alert(JSON.stringify(navigation))
    // navigation.navigate('TriviaScreen', { item, navigation })
}

const styles = StyleSheet.create({
    container: {
        marginTop: -5,
        marginBottom: normalize(10),
        width: '92%',
        alignSelf: 'center'
    },
    itemSeparator: {
        width: normalize(10)
    },
    absolute: {
        borderRadius: 15,
        width: '91.5%', 
        height: normalize(55),
        position: 'absolute', 
        zIndex: 1, 
        backgroundColor: rgbaColor(1,0,0,0.7),
        left: 15,
        right: 15,
        bottom: 10
    },
    renderItemWrapper: {
        height: normalize(110),
        width: metrics.screenWidth - 100
    },
    headingWrapper: {
        flexDirection: 'row',
        marginBottom: normalize(15),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        color: colors.white,
        fontSize: fonts.size.font14
    },
    viewMoreText: {
        fontSize: fonts.size.font12
    },
    innerWrapper: {
        flex: 1,
        paddingHorizontal: normalize(15),
        paddingVertical: normalize(10)
    },
    title: { 
        color: colors.white, 
        fontWeight: '800', 
        fontSize: fonts.size.font14 
    },
    plays: { 
        color: colors.progressGray, 
        fontSize: fonts.size.font10, 
        fontWeight: fonts.weight.low 
    }
})

export default Slider2
