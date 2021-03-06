import { PixelRatio } from 'react-native'; 
import metrics from './metrics';
const { screenWidth } = metrics;

const calculateFontSize = (size) => {
    return Math.round(PixelRatio.roundToNearestPixel(screenWidth * (size / 365)));
}

const size = {
    font6: calculateFontSize(6),
    font8: calculateFontSize(8),
    font10: calculateFontSize(10),
    font12: calculateFontSize(12),
    font14: calculateFontSize(14),
    font16: calculateFontSize(16),
    font18: calculateFontSize(18),
    font20: calculateFontSize(20),
    font22: calculateFontSize(22),
    font24: calculateFontSize(24)
}

const weight = {
    full: '800',
    semi: '700',
    low: '200', 
    bold: 'bold',
    normal: '400'
}

const type = {
    soraMedium: 'Sora-Medium',
    soraRegular: 'Sora-Regular',
    soraBold: 'Sora-Bold',
    soraLight: 'Sora-Light',
    soraSemiBold: 'Sora-SemiBold'
}

export default {
    size,
    weight,
    type
}