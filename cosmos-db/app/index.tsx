import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const bootstrap = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
      const endpoint = await AsyncStorage.getItem('endpoint');
      if (!hasOnboarded) {
        router.replace('/onboarding');
      } else if (!endpoint) {
        router.replace('/login');
      } else {
        router.replace('/home');
      }
    };
    bootstrap();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading...</Text>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
});
