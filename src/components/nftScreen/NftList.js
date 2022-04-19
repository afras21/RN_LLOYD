import React from 'react';
import { StyleSheet } from 'react-native';
import {
    View,
    FlatList,
    Image,
    Text
} from 'react-native';
import { colors, fonts } from '../../theme';
import normalize from 'react-native-normalize';

function NftList({ data }) {

    const renderItem = ({ item }) => {
        return(
            <View
                key={item.id}
                style={styles.itemWrapper}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    // resizeMode={'contain'}
                />
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.bottomSpace} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '96%',
        alignSelf: 'center'
    },
    text: {
        color: colors.white,
        width: '75%',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: normalize(5),
        fontFamily: fonts.type.soraRegular,
        fontSize: fonts.size.font12
    },
    bottomSpace: {
        height: normalize(20)
    },
    itemSeparator: {
        height: normalize(10)
    },
    list: {
        justifyContent: 'space-between'
    },
    image: {
        flex: 1
    },
    itemWrapper: {
        height: normalize(225),
        width: '50%',
        marginBottom: normalize(15)
    }
})

export default NftList
