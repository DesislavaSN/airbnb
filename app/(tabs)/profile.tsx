import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function explore() {
  // const { signOut } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Profile page</Text> */}
      {/* <View style={styles.separator} /> */}
      <TouchableOpacity onPress={() => {
        // signOut; 
        console.log('signing out !');
      }}>
        <Text>Log out</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text>Login In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
