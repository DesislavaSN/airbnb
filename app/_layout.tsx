import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store'

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!clerkPublishableKey) {
  throw new Error(
    'ERROR: Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  );
};

const tokenCache = {
  async getToken(key: string){
    try {
      
      // return SecureStore.getItemAsync(key);
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log('No values stored under key: ' + key);
      }
      return item;
    } catch (error) {
      console.log('SecureStore get item error: ', error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },

  async saveToken(key: string, value:string){
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.log('Error in saveToken: ', error);
      return;
    }
  }
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'mon': require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache} >
      {/* <ClerkLoaded> */}
        <RootLayoutNav />
       {/* </ClerkLoaded> */}
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  // this useEffect is for: if the client is NOT authenticated the app will direct the client to login screen:
  useEffect(()=> {
    if (isLoaded && !isSignedIn) {
      router.push('/(modals)/login');
    };
  },[isLoaded]);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="(modals)/login" 
        options={{
          presentation: 'modal',
          title: 'Login',
          headerTitleStyle: {fontFamily: 'mon-sb'},
          headerStyle: {backgroundColor: 'pink'},
          headerTitleAlign:'center',
          headerLeft: () => {
            return (
            <TouchableOpacity
              onPress={() => router.back()}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>);
          }
        }}
      />
      <Stack.Screen
        name='listing/[id]'
        // options={{ headerShown: false }}
      />
      <Stack.Screen name='(modals)/booking'
        options={{
          animation: 'fade',
          presentation: 'transparentModal',
          title: 'Booking',
          headerTitleStyle: {fontFamily: 'mon-sb'},
          headerStyle: {backgroundColor: 'skyblue'},
          headerTitleAlign:'center',
          headerLeft: () => {
            return (
            <TouchableOpacity
              onPress={() => router.back()}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>);
          }
        }}
      />
    </Stack>
  );
};
