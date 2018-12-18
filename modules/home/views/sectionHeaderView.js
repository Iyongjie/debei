import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'; 
const SCREEN_WIDTH = Dimensions.get('window').width;

class SectionHeaderView extends React.Component {
    render(){

        return (
            <View style={styles.container}>
                <Text 
                    style={styles.textView}
                >
                {this.props.text}
                </Text>
                <Image 
                    style={styles.imageView}
                    source={{uri: this.props.imageName}}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 48
    },
    textView: {
        flex: 1,
        marginLeft: 10,
        width: SCREEN_WIDTH - 60,
        height: 20,
        justifyContent: 'center'
    },
    imageView:{
        flex: 1,
        width: 20,
        height: 20,
    }
});

module.exports = SectionHeaderView;