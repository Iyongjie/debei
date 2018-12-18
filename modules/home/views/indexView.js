import React from 'react';
import {
    WebView,
    View,
    Dimensions
} from 'react-native';

var indexUrl = 'https://passport.muheda.com/api/debei/score/user/weight/yibeiLine.html';

const SCREEN_WIDTH=Dimensions.get('window').width;

class IndexView extends React.Component{
    render(){
        return (
            <View style={{flex:1,width:SCREEN_WIDTH,height:396}}>
                <WebView 
                    source={{uri:indexUrl}}
                    style={{width:'100%',height:'100%'}}>
                </WebView>
            </View>
        );
    }
}
module.exports=IndexView;