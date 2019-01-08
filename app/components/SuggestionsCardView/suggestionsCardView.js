import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class SuggestCardView extends Component {
    
    state = {
        isLiked:false,
        likeCount:this.props.likeCount
    }
    clickOnLikeButton(count){
        
        this.setState({
            isLiked: !this.state.isLiked,
            likeCount: this.state.likeCount + count
        })        
    }
    render(){
        return(
            <View style={styles.cardContainer}>
                <Image style={styles.userImage} source={this.props.userImage}/>
                <Text style={styles.nameText}> {this.props.name} </Text>
            </View>
        );
    }
}