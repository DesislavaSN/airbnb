import ExploreHeader from '@/components/ExpoloreHeader';
import Listings from '@/components/Listings';
import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function search() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />
        }}
      />
      <Listings />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  
});

/*
      <Link href="/(modals)/login" asChild>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/(modals)/booking" asChild>
        <TouchableOpacity>
          <Text>Booking</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/listing/1779" asChild>
        <TouchableOpacity>
          <Text>Listing details page</Text>
        </TouchableOpacity>
      </Link>

*/
