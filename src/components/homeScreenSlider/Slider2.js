import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    ImageBackground
} from 'react-native';
import normalize from 'react-native-normalize';
import { rgbaColor } from 'react-native-reanimated/src/reanimated2/Colors';
import { strings } from '../../constants';
import { colors, fonts, metrics } from '../../theme';

const Slider2 = ({ data, handleTrendTriviaSelection }) => {
    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity
                key={item.id}
                style={styles.renderItemWrapper}
                onPress={() => handleTrendTriviaSelection(item)}
            >
                    <Image 
                        style={{ flex:1 }} 
                        borderRadius={12}
                        blurRadius={6}
                        source={{ uri: item.image }} 
                        resizeMode={'cover'} 
                    />
                    <View style={styles.absolute}>
                        <ImageBackground 
                            imageStyle={styles.imageStyleInBg} 
                            blurRadius={120} 
                            source={{ uri: item.image }}  
                            style={styles.innerWrapper}
                        >
                        </ImageBackground>
                        <View style={styles.content}>
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

const styles = StyleSheet.create({
    container: {
        marginTop: -5,
        marginBottom: normalize(10),
        width: '92%',
        alignSelf: 'center'
    },
    imageStyleInBg: {
        backgroundColor: colors.black
    },
    content: {
        position: 'absolute', 
        left: normalize(10), 
        top: normalize(6)
    },
    itemSeparator: {
        width: normalize(10)
    },
    absolute: {
        borderRadius: 12,
        width: '91.5%', 
        height: normalize(55),
        position: 'absolute', 
        zIndex: 1, 
        backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
        left: 15,
        right: 15,
        bottom: 10,
        overflow: 'hidden'
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
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraMedium
    },
    viewMoreText: {
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.soraRegular
    },
    innerWrapper: {
        flex: 1,
        paddingHorizontal: normalize(15),
        paddingVertical: normalize(5),
        opacity: .5,
        backgroundColor: 'black'
    
    },
    title: { 
        color: colors.white, 
        fontSize: fonts.size.font14,
        fontFamily: fonts.type.soraMedium,
        opacity: 1
    },
    plays: { 
        color:  rgbaColor(255, 255, 255, 0.6), 
        fontSize: fonts.size.font10, 
        fontFamily: fonts.type.soraLight
    }
})

export default Slider2
