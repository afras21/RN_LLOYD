import React from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, ImageBackground, Image, ScrollView, FlatList } from 'react-native'
import normalize from 'react-native-normalize';
import { icons } from '../constants';
import { data } from '../mock/basketBallTrivia';
import { colors } from '../theme';

const TriviaScreen = (props) => {
    const { item } = props;
    const {plays, image, name} = item || {};
    return (
        <SafeAreaView nestedScrollEnabled={true} styles={styles.root}>
            <Header bg={image} plays={plays} name={name}/>
            <ListContainer data={data}/>
        </SafeAreaView>
    )
}

const Header = ({ bg, plays, name }) => {
    const imgSource = { uri: bg }

    return (
        <ImageBackground source={imgSource} resizeMode="cover" style={styles.image}>
            <View style={styles.headerContainer}>
                <View style={styles.backContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.backButtonStyle} onPress={() => alert('clicked')}>
                            <Image source={icons.BACK_BUTTON} style={styles.backButtonIconStyles} />
                        </TouchableOpacity>
                        <Text style={styles.triviNameStyle}>{name}</Text>
                    </View>

                    <Wallet/>
                </View>
                <Text style={styles.playStyles}>{`${plays} Plays`}</Text>
            </View>
        </ImageBackground>
    )
}

const ListContainer = ({ data }) => {
    const renderItem = ({item}) => (
       <View style={{backgroundColor: colors.white, borderRadius: 10, marginBottom: 20, padding: 10}}>
           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                <Text style={{color: colors.darkGrey, fontWeight: '600', fontSize: 14, lineHeight: 24}}>{item.name}</Text>
                <Text>Entry Fee</Text>
           </View>
           <View style={[{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}, item.isExpired && {marginBottom: 40}]}>
                <Text>{item.winningAmount}</Text>
                <TouchableOpacity style={{backgroundColor: colors.yellow, padding: 5, paddingHorizontal: 40, borderRadius: 10}}>
                    <Text style={{color: colors.darkGrey, fontWeight: '600', fontSize: 14, lineHeight: 17.64}}>{item.entryFee}</Text>
                </TouchableOpacity>
           </View>
            {
                !(item.isExpired) &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 40 }}>
                    <Text>{item.joined}</Text>
                    <Text>{item.timeRemaining}</Text>
                    <Text>{item.slotsLeft}</Text>
                </View>
            }
            <View
                style={
                    [{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                        backgroundColor: colors.greenDark,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        position: 'absolute', bottom: 0, left: 0, right: 0, padding: 10
                    }, item.isExpired && {backgroundColor: colors.blue}]
                }>
                <Text style={{ color: colors.white }}>{item.maxPlayers}</Text>
                <Text style={{ color: colors.white }}>{item.totalWinner}</Text>
                <Text style={{ color: colors.white }}>{item.plays}</Text>
            </View>
       </View>
    )
    return (
        <View style={{ left: 0, right: 0, backgroundColor: colors.footer, padding: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
            <FlatList
                data={data} 
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}


const Wallet = () => (
    <View style={styles.walletWrapper}>
        <Image
            source={icons.WALLET}
            style={styles.walletImage}
            resizeMode='contain'
        />
        <Text style={styles.walletAmount}>
            500
        </Text>
    </View>
)

export default TriviaScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    headerContainer: {
        flex: 1, 
        backgroundColor: 'rgba(52, 52, 52, 0.6)', 
        padding: 20, 
        paddingVertical: 40
    },
    backContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButtonIconStyles: { 
        height: 20, 
        width: 15, 
        marginRight: 20 
    },
    backButtonStyle: {
        // backgroundColor: '#c2c2c2',
    },
    triviNameStyle: {
        color: colors.white, 
        fontWeight: '800', 
        fontSize: 20, 
        lineHeight: 20.5
    },
    playStyles: {
        color: colors.white, 
        fontWeight: '400', 
        fontSize: 14, 
        lineHeight: 18, 
        opacity: 0.8, 
        marginLeft: 35, 
        marginTop: 5
    },
    walletWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    walletImage: {
        width: normalize(23),
        height: normalize(23)
    },
    walletAmount: {
        marginLeft: normalize(10),
        fontSize: normalize(15),
        color: colors.white
    },
})