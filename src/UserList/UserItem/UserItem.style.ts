import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const userItemStyle =StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    userImage:{
        width:90,
        height:90,
        borderRadius: 90/2,
        marginTop:20,
        zIndex:1,
        marginLeft:10,
        marginRight:-50
    },
    emailORAddress:{
        fontSize:12,
        fontWeight:'500',
        color:Colors.black_color,
        paddingLeft:30,
        paddingBottom:10
    },
    address:{

    },
    userName:{
        fontSize:14,
        fontWeight:'600',
        color:Colors.primary_Color,
        marginLeft:30,
        paddingBottom:10
        
    },
    userInfoView:{
        backgroundColor:Colors.white,
        marginTop:32,
        paddingHorizontal:25,
        justifyContent:'center',
        borderRadius:25,
        flex:1,
        marginRight:10,
        paddingTop:20
    }
})
export default userItemStyle;