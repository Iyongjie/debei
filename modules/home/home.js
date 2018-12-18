import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import HomeHeaderView from './views/homeHeaderView';
import SectionHeaderView from './views/sectionHeaderView';
import DataValueView from './views/dataValueView';
import DataLifeView from './views/dataLifeView';
import IndexView from './views/indexView';
import ServiceView from './views/serviceView'

class HomePage extends Component {
    render (){
        return(
            <ScrollView style={styles.container}>
                <HomeHeaderView></HomeHeaderView>
                <SectionHeaderView text='数据资产' imageName='./../../resources/home/homeHeader/dataValue.png'></SectionHeaderView>
                <DataValueView></DataValueView>
                <SectionHeaderView text='数据生活' imageName='./../../resources/home/homeHeader/dataValue.png'></SectionHeaderView>
                <DataLifeView></DataLifeView>
                <SectionHeaderView text='得呗指数' imageName='./../../resources/home/homeHeader/dataValue.png'></SectionHeaderView>
                <IndexView></IndexView>
                <SectionHeaderView text='数据服务' imageName='./../../resources/home/homeHeader/dataValue.png'></SectionHeaderView>
                <ServiceView></ServiceView>
                <SectionHeaderView text='平台保障' imageName='./../../resources/home/homeHeader/dataValue.png'></SectionHeaderView>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
module.exports = HomePage;