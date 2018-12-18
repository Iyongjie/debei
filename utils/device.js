import {
    Platform,
    Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IPHONE_X_W = 375;
const IPHONE_X_H = 812;
const IPHONE_R_W = 414;
const IPHONE_R_H = 896;
const IPHONE_MAX_W = 414;
const IPHONE_MAX_H = 896;


export function IS_X_LATER() {
    if(Platform.OS === 'ios' && 
        ((SCREEN_WIDTH === IPHONE_X_W) && (SCREEN_HEIGHT === IPHONE_X_H))||
        ((SCREEN_WIDTH === IPHONE_R_W) && (SCREEN_HEIGHT === IPHONE_R_H))||
        ((SCREEN_WIDTH === IPHONE_MAX_W) && (SCREEN_HEIGHT === IPHONE_MAXX_H))){
            return true;
    }else{
        return false;
    }
} 