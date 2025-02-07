import { useState } from 'react';
import { TextInput, Button, Alert, StyleSheet } from 'react-native';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/firebaseConfig'; 
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');

  const handleSave = async () => {
    if (!inputValue.trim()) {
      Alert.alert('Error', 'El campo no puede estar vacío');
      return;
    }

    try {
      await addDoc(collection(db, 'pruebas'), { 
        value: inputValue, 
        timestamp: Date.now() 
      });
      Alert.alert('Éxito', 'Dato guardado correctamente en Firebase');
      setInputValue('');
    } catch (error) {
      console.error('Error al guardar en Firebase:', error);
      Alert.alert('Error', 'No se pudo conectar con Firebase');
    }
  };

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Prueba Firebase</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Ingresa un dato"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Guardar en Firebase" onPress={handleSave} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
});
