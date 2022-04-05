import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import Carousel, { Pagination } from 'react-native-snap-carousel';
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
                            <Image
                                source={item.src}
                                style={styles.buttonImage}
                                // resizeMode={'contain'}
                                borderRadius={10}
                            />
                        </TouchableOpacity>
                    )
                }}
                activeSlideAlignment={'center'}
                layout={'default'}
                sliderWidth={metrics.screenWidth}
                itemWidth={metrics.screenWidth - 120}
                loop={true}
                onSnapToItem={changeIndex}
            />
            <Pagination
                dotsLength={3}
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
        width: '100%'
    },
    dotStyle: {
        width: 24,
        height: 7,
        borderRadius: 5,
        marginHorizontal: .1,
        backgroundColor: colors.white,
    },
    inActiveDotStyle: {
        backgroundColor: colors.progressGray,
        marginHorizontal: 0,
        width: 14
    }
})

export default Slider1
