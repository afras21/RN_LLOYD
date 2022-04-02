import React from 'react';
import { 
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import { colors, fonts, metrics } from '../../theme';
import Dot from './Dot';
import ActiveDot from './ActiveDot';
import Slide from './Slide';
import Swiper from 'react-native-swiper';
import { ON_BOARDING_IMAGE1, ON_BOARDING_IMAGE2 } from '../../constants/images';
import normalize from 'react-native-normalize';

function index({ }) {
    return (
            <Swiper
                height={'100%'}
                width={metrics.screenWidth}
                // style={styles.wrapper}
                showsButtons={false}
                dot={<Dot />}
                activeDot={<ActiveDot />}
            >
                <Slide 
                    src={ON_BOARDING_IMAGE1} 
                    heading={'Lorem ipsum dolore'} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet mi elit pharetra, dignissim magna gravida lacus, viverra.'}
                />
                <Slide 
                    src={ON_BOARDING_IMAGE2} 
                    heading={'Lorem ipsum dolore'} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet mi elit pharetra, dignissim magna gravida lacus, viverra.'}
                />
                {/* <View style={styles.slide}>
                    <Image
                        style={styles.slideImage}
                        resizeMode='contain'
                        source={ON_BOARDING_IMAGE1}
                    />
                    <Text
                        style={styles.slideHeaderText}
                    >
                        Lorem ipsum dolore
                    </Text>
                    <Text
                        style={styles.slideDescriptionText}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet mi elit pharetra, dignissim magna gravida lacus, viverra.
                    </Text>
                </View> */}
                
            </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // 
    },
    slide: {
        height: normalize(500),
        width: '100%',
        alignItems: 'center',
        marginVertical: normalize(10)
    },
    slideHeaderText:{
        textAlign: 'center',
        fontSize: fonts.size.font22,
        lineHeight: normalize(50),
        color: colors.white,
        marginVertical: normalize(5)
    },
    slideDescriptionText:{
        textAlign: 'center',
        fontSize: fonts.size.font14,
        lineHeight: normalize(18),
        color: colors.white,
        marginTop: normalize(10),
        width: '80%',
        alignSelf: 'center'
    },
    slideImage: {
        width: normalize(302),
        height: normalize(201),
        marginBottom: normalize(25)
    },
})

export default index
