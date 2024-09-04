import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function pageId() {
    const {id} = useLocalSearchParams();
    // console.log('the ID is >>> ', id);
    
    return (
        <View>
            <Text>List of items - item ID {id}</Text>
        </View>
    )
}