import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter();
  const handleContinue = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    router.replace('/login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the app!</Text>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});
