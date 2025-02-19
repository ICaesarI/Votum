import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, Button } from "react-native";
import { auth, db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Por favor, ingresa el correo y la contraseña.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setMessage(`Bienvenido, ${userData.name}!`);
        } else {
          setMessage(`Bienvenido, ${user.email}`);
        }
      }
    } catch (error) {
      let errorMsg = "Ocurrió un error al iniciar sesión.";
      if (error.code === "auth/invalid-email")
        errorMsg = "El correo no es válido.";
      if (error.code === "auth/user-not-found")
        errorMsg = "Usuario no encontrado.";
      if (error.code === "auth/wrong-password")
        errorMsg = "Contraseña incorrecta.";
      setMessage(errorMsg);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Correo</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Ingresa tu email"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />

      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Contraseña</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />

      <Button title="Iniciar Sesión" onPress={handleLogin} />

      {message ? (
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            color: message.includes("error") ? "red" : "green",
          }}
        >
          {message}
        </Text>
      ) : null}
    </View>
  );
};

export default SignInScreen;
