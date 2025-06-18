import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [endpoint, setEndpoint] = useState('');
  const [key, setKey] = useState('');
  const [databaseId, setDatabaseId] = useState('');
  const [containerId, setContainerId] = useState('');

  const handleSubmit = async () => {
    await AsyncStorage.multiSet([
      ['endpoint', endpoint],
      ['key', key],
      ['databaseId', databaseId],
      ['containerId', containerId],
    ]);
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Endpoint" value={endpoint} onChangeText={setEndpoint} />
      <TextInput style={styles.input} placeholder="Key" value={key} onChangeText={setKey} secureTextEntry />
      <TextInput style={styles.input} placeholder="Database ID" value={databaseId} onChangeText={setDatabaseId} />
      <TextInput style={styles.input} placeholder="Container ID" value={containerId} onChangeText={setContainerId} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});
