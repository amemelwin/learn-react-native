import { View,Image,Text } from "react-native";
import userItemStyle from "./UserItem.style";
type UserItemProps = {
    item:any;
}
const UserItem =({item}:UserItemProps)=>{
    return (
        <View style={userItemStyle.mainContainer}>
            <Image style={userItemStyle.userImage} source={{uri:item?.avatar}}/>
            <View style={userItemStyle.userInfoView}>
                <Text style={userItemStyle.userName}>{`${item?.first_name} ${item?.last_name}`}</Text>
                <Text style={userItemStyle.emailORAddress}>{item?.email}</Text>
                <Text style={userItemStyle.address}>{item?.address}</Text>
            </View>
        </View>
    )

}
export default UserItem;