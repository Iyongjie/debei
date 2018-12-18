import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import MDButton from './MDButton';
const SCREEN_WIDTH = Dimensions.get('window').width;

class ServiceView extends React.Component {
    render(){
        return (
            <View>
                <View style={styles.topView}>
                <MDButton imageUri='./../../../resources/home/picture/unselectData.png'
                                selectedImageUri='./../../../resources/home/picture/selectData.png'
                                imageStyle={{width:20,height:20}}
                                onPressIn={(button)=>{
                                    var selected = button.state.selected;
                                    selected = !selected;
                                    button.setState({
                                        selected:selected
                                    })
                                }}
                /> 
                    <MDButton   imageUri='./../../../resources/home/picture/unselectData.png'
                                selectedImageUri='./../../../resources/home/picture/selectData.png'
                                title='233.89万人'
                                bottomTitle='累计服务用户数'
                                onPressIn={(button)=>{
                                    var selected = button.state.selected;
                                    selected = !selected;
                                    button.setState({
                                        selected:selected
                                    })
                                }}
                                style={styles.buttonStyle}
                    />
                    <MDButton   imageUri='./../../../resources/home/picture/unselectData.png'
                                selectedImageUri='./../../../resources/home/picture/selectData.png'
                                title='233.89万人'
                                bottomTitle='累计服务用户数'
                                onPressIn={(button)=>{
                                    var selected = button.state.selected;
                                    selected = !selected;
                                    button.setState({
                                        selected:selected
                                    })
                                }}
                                style={styles.buttonStyle}
                    />
                </View>
                <View ></View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    topView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonStyle: {
        width: SCREEN_WIDTH/3.0,
        height: 50
    },
    bottomView: {
        flex: 1,
    }
});
module.exports=ServiceView;