import React, { Component } from "react";
import { ScrollView, Text, View, TouchableHighlight, Image} from "react-native";
import { DetailView, Info } from "..";
import HeaderNavigationBar from '../../components/HeaderNavigationBar/HeaderNavigationBar';
import HomePostComponent from '../../components/HomePostComponent/HomePostComponent';
import styles from './style';

export default class HomeScreen extends Component {

    render() {
        return (<View style={styles.container}>      
            <HeaderNavigationBar title={"Home"} />      
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}> 
                <HomePostComponent/>
                <HomePostComponent/>
                <HomePostComponent/>
                
            </ScrollView>
        </View>);
    }
}
