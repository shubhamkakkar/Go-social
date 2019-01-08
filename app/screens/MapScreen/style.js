import { StyleSheet, Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    mapArea:{
        // ...StyleSheet.absoluteFillObject,
        width: deviceWidth,
        height: deviceHeight * 0.5
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
   
});