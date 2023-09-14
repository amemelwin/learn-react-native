import { ActivityIndicator ,View} from "react-native";
import Colors from "../../consts/Colors";
import appLoaderStyle from "./AppLoader.style";

enum Size{
    small = 'small' ,
    large = 'large'
}
type AppLoaderProps = {
    color?:string;
    size?: number;
}
const AppLoader = ({size,color}:AppLoaderProps)=>{
    return <View style={appLoaderStyle.container}>
        <ActivityIndicator size={size ?? Size.large} color={color?? Colors.black_color} />
    </View>
}
export default AppLoader;