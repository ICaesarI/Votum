import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { createUserWithEmailAndPassword  } from "firebase/auth";       //Funcion necesaria para crear credenciales de usuario
import { auth, db, setDoc, doc} from "@/firebaseConfig";
const signUpScreen = () => {
  const [name, setName] = useState('');           //Nombre
  const [lastName, setLastName] = useState('');   //Apellido
  const [password, setPassword] = useState('');   //Contraseña
  const [email, setEmail] = useState('');         //Email

  const handleSignUp = async () => 
  {
    try 
    {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;

      // Store user data in firestore
      await setDoc(doc(db, "users", user.uid),
      {
        UID: user.uid,
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        createdAt: new Date(),
      })
      Alert.alert("Exito", "Usuario creado correctamente");
    } catch(error)
      {
        Alert.alert("Error", `Ocurrio el error: ${error}`);
      }
   }

   return (
    <View>
      <Text>Regístrate</Text>

      <Text>Nombre</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Ingresa tu Nombre"
      />
      <Text>Apellidos</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Ingresa tus apellidos"
      />
      
      <Text>Email</Text> 
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Ingresa tu email"
      />
      <Text>Contrasena</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder = "Ingrese tu contraseña"
        secureTextEntry
      />

      <Button onPress={handleSignUp}>
        Registrarse
      </Button>
    </View>
  );
}

export default signUpScreen;




 











