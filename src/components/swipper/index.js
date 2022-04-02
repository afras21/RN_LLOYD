import React from 'react';
import { metrics } from '../../theme';
import Dot from './Dot';
import ActiveDot from './ActiveDot';
import Slide from './Slide';
import Swiper from 'react-native-swiper';
import { images, strings } from '../../constants';

const index = () => {
    return (
            <Swiper
                height={strings.SWIPER_HEIGHT}
                width={metrics.screenWidth}
                showsButtons={false}
                dot={<Dot />}
                activeDot={<ActiveDot />}
            >
                <Slide 
                    src={images.ON_BOARDING_IMAGE1} 
                    heading={strings.ON_BOARDING_HEADING1} 
                    description={strings.ON_BOARDING_DESCRIPTION1}
                />
                <Slide 
                    src={images.ON_BOARDING_IMAGE2} 
                    heading={strings.ON_BOARDING_HEADING2} 
                    description={strings.ON_BOARDING_DESCRIPTION2}
                />
            </Swiper>
    )
}

export default index
