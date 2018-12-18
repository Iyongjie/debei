import React from 'react';
import {
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class DataLifeView extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Image 
                source={require('./../../../resources/home/picture/stapHealth.png')}
                style={styles.image}
                >

                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        marginLeft: 20,
        width: SCREEN_WIDTH/2.0 - 20,
        paddingBottom: 10,
        height:((SCREEN_WIDTH-3*12-5)/2)*(95.0/168.0)+10
    }
});
module.exports=DataLifeView;