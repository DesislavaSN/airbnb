import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Colors from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');

export default function login() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex:1, paddingBottom: 85, backgroundColor: '#fff', padding: 26,}}    
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <TextInput
                            placeholder="Email"
                            autoCapitalize="none"
                            cursorColor={Colors.primary}
                            style={styles.emailInput}
                        />
                        <TouchableOpacity style={styles.continueBtn}>
                            <Text style={styles.continueBtnText}>Continue</Text>
                        </TouchableOpacity>

                        <View style={styles.dividerCont}>
                            <View style={styles.divider}/>
                            <Text style={styles.dividerText}>or</Text>
                            <View style={styles.divider}/>
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity style={styles.socialMediaBtn}>
                                <Feather name="phone" size={24} color="black" style={styles.icon} />
                                <Text style={styles.socialMediaBtnText}>Continue with Phone</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.socialMediaBtn}>
                                <AntDesign name="apple1" size={24} color={Colors.GREY} style={styles.icon} />
                                <Text style={styles.socialMediaBtnText}>Continue with Apple</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.socialMediaBtn}>
                                <AntDesign name="google" size={24} color="red" style={styles.icon} />
                                <Text style={styles.socialMediaBtnText}>Continue with Google</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.socialMediaBtn}>
                                <MaterialCommunityIcons name="facebook" size={26} color="#1230AE" style={styles.icon}/>
                                <Text style={styles.socialMediaBtnText}>Continue with Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

const styles=StyleSheet.create({
    emailInput: {
        borderWidth: 1,
        borderColor: Colors.LIGHTGREY,
        borderRadius: 10,
        paddingHorizontal: 15, 
        paddingVertical: 10,
        marginBottom: 35,
    },
    continueBtn: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    continueBtnText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
        fontFamily: 'mon-b',
    },
    dividerCont: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    divider: {
        flex: 1,
        borderWidth: 0.5,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.GREY,
        alignSelf: 'center',
    },
    dividerText: {
        margin: 10,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.GREY,
        fontFamily: 'mon-b',
    },
    socialMediaBtn: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ABABAB',
        paddingVertical: 15,
        // paddingHorizontal: 10,
        marginBottom: 20,
        flexDirection: 'row',
    },
    icon: {
        paddingLeft: 16,
        paddingRight: 35,
    },
    socialMediaBtnText: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'mon-b',
        alignSelf: 'center',
    }
});