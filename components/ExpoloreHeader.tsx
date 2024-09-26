import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen');

export default function ExploreHeader() {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}} >
            <View style={styles.mainCont}>
                <Link href="/(modals)/booking" asChild>
                    <TouchableOpacity>
                        <View style={styles.searchBtnCont}>
                            <FontAwesome name="search" size={24} color="black" style={styles.searchIcon}/>
                            <View>
                                <Text style={{fontFamily: 'mon-b', fontSize: 17 }}>Where to?</Text>
                                <Text style={{color: Colors.GREY, fontFamily: 'mon'}}>Anywhere · Any week</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity style={styles.filterBtn}>
                    <Ionicons name="options-outline" size={24} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainCont: {
        // borderWidth: 1, 
        // borderColor: 'red', 
        height: 80,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    searchBtnCont: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#c2c2c2',
        borderRadius: 30,
        width: width * 0.73,
        paddingVertical: 10,
        backgroundColor: '#fff',

        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
        width: 1,
        height: 1,
        },
    },
    searchIcon: {
        marginHorizontal: 20,
    },
    filterBtn: {
        borderWidth: 1,
        borderColor: Colors.GREY,
        padding: 10,
        borderRadius: 100
    }
});