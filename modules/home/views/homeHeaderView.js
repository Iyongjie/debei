import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Button,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import IPHONE_X_LATER from './../../../utils/device';

const {width,height} = Dimensions.get('window')
var homeImagePach = './../../../resources/home/homeHeader';

class HomeHeaderView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('./../../../resources/home/homeHeader/homeHeaderBg.png')}>
                    <View style={styles.headerTopView}>
                        <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5} style=  {styles.signBtn}>
                            <View>
                                <Text>签到</Text>
                            </View>
                        </TouchableOpacity> 
                        <TouchableOpacity style=  {styles.messageBtn} activeOpacity={0.2} focusedOpacity={0.5}>
                            <View>
                                <Image source={require('./../../../resources/home/homeHeader/messageicon.png')}>
                                </Image>
                            </View>
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.secondView}>
                        <View style={styles.weatherView}>
                            <Text style={styles.tempture}>-2'C</Text>
                            <View style={flexDirection='row'}>
                                <Image style={styles.locationImg} source={require('./../../../resources/home/homeHeader/location_icon.png')}></Image>
                                <Text style={styles.area}>北京市</Text>
                            </View>
                        </View>
                        <Image style={styles.dataValue} source={require('./../../../resources/home/homeHeader/dataValue.png')}></Image>
                    </View>
                    <View style={styles.noticeView}>
                        <Image style={styles.noticeImage} source={require('./../../../resources/home/homeHeader/noticeImageView.png')}></Image>
                        <Text style={styles.noticeText}>用户12345678901开通数据资产账户</Text>
                    </View>
                </Image>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 400,
        width: width,
    },
    backgroundImage:{
        flex: 1,
        width:width,
        height:400,
        paddingTop:IPHONE_X_LATER ? 20: 10,
    },
    headerTopView: {
        flexDirection: 'row',
        width: width,
        height: 50, 
        justifyContent: 'space-between'
    },
    signBtn: {
        borderBottomRightRadius: 5,
        width: 50,
        height: 30,
    },
    messageBtn: {
        backgroundColor: 'rgba(1,1,1,0)',
        width:30,
        height:30,
        marginRight: 10
    },
    secondView: {
        flexDirection: 'row',
        width: width,
        height: 50
    },
    weatherView: {
        width: 100,
        height: 40
    },
    tempture: {
        backgroundColor: 'rgba(1,1,1,0)',
        width: 100,
        height: 25
    },
    locationImg: {
        width: 11,
        height:14
    },
    area: {
        backgroundColor: 'rgba(1,1,1,0)',
        width: 100,
        height: 40
    },
    dataValue: {
        width: 87,
        height: 30
    },
    noticeView: {
        flexDirection: 'row',
        width: width,
        height: 34,
    },
    noticeImage: {
        marginLeft: 10,
        width: 18,
        height: 18
    },
    noticeText: {
        backgroundColor: 'rgba(1,1,1,0)',
        marginLeft: 10,
        width: width - 100,
        height: 34
    }
})
 
module.exports = HomeHeaderView;