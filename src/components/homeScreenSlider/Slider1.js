import React from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { strings } from '../../constants';
import { colors, metrics } from '../../theme';


let carousel = null;

const Slider1 = ({ data, activeIndex, changeIndex }) => {
    return (
        <View style={styles.wrapper}>
            <Carousel
                ref={(c) => { carousel = c; }}
                data={data}
                renderItem={({ index, item }) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                        >
                            {/* TODO: Image Fit Issue */}
                            {/* <Image
                                source={item.src}
                                style={styles.buttonImage}
                                // resizeMode={'stretch'}
                                borderRadius={10}
                            /> */}
                            <View style={styles.buttonImage}>
                                <ImageBackground
                                    source={item.src}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                }}
                activeSlideAlignment={'center'}
                layout={'default'}
                sliderWidth={metrics.screenWidth - 0}
                itemWidth={metrics.screenWidth - 110}
                loop={true}
                onSnapToItem={changeIndex}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
                carouselRef={carousel}
                dotStyle={styles.dotStyle}
                tappableDots={true}
                inactiveDotStyle={styles.inActiveDotStyle}
                inactiveDotOpacity={.7}
                inactiveDotScale={1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop: normalize(15)
    },
    button: {
        flex: 1,
    },
    buttonImage: {
        height: normalize(100),
        width: '100%',
        borderRadius:15,
        overflow: 'hidden'
    },
    dotStyle: {
        width: 30,
        height: 7,
        borderRadius: 5,
        marginHorizontal: -5,
        backgroundColor: colors.white,
        marginTop: -normalize(7)
    },
    inActiveDotStyle: {
        backgroundColor: colors.progressGray,
        marginHorizontal: -5,
        width: 14
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default Slider1
