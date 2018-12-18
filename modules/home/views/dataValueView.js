import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class DataValueView extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.numberLabel}>0.00</Text>
                <View style={styles.scoreView}>
                    <TouchableOpacity style={{borderWidth: 1,borderColor:'blue',borderRadius:15,width: 102,height:31,}} activeOpacity={0.2} focusedOpacity={0.5}>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.text}>获取积分</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{borderWidth: 1,borderColor:'blue',borderRadius:15,width: 102,height:31,}} activeOpacity={0.2} focusedOpacity={0.5}>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.text}>积分兑换</Text>
                        </View>
                    </TouchableOpacity> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    numberLabel: {
        flex: 1,
        color: 'blue',
        justifyContent: 'center'
    },
    scoreView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text:{
        paddingTop:8,
        color: 'blue'
    }
});

module.exports = DataValueView;