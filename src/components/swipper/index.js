import React from 'react';
import { metrics } from '../../theme';
import Dot from './Dot';
import ActiveDot from './ActiveDot';
import Slide from './Slide';
import Swiper from 'react-native-swiper';
import { images } from '../../constants';

const index = () => {
    return (
            <Swiper
                height={'100%'}
                width={metrics.screenWidth}
                showsButtons={false}
                dot={<Dot />}
                activeDot={<ActiveDot />}
            >
                <Slide 
                    src={images.ON_BOARDING_IMAGE1} 
                    heading={'Lorem ipsum dolore'} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet mi elit pharetra, dignissim magna gravida lacus, viverra.'}
                />
                <Slide 
                    src={images.ON_BOARDING_IMAGE2} 
                    heading={'Lorem ipsum dolore'} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet mi elit pharetra, dignissim magna gravida lacus, viverra.'}
                />
            </Swiper>
    )
}

export default index
