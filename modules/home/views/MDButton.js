/**
 * Created by ithinkeryz on 2017/5/16.
 */
/**
 * Created by ithinkeryz on 2017/5/15.
 */

import React, { Component,PropTypes} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity

} from 'react-native';

export default class MDButton extends Component {
    
    static propTypes = {
        // 普通状态
        title:PropTypes.string,
        imageUri:PropTypes.string,
        titleStyle:PropTypes.object,
        imageStyle:PropTypes.object,

        // 高亮状态
        selectedImageUri:PropTypes.string,
        selectedTitleStyle:PropTypes.object,

        // 监听点击
        onPressIn:PropTypes.func,
        onPressOut:PropTypes.func,

        // 选中状态
        selected:PropTypes.bool,

        // 按钮样式
        buttonStyle:PropTypes.object

    };

    constructor(props){
        super(props);

        this.state = {
            selected:this.props.selected
        }
    }

    render() {
        return (
            <TouchableOpacity style={[styles.buttonStyle,this.props.buttonStyle]}
                              onPressIn={()=>{
                                  if (this.props.onPressIn){
                                      this.props.onPressIn(this);
                                  }

                              }}
                              onPressOut={()=>{
                                  if (this.props.onPressOut){
                                      this.props.onPressOut(this);
                                  }
                              }}
                              activeOpacity={this.props.selectedImageUri || this.props.selectedTitleStyle?0.9:0.3}
            >

                {/*文字*/}
                {this.props.title?<Text style={[this.props.titleStyle,this.props.selected?this.props.selectedTitleStyle:null]}>{this.props.title}</Text>:null}

                {/*头像*/}
                {this.props.imageUri?<Image source={{uri:this.state.selected && this.props.selectedImageUri?this.props.selectedImageUri:this.props.imageUri}} style={[styles.imageStyle,this.props.imageStyle]}/> : null}

            </TouchableOpacity>
        );
    }


}

var styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        marginLeft:3
    }
});
 