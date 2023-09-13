import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../consts/Colors';

const searchBarStyle = StyleSheet.create({
    container :{
        height:50,
        backgroundColor:Colors.white,
        flexDirection:'row',
        borderRadius:25,
        marginHorizontal:30,
        marginTop:80,
        alignItems:'center'
    },
    icon:{
        padding:10
    },
    input:{
        flex:1,
        backgroundColor:Colors.white,
        color:Colors.input_Color,
        height:40,
        marginRight:20
    }
})
export default searchBarStyle;